from rest_framework import serializers
from .models import Todo


class TodoSerializer(serializers.ModelSerializer):
    """Serializer Definition for Todo"""

    class Meta:
        model = Todo
        fields = (
            "id",
            "title",
            "body",
        )
