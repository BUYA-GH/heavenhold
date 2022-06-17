from django.shortcuts import render, get_object_or_404

from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.viewsets import ModelViewSet
from rest_framework.views import APIView

from .serializer import GuildSerializer, GuildMemberSerializer
from .models import Guild, GuildMember
from .permissions import IsMasterOrReadonly

# Create your views here.

# ModelViewSet
class GuildViewSet(ModelViewSet):
    queryset = Guild.objects.all()
    serializer_class = GuildSerializer
    permission_classes = [ IsMasterOrReadonly, ]

class GuildMemberViewSet(ModelViewSet):
    queryset = GuildMember.objects.all()
    serializer_class = GuildMemberSerializer
    permission_classes = [ IsMasterOrReadonly, ]

# [POST] guild/registration/
@api_view(['POST'])
def guild_generate_api_view(request):
    if request.method == "POST":
        user = request.user
        newGuild = {
            'name': request.data['guildname'],
            'type': request.data['guildtype']
        }
        guildSerializer = GuildSerializer(data=newGuild)
        guildObject = None

        if guildSerializer.is_valid():
            guildObject = guildSerializer.save()
            user.guild = guildObject
            user.save()
        else:
            return Response(guildSerializer.errors)

        newMaster = {
            'name': request.data['name'],
            'gamecode': user.gamecode,
            'guild': request.data['guildname'],
            'type': 0
        }
        guildMemberSerializer = GuildMemberSerializer(data=newMaster)

        if guildMemberSerializer.is_valid():
            obj = guildMemberSerializer.save()
            user.guild_member = obj
            user.save()
        else:
            guildObject.delete()
            return Response(guildMemberSerializer.errors)

        return Response(guildSerializer.data)

# [GET] member/search/
@api_view(['GET'])
def member_search_api_view(request):
    if request.method == "GET":
        user = request.user
        match_member = get_object_or_404(GuildMember, gamecode=user.gamecode)
        serializer = GuildMemberSerializer(match_member)
        return Response(serializer.data)

# [POST] member/connect/
@api_view(['POST'])
def member_connect_api_view(request):
    if request.method == "POST":
        user = request.user
        match_member = get_object_or_404(GuildMember, id = request.data['member_id'])

        user.guild_member = match_member
        user.save()

        serializer = GuildMemberSerializer(match_member)
        return Response(serializer.data)