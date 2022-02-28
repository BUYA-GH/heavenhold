from django import forms
from django.contrib.auth.forms import ReadOnlyPasswordHashField

from .models import User

class UserCreationForm(forms.ModelForm):
    password1 = forms.CharField(label='Password',widget=forms.PasswordInput)
    password2 = forms.CharField(label='Password confirmation',widget=forms.PasswordInput)

    class Meta:
        model = User
        fields = ('email', 'username', 'gamecode', 'guild', 'guild_member')

    def clean_password2(self):
        password1 = self.cleaned_data.get('password1')
        password2 = self.cleaned_data.get('password2')
        if password1 and password2 and password1 != password2:
            raise forms.ValidationError("Passwords don't match")
        return password2

    def save(self,commit=True):
        user = super().save(commit=False)
        user.set_password(self.cleaned_data["password1"])
        if commit:
            user.save()
        return user

# class RegistrationForm(UserCreationForm):
#     gamecode = forms.CharField(max_length=10)

#     class Meta:
#         model = User
#         fields = ('email', 'username', 'gamecode', 'guild', 'guild_member')

#     def signup(self, request, user):
#         user.email = self.cleaned_data['email']
#         user.username = self.cleaned_data['username']
#         user.gamecode = self.cleaned_data['gamecode']
#         user.save()
#         return user

class UserChangeForm(forms.ModelForm):
    password = ReadOnlyPasswordHashField()

    class Meta:
        model = User
        fields = ('email', 'password', 'username', 'gamecode', 'guild', 'guild_member')

    def clean_password(self):
        return self.initial['password']