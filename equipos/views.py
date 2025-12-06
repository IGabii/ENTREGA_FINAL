# equipos/views.py
from rest_framework import viewsets
from rest_framework import permissions # Necesario para la Fase 3
from .models import Equipo
from .serializers import EquipoSerializer

class EquipoViewSet(viewsets.ModelViewSet):
    queryset = Equipo.objects.all().order_by('nombre')
    serializer_class = EquipoSerializer
    
    # Permitimos el acceso para empezar
    permission_classes = [permissions.AllowAny]