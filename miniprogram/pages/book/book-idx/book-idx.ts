
Page({
  data: {
    focus: false,
    keywords: '',
  },

  // input events
  inputConfirm: function () {
    const { keywords } = this.data;
    if (!keywords) return;
    wx.navigateTo({
      url: '/pages/book/book-result/book-result?keywords=' + keywords,
    });
  },

  // input UI
  inputUpdate: function (ev: AnyObject) {
    const { value } = ev.detail;
    this.setData({
      keywords: value,
    });
  },

  inputFocus: function () {
    this.setData({
      focus: true,
    });
  },

  inputBlur: function () {
    this.setData({
      focus: false,
    });
  },
});
