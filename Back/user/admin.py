from django.contrib import admin
from django.contrib.auth.models import Group
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin

from .forms import UserCreationForm, UserChangeForm
from .models import User

class UserAdmin(BaseUserAdmin):
    form = UserChangeForm
    add_form = UserCreationForm

    list_display = ('email', 'gamecode', 'guild', 'guild_member', 'is_admin')
    list_filter = ('is_admin',)

    fieldsets = (
        (None, {'fields': ('email', 'gamecode', 'password')}),
        ('Guild Info', {'fields': ('guild', 'guild_member')}),
        ('Permissions', {'fields': ('is_admin', )})
    )

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'gamecode', 'guild', 'guild_member', 'password1', 'password2')}
        ),
    )
    search_fields = ('email', 'gamecode')
    ordering = ('email',)
    filter_horizontal = ()

admin.site.register(User, UserAdmin)
admin.site.unregister(Group)