from django.contrib import admin
from .models import BossInfo, RaidInfo, Damage

# Register your models here.
admin.site.register(BossInfo)
admin.site.register(RaidInfo)
admin.site.register(Damage)