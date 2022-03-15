from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.db import models

class UserManager(BaseUserManager):
    def create_user(self, email, gamecode, password = None):
        if not email:
            raise ValueError('must have user email')
        if not gamecode:
            raise ValueError('must have user code')

        user = self.model(
            email=self.normalize_email(email),
            gamecode=gamecode
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, gamecode, password):
        user = self.create_user(
            email=self.normalize_email(email),
            gamecode=gamecode,
            password=password
        )
        user.is_admin = True
        user.save(using=self._db)
        return user

# Create your models here.
class User(AbstractBaseUser):
    email = models.EmailField(max_length = 255, unique = True)
    gamecode = models.CharField(max_length=10, unique = True)

    guild = models.ForeignKey('guild.Guild', blank = True, null = True, on_delete=models.SET_NULL)
    guild_member = models.OneToOneField('guild.GuildMember', blank = True, null = True, on_delete=models.SET_NULL)

    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['gamecode',]

    def __str__(self):
        return self.email + " / " + self.gamecode
        
    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True

    @property
    def is_staff(self):
        return self.is_admin