from wsgiref.validate import validator
from rest_framework import serializers
from rest_auth.registration.serializers import RegisterSerializer
from allauth.account.adapter import get_adapter
from allauth.account.utils import setup_user_email
from django.utils.translation import ugettext_lazy as _

from .models import User

class MyRegisterSerializer(RegisterSerializer):
    gamecode = serializers.CharField(required=True, write_only=True)

    def validate_gamecode(self, gamecode):
        record = User.objects.filter(gamecode=gamecode).first()
        print(record)
        if record:
            raise serializers.ValidationError(
                _("A user is already registered with this game code"))
        return gamecode

    def get_cleaned_data(self):
        data_dict = super().get_cleaned_data()
        data_dict['gamecode'] = self.validated_data.get('gamecode', '')
        return data_dict

    def save(self, request):
        adapter = get_adapter()
        user = adapter.new_user(request)
        self.cleaned_data = self.get_cleaned_data()
        adapter.save_user(request, user, self)
        setup_user_email(request, user, [])
        user.save()
        return user