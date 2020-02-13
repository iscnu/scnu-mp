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
            url: '/pages/book/book-result/book-result?keywords=' + keywords,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay1pZHguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJib29rLWlkeC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osS0FBSyxFQUFFLEtBQUs7UUFDWixRQUFRLEVBQUUsRUFBRTtLQUNiO0lBR0QsWUFBWSxFQUFFO1FBQ0osSUFBQSw2QkFBUSxDQUFlO1FBQy9CLElBQUksQ0FBQyxRQUFRO1lBQUUsT0FBTztRQUN0QixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLCtDQUErQyxHQUFHLFFBQVE7U0FDaEUsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdELFdBQVcsRUFBRSxVQUFVLEVBQWE7UUFDMUIsSUFBQSx1QkFBSyxDQUFlO1FBQzVCLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxRQUFRLEVBQUUsS0FBSztTQUNoQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsVUFBVSxFQUFFO1FBQ1YsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLEtBQUssRUFBRSxJQUFJO1NBQ1osQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFNBQVMsRUFBRTtRQUNULElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxLQUFLLEVBQUUsS0FBSztTQUNiLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgZm9jdXM6IGZhbHNlLFxuICAgIGtleXdvcmRzOiAnJyxcbiAgfSxcblxuICAvLyBpbnB1dCBldmVudHNcbiAgaW5wdXRDb25maXJtOiBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgeyBrZXl3b3JkcyB9ID0gdGhpcy5kYXRhO1xuICAgIGlmICgha2V5d29yZHMpIHJldHVybjtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogJy9wYWdlcy9ib29rL2Jvb2stcmVzdWx0L2Jvb2stcmVzdWx0P2tleXdvcmRzPScgKyBrZXl3b3JkcyxcbiAgICB9KTtcbiAgfSxcblxuICAvLyBpbnB1dCBVSVxuICBpbnB1dFVwZGF0ZTogZnVuY3Rpb24gKGV2OiBBbnlPYmplY3QpIHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBldi5kZXRhaWw7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGtleXdvcmRzOiB2YWx1ZSxcbiAgICB9KTtcbiAgfSxcblxuICBpbnB1dEZvY3VzOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGZvY3VzOiB0cnVlLFxuICAgIH0pO1xuICB9LFxuXG4gIGlucHV0Qmx1cjogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBmb2N1czogZmFsc2UsXG4gICAgfSk7XG4gIH0sXG59KTtcbiJdfQ==