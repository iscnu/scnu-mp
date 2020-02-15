
Page({
  /**
   * 页面的初始数据
   */
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {}
});