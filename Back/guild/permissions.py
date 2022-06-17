from rest_framework import permissions

class IsMasterOrReadonly(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.user.is_authenticated :
            if request.method in permissions.SAFE_METHODS :
                return True
            else :
                member = request.user.guild_member
                if member and (member.type == 0) or (member.type == 1) :
                    return True
                else :
                    return False
        else:
            return False
    
    def has_object_permission(self, request, view, obj):
        if request.user.is_authenticated :
            if request.method in permissions.SAFE_METHODS :
                return True
            else :
                guild = request.user.guild
                member = request.user.guild_member
                if member and (member.type == 0) or (member.type == 1) :
                    return obj == guild or obj == member

