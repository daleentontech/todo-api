from django.db import models

# Create your models here.


class Todo(models.Model):
    """Model definition for Todo."""

    # TODO: Define fields here
    title = models.CharField(max_length=200)
    body = models.TextField()

    def __str__(self):
        """Unicode representation of Todo."""
        return self.title