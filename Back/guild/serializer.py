from rest_framework import serializers
from .models import Guild, GuildMember

class GuildSerializer(serializers.ModelSerializer) :
    members = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = Guild
        fields = ('id', 'name', 'type', 'members')

class GuildMemberSerializer(serializers.ModelSerializer):
    guild = serializers.SlugRelatedField(slug_field='name', queryset=Guild.objects.all())

    class Meta:
        model = GuildMember
        fields = ('id', 'name', 'gamecode', 'guild', 'type')