from django.db import models
from django.utils.translation import gettext_lazy as _

# Create your models here.
class ElementType(models.IntegerChoices):
    BASIC = 0, _('Basic')
    LIGHT = 1, _('Light')
    DARK = 2, _('Dark')
    FIRE = 3, _('Fire')
    GROUND = 4, _('Ground')
    WATER = 5, _('Water')

class StateType(models.IntegerChoices):
    INJURED = 0
    DOWNED = 1
    AIRBORNE = 2
    INJUREDDOWNED = 3
    INJUREDAIRBORNE = 4
    DOWNEDAIRBORNE = 5
    ALL = 6

class BossType(models.IntegerChoices):
    A = 0
    B = 1
    C = 2
    D = 3

class BossInfo(models.Model):
    name = models.CharField(max_length=50)
    type = models.IntegerField(choices=ElementType.choices)
    weak = models.IntegerField(choices=StateType.choices)

    def get_element(self):
        return ElementType(self.type).label

    def __str__(self):
        return "{0} / {1}".format(self.name, self.get_element())

class RaidInfo(models.Model):
    round = models.IntegerField(primary_key = True, unique=True)
    name = models.CharField(max_length=50)
    startdate = models.DateField()

    bossA = models.ForeignKey(BossInfo, related_name = 'bossA', blank = True, null = True, on_delete=models.SET_NULL)
    bossB = models.ForeignKey(BossInfo, related_name = 'bossB', blank = True, null = True, on_delete=models.SET_NULL)
    bossC = models.ForeignKey(BossInfo, related_name = 'bossC', blank = True, null = True, on_delete=models.SET_NULL)
    bossD = models.ForeignKey(BossInfo, related_name = 'bossD', blank = True, null = True, on_delete=models.SET_NULL)

    def __str__(self):
        return "round {0} : {1}".format(self.round, self.name)

class Damage(models.Model):
    raid = models.ForeignKey(RaidInfo, on_delete=models.CASCADE)
    date = models.DateField()

    guild = models.ForeignKey('guild.Guild', on_delete=models.CASCADE)
    member = models.ForeignKey('guild.GuildMember', on_delete=models.CASCADE)

    boss = models.IntegerField(choices=BossType.choices)
    damage = models.IntegerField()

    def __str__(self):
        return "round {0} / {1} : {2}".format(self.guild, self.member, self.date)