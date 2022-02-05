from django.db import models

class GuildType(models.IntegerChoices):
    DC = 0
    CAFE = 1
    OTHER = 2

# Create your models here.
class Guild(models.Model):
    name = models.CharField(max_length=50, unique=True)
    type = models.IntegerField(choices=GuildType.choices)

    def __str__(self):
        return "{0}".format(self.name)

class GuildMember(models.Model):
    name = models.CharField(max_length=30)
    guild = models.ForeignKey(Guild, on_delete=models.CASCADE)

    is_master = models.BooleanField(default=False)
    is_subMaster = models.BooleanField(default=False)

    def __str__(self):
        return "{0} / {1}".format(self.name, self.guild)