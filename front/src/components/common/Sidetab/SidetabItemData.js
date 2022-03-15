import React from 'react';

export const SidetabItemData = [
    {
        title: "길드",
        path: "/guild",
        iconsrc: "/img/Users_Group.png",

        subItem: [
            {
                title: "멤버 관리",
                path: "/guild/members",
                iconsrc: "/img/Users_Group.png",
            },
            {
                title: "길드 리더보드",
                path: "/guild/guildboard",
                iconsrc: "/img/Users_Group.png",
            },
            {
                title: "개인 리더보드",
                path: "/guild/userboard",
                iconsrc: "/img/Users_Group.png",
            }
        ]
    },
    {
        title: "콜로세움",
        path: "/colosseum",
        iconsrc: "/img/Users_Group.png",

        subItem: [
            {
                title: "콜로 계산기",
                path: "/colosseum/calculator",
                iconsrc: "/img/Users_Group.png",
            }
        ]
    },
    {
        title: "내 정보",
        path: "/myinfo",
        iconsrc: "/img/Users_Group.png",

        subItem: [
            {
                title: "테스트",
                path: "/myinfo/text",
                iconsrc: "/img/Users_Group.png",
            }
        ]
    }
]