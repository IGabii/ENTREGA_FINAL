# equipos/models.py
from django.db import models

class Equipo(models.Model):
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField()
    precio_alquiler_dia = models.DecimalField(max_digits=10, decimal_places=2)
    cantidad_disponible = models.PositiveIntegerField(default=1)
    
    TIPO_CHOICES = [('CAMARA', 'Cámara'), ('LENTE', 'Lente'), ('ACCESORIO', 'Accesorio')]
    tipo = models.CharField(max_length=20, choices=TIPO_CHOICES, default='CAMARA')
    
    fecha_creacion = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.nombre} ({self.tipo})"