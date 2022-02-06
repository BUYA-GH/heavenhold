from django.db import models

# Create your models here.
class ElementType(models.IntegerChoices):
    BASIC = 0
    LIGHT = 1
    DARK = 2
    FIRE = 3
    GROUND = 4
    WATER = 5

class StateType(models.IntegerChoices):
    INJURED = 0
    DOWNED = 1
    AIRBORNE = 2

class BossInfo(models.Model):
    name = models.CharField(max_length=50)
    type = models.IntegerField(choices=ElementType.choices)
    weak = models.IntegerField(choices=StateType.choices)

    def __str__(self):
        return "{0} / {1}".format(self.name, self.type)

class RaidInfo(models.Model):
    round = models.IntegerField(unique=True)
    name = models.CharField(max_length=50)
    startdate = models.DateField()

    bossA = models.ForeignKey(BossInfo, blank = True, null = True, on_delete=models.SET_NULL)
    bossB = models.ForeignKey(BossInfo, blank = True, null = True, on_delete=models.SET_NULL)
    bossC = models.ForeignKey(BossInfo, blank = True, null = True, on_delete=models.SET_NULL)
    bossD = models.ForeignKey(BossInfo, blank = True, null = True, on_delete=models.SET_NULL)

    def __str__(self):
        return "round {0} : {1}".format(self.round, self.name)

class Damage(models.Model):
    guild = models.ForeignKey('guild.Guild', on_delete=models.CASCADE)
    member = models.ForeignKey('guild.GuildMember', on_delete=models.CASCADE)

    date = models.DateField()

    damage = models.IntegerField()
