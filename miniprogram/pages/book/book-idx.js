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
        console.log(keywords);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay1pZHguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJib29rLWlkeC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osS0FBSyxFQUFFLEtBQUs7UUFDWixRQUFRLEVBQUUsRUFBRTtLQUNiO0lBR0QsWUFBWSxFQUFFO1FBQ0osSUFBQSw2QkFBUSxDQUFlO1FBQy9CLElBQUksQ0FBQyxRQUFRO1lBQUUsT0FBTztRQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFHRCxXQUFXLEVBQUUsVUFBVSxFQUFhO1FBQzFCLElBQUEsdUJBQUssQ0FBZTtRQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsUUFBUSxFQUFFLEtBQUs7U0FDaEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFVBQVUsRUFBRTtRQUNWLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxLQUFLLEVBQUUsSUFBSTtTQUNaLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxTQUFTLEVBQUU7UUFDVCxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsS0FBSyxFQUFFLEtBQUs7U0FDYixDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIGZvY3VzOiBmYWxzZSxcbiAgICBrZXl3b3JkczogJycsXG4gIH0sXG5cbiAgLy8gaW5wdXQgZXZlbnRzXG4gIGlucHV0Q29uZmlybTogZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHsga2V5d29yZHMgfSA9IHRoaXMuZGF0YTtcbiAgICBpZiAoIWtleXdvcmRzKSByZXR1cm47XG4gICAgY29uc29sZS5sb2coa2V5d29yZHMpO1xuICB9LFxuXG4gIC8vIGlucHV0IFVJXG4gIGlucHV0VXBkYXRlOiBmdW5jdGlvbiAoZXY6IEFueU9iamVjdCkge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IGV2LmRldGFpbDtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAga2V5d29yZHM6IHZhbHVlLFxuICAgIH0pO1xuICB9LFxuXG4gIGlucHV0Rm9jdXM6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgZm9jdXM6IHRydWUsXG4gICAgfSk7XG4gIH0sXG5cbiAgaW5wdXRCbHVyOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGZvY3VzOiBmYWxzZSxcbiAgICB9KTtcbiAgfSxcbn0pO1xuIl19