import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const BASE_URL = 'http://127.0.0.1:8000/api/';
    const [user, setUser] = useState(null);
    const [authTokens, setAuthTokens] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const storedTokens = localStorage.getItem('authTokens');
        if (storedTokens) {
            try {
                const tokens = JSON.parse(storedTokens);
                setAuthTokens(tokens);
                setUser(jwtDecode(tokens.access));
                axios.defaults.headers.common['Authorization'] = `Bearer ${tokens.access}`;
            } catch (error) {
                console.error("Error validando tokens:", error);
                localStorage.removeItem('authTokens');
            }
        }
        setLoading(false);
    }, []);

    const loginUser = async (username, password) => {
        try {
            const response = await axios.post(`${BASE_URL}token/`, { username, password });
            if (response.status === 200) {
                setAuthTokens(response.data);
                setUser(jwtDecode(response.data.access));
                localStorage.setItem('authTokens', JSON.stringify(response.data));
                axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.access}`;
                navigate('/dashboard');
            }
        } catch (error) {
            console.error(error);
            alert('Error al iniciar sesión. Verifica tus credenciales.');
        }
    };

    const logoutUser = () => {
        setAuthTokens(null);
        setUser(null);
        localStorage.removeItem('authTokens');
        delete axios.defaults.headers.common['Authorization'];
        navigate('/login');
    };

    const contextData = { user, authTokens, loginUser, logoutUser, BASE_URL };

    return (
        <AuthContext.Provider value={contextData}>
            {loading ? null : children}
        </AuthContext.Provider>
    );
};