from django.db import models

class GuildType(models.IntegerChoices):
    DC = 0
    CAFE = 1
    OTHER = 2

class MemberRole(models.IntegerChoices):
    MASTER = 0
    SUBMASTER = 1
    WRITER = 2
    MEMBER = 3

# Create your models here.
class Guild(models.Model):
    name = models.CharField(max_length=50, unique=True)
    type = models.IntegerField(choices=GuildType.choices)

    def __str__(self):
        return "{0}".format(self.name)

class GuildMember(models.Model):
    name = models.CharField(max_length=30)
    gamecode = models.CharField(max_length=10, unique = True)
    guild = models.ForeignKey(Guild, related_name="members", on_delete=models.CASCADE)
    type = models.IntegerField(choices=MemberRole.choices)

    def __str__(self):
        return "{0} / {1}".format(self.name, self.guild)