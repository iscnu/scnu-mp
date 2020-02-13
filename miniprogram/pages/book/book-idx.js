"use strict";
Page({
    data: {
        focus: false,
        keywords: '',
    },
    inputConfirm: function () {
        var keywords = this.data.keywords;
        if (!keywords)
            return;
        wx.navigateTo({
            url: '/pages/book/book-result?keywords=' + keywords,
        });
    },
    inputUpdate: function (ev) {
        var value = ev.detail.value;
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
