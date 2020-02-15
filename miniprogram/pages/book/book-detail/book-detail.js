"use strict";
Page({
    data: {
        bookInfo: {
            title: "乡土中国",
            author: "费孝通",
            publishingHouse: "出版社"
        },
        collectionInfo: {
            avaliable: 3,
            total: 5,
            list: [
                {
                    roll: "",
                    position: "石牌中文文史借阅室(二楼北座)",
                    status: "可借",
                    callNum: "I533.45/J321NH",
                    barCode: "A8052020"
                }, {
                    roll: "1",
                    position: "石牌中文文史借阅室(二楼北座)",
                    status: "可借",
                    callNum: "I533.45/J321NH",
                    barCode: "A8052020"
                }, {
                    roll: "",
                    position: "石牌中文文史借阅室(二楼北座)",
                    status: "可借",
                    callNum: "I533.45/J321NH",
                    barCode: "A8052020"
                },
            ]
        },
        intro: "本书可以当作哲学启蒙书来阅读，对于未曾修习哲学概论者而言，本书是最佳的入门读物，对于修过此门课程但已忘却大半的人而言，本书有助他们重新温习。",
        detailInfo: [
            {
                title: "题名/责任者:",
                content: "苏菲的世界/(挪威) 乔斯坦·贾德(Jostein Gaarder)著 萧宝森译"
            },
            {
                title: "出版发行项:",
                content: "北京:作家出版社,1999"
            },
            {
                title: "ISBN及定价:",
                content: "7-5063-1071-6/CNY26.80"
            },
            {
                title: "载体形态项:",
                content: "535页;20cm"
            },
            {
                title: "并列正题名:",
                content: "Sophie's World"
            },
            {
                title: "个人责任者:",
                content: "贾德, J. (Gaarder,Jostein) 著"
            },
            {
                title: "个人次要责任者:",
                content: "萧宝森 译"
            },
            {
                title: "学科主题:",
                content: "长篇小说-挪威-现代"
            },
            {
                title: "中图法分类号:",
                content: "I533.45"
            },
            {
                title: "科图法分类号:",
                content: "47.3252"
            },
            {
                title: "提要文摘附注:",
                content: "本书可以当作哲学启蒙书来阅读，对于未曾修习哲学概论者而言，本书是最佳的入门读物，对于修过此门课程但已忘却大半的人而言，本书有助他们重新温习。"
            }
        ]
    },
    onLoad: function (options) {
        console.log(options);
    },
    onReady: function () { },
    onShow: function () { },
    onHide: function () { }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay1kZXRhaWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJib29rLWRldGFpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsSUFBSSxDQUFDO0lBSUgsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFO1lBQ1IsS0FBSyxFQUFFLE1BQU07WUFDYixNQUFNLEVBQUUsS0FBSztZQUNiLGVBQWUsRUFBRSxLQUFLO1NBQ3ZCO1FBQ0QsY0FBYyxFQUFFO1lBQ2QsU0FBUyxFQUFFLENBQUM7WUFDWixLQUFLLEVBQUUsQ0FBQztZQUNSLElBQUksRUFBRTtnQkFDSjtvQkFDRSxJQUFJLEVBQUUsRUFBRTtvQkFDUixRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixNQUFNLEVBQUUsSUFBSTtvQkFDWixPQUFPLEVBQUUsZ0JBQWdCO29CQUN6QixPQUFPLEVBQUUsVUFBVTtpQkFDcEIsRUFBRTtvQkFDRCxJQUFJLEVBQUUsR0FBRztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixNQUFNLEVBQUUsSUFBSTtvQkFDWixPQUFPLEVBQUUsZ0JBQWdCO29CQUN6QixPQUFPLEVBQUUsVUFBVTtpQkFDcEIsRUFBRTtvQkFDRCxJQUFJLEVBQUUsRUFBRTtvQkFDUixRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixNQUFNLEVBQUUsSUFBSTtvQkFDWixPQUFPLEVBQUUsZ0JBQWdCO29CQUN6QixPQUFPLEVBQUUsVUFBVTtpQkFDcEI7YUFDRjtTQUNGO1FBQ0QsS0FBSyxFQUFFLHdFQUF3RTtRQUMvRSxVQUFVLEVBQUU7WUFDVjtnQkFDRSxLQUFLLEVBQUUsU0FBUztnQkFDaEIsT0FBTyxFQUFFLDBDQUEwQzthQUNwRDtZQUNEO2dCQUNFLEtBQUssRUFBRSxRQUFRO2dCQUNmLE9BQU8sRUFBRSxlQUFlO2FBQ3pCO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLFVBQVU7Z0JBQ2pCLE9BQU8sRUFBRSx3QkFBd0I7YUFDbEM7WUFDRDtnQkFDRSxLQUFLLEVBQUUsUUFBUTtnQkFDZixPQUFPLEVBQUUsV0FBVzthQUNyQjtZQUNEO2dCQUNFLEtBQUssRUFBRSxRQUFRO2dCQUNmLE9BQU8sRUFBRSxnQkFBZ0I7YUFDMUI7WUFDRDtnQkFDRSxLQUFLLEVBQUUsUUFBUTtnQkFDZixPQUFPLEVBQUUsNEJBQTRCO2FBQ3RDO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLFVBQVU7Z0JBQ2pCLE9BQU8sRUFBRSxPQUFPO2FBQ2pCO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLE9BQU87Z0JBQ2QsT0FBTyxFQUFFLFlBQVk7YUFDdEI7WUFDRDtnQkFDRSxLQUFLLEVBQUUsU0FBUztnQkFDaEIsT0FBTyxFQUFFLFNBQVM7YUFDbkI7WUFDRDtnQkFDRSxLQUFLLEVBQUUsU0FBUztnQkFDaEIsT0FBTyxFQUFFLFNBQVM7YUFDbkI7WUFDRDtnQkFDRSxLQUFLLEVBQUUsU0FBUztnQkFDaEIsT0FBTyxFQUFFLHdFQUF3RTthQUNsRjtTQUNGO0tBQ0Y7SUFLRCxNQUFNLEVBQUUsVUFBUyxPQUFPO1FBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUtELE9BQU8sRUFBRSxjQUFZLENBQUM7SUFLdEIsTUFBTSxFQUFFLGNBQVksQ0FBQztJQUtyQixNQUFNLEVBQUUsY0FBWSxDQUFDO0NBQ3RCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuUGFnZSh7XG4gIC8qKlxuICAgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHtcbiAgICBib29rSW5mbzoge1xuICAgICAgdGl0bGU6IFwi5Lmh5Zyf5Lit5Zu9XCIsXG4gICAgICBhdXRob3I6IFwi6LS55a2d6YCaXCIsXG4gICAgICBwdWJsaXNoaW5nSG91c2U6IFwi5Ye654mI56S+XCJcbiAgICB9LFxuICAgIGNvbGxlY3Rpb25JbmZvOiB7XG4gICAgICBhdmFsaWFibGU6IDMsXG4gICAgICB0b3RhbDogNSxcbiAgICAgIGxpc3Q6IFtcbiAgICAgICAge1xuICAgICAgICAgIHJvbGw6IFwiXCIsXG4gICAgICAgICAgcG9zaXRpb246IFwi55+z54mM5Lit5paH5paH5Y+y5YCf6ZiF5a6kKOS6jOalvOWMl+W6pylcIixcbiAgICAgICAgICBzdGF0dXM6IFwi5Y+v5YCfXCIsXG4gICAgICAgICAgY2FsbE51bTogXCJJNTMzLjQ1L0ozMjFOSFwiLFxuICAgICAgICAgIGJhckNvZGU6IFwiQTgwNTIwMjBcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgcm9sbDogXCIxXCIsXG4gICAgICAgICAgcG9zaXRpb246IFwi55+z54mM5Lit5paH5paH5Y+y5YCf6ZiF5a6kKOS6jOalvOWMl+W6pylcIixcbiAgICAgICAgICBzdGF0dXM6IFwi5Y+v5YCfXCIsXG4gICAgICAgICAgY2FsbE51bTogXCJJNTMzLjQ1L0ozMjFOSFwiLFxuICAgICAgICAgIGJhckNvZGU6IFwiQTgwNTIwMjBcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgcm9sbDogXCJcIixcbiAgICAgICAgICBwb3NpdGlvbjogXCLnn7PniYzkuK3mlofmloflj7LlgJ/pmIXlrqQo5LqM5qW85YyX5bqnKVwiLFxuICAgICAgICAgIHN0YXR1czogXCLlj6/lgJ9cIixcbiAgICAgICAgICBjYWxsTnVtOiBcIkk1MzMuNDUvSjMyMU5IXCIsXG4gICAgICAgICAgYmFyQ29kZTogXCJBODA1MjAyMFwiXG4gICAgICAgIH0sICBcbiAgICAgIF1cbiAgICB9LFxuICAgIGludHJvOiBcIuacrOS5puWPr+S7peW9k+S9nOWTsuWtpuWQr+iSmeS5puadpemYheivu++8jOWvueS6juacquabvuS/ruS5oOWTsuWtpuamguiuuuiAheiAjOiogO+8jOacrOS5puaYr+acgOS9s+eahOWFpemXqOivu+eJqe+8jOWvueS6juS/rui/h+atpOmXqOivvueoi+S9huW3suW/mOWNtOWkp+WNiueahOS6uuiAjOiogO+8jOacrOS5puacieWKqeS7luS7rOmHjeaWsOa4qeS5oOOAglwiLFxuICAgIGRldGFpbEluZm86IFtcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6IFwi6aKY5ZCNL+i0o+S7u+iAhTpcIixcbiAgICAgICAgY29udGVudDogXCLoi4/oj7LnmoTkuJbnlYwvKOaMquWogSkg5LmU5pav5Z2mwrfotL7lvrcoSm9zdGVpbiBHYWFyZGVyKeiRlyDokKflrp3mo67or5FcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6IFwi5Ye654mI5Y+R6KGM6aG5OlwiLFxuICAgICAgICBjb250ZW50OiBcIuWMl+S6rDrkvZzlrrblh7rniYjnpL4sMTk5OVwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogXCJJU0JO5Y+K5a6a5Lu3OlwiLFxuICAgICAgICBjb250ZW50OiBcIjctNTA2My0xMDcxLTYvQ05ZMjYuODBcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6IFwi6L295L2T5b2i5oCB6aG5OlwiLFxuICAgICAgICBjb250ZW50OiBcIjUzNemhtTsyMGNtXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiBcIuW5tuWIl+ato+mimOWQjTpcIixcbiAgICAgICAgY29udGVudDogXCJTb3BoaWUncyBXb3JsZFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogXCLkuKrkurrotKPku7vogIU6XCIsXG4gICAgICAgIGNvbnRlbnQ6IFwi6LS+5b63LCBKLiAoR2FhcmRlcixKb3N0ZWluKSDokZdcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6IFwi5Liq5Lq65qyh6KaB6LSj5Lu76ICFOlwiLFxuICAgICAgICBjb250ZW50OiBcIuiQp+WuneajriDor5FcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6IFwi5a2m56eR5Li76aKYOlwiLFxuICAgICAgICBjb250ZW50OiBcIumVv+evh+Wwj+ivtC3mjKrlqIEt546w5LujXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiBcIuS4reWbvuazleWIhuexu+WPtzpcIixcbiAgICAgICAgY29udGVudDogXCJJNTMzLjQ1XCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiBcIuenkeWbvuazleWIhuexu+WPtzpcIixcbiAgICAgICAgY29udGVudDogXCI0Ny4zMjUyXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiBcIuaPkOimgeaWh+aRmOmZhOazqDpcIixcbiAgICAgICAgY29udGVudDogXCLmnKzkuablj6/ku6XlvZPkvZzlk7LlrablkK/okpnkuabmnaXpmIXor7vvvIzlr7nkuo7mnKrmm77kv67kuaDlk7LlrabmpoLorrrogIXogIzoqIDvvIzmnKzkuabmmK/mnIDkvbPnmoTlhaXpl6jor7vnianvvIzlr7nkuo7kv67ov4fmraTpl6jor77nqIvkvYblt7Llv5jljbTlpKfljYrnmoTkurrogIzoqIDvvIzmnKzkuabmnInliqnku5bku6zph43mlrDmuKnkuaDjgIJcIlxuICAgICAgfVxuICAgIF1cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cbiAgICovXG4gIG9uTG9hZDogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIGNvbnNvbGUubG9nKG9wdGlvbnMpO1xuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxuICAgKi9cbiAgb25SZWFkeTogZnVuY3Rpb24oKSB7fSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcbiAgICovXG4gIG9uU2hvdzogZnVuY3Rpb24oKSB7fSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cbiAgICovXG4gIG9uSGlkZTogZnVuY3Rpb24oKSB7fVxufSk7Il19