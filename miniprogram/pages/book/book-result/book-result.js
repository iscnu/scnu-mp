"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var MAX_PAGE = 5;
Page({
    data: {
        init: true,
        loading: false,
        total: 0,
        page: 1,
        maxPage: MAX_PAGE,
        keywords: '',
        searchResult: [],
    },
    currentKeywords: '',
    onLoad: function (query) {
        var keywords = query.keywords;
        this.setData({
            keywords: keywords,
            init: !!keywords,
            searchResult: [],
        });
        keywords && this.fetchSearchResult(keywords, this.data.page);
    },
    inputUpdate: function (ev) {
        var value = ev.detail.value;
        this.setData({
            keywords: value,
        });
    },
    inputConfirm: function () {
        if (this.data.loading || !this.data.keywords)
            return;
        this.fetchSearchResult(this.data.keywords);
    },
    onReachBottom: function () {
        var _this = this;
        if (this.data.loading || this.data.searchResult.length >= this.data.total || this.data.page >= MAX_PAGE)
            return;
        console.log('-- reach bottom');
        this.setData({
            loading: true,
            page: this.data.page + 1,
        }, function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.fetchSearchResult(this.data.keywords, this.data.page)];
                    case 1:
                        _a.sent();
                        this.setData({ loading: false });
                        return [2];
                }
            });
        }); });
    },
    fetchSearchResult: function (keywords, page) {
        if (page === void 0) { page = 1; }
        return __awaiter(this, void 0, void 0, function () {
            var result, _a, searchResult, total;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.setData(__assign({ loading: true, page: page, init: false }, (page === 1 ? { searchResult: [] } : null)));
                        return [4, wx.cloud.callFunction({
                                name: 'book-search',
                                data: {
                                    keywords: keywords,
                                    pageCount: page,
                                },
                            })];
                    case 1:
                        result = (_b.sent()).result;
                        _a = result.data, searchResult = _a.content, total = _a.total;
                        this.setData({
                            loading: false,
                            total: total,
                            searchResult: __spreadArrays(this.data.searchResult, searchResult)
                        });
                        this.currentKeywords = keywords;
                        return [2];
                }
            });
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay1yZXN1bHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJib29rLXJlc3VsdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUEsSUFBTSxRQUFRLEdBQUcsQ0FBQyxDQUFDO0FBRW5CLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxJQUFJO1FBQ1YsT0FBTyxFQUFFLEtBQUs7UUFDZCxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksRUFBRSxDQUFDO1FBQ1AsT0FBTyxFQUFFLFFBQVE7UUFDakIsUUFBUSxFQUFFLEVBQUU7UUFDWixZQUFZLEVBQUUsRUFBb0I7S0FDbkM7SUFFRCxlQUFlLEVBQUUsRUFBRTtJQUVuQixNQUFNLFlBQUMsS0FBSztRQUNGLElBQUEseUJBQVEsQ0FBVztRQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsUUFBUSxVQUFBO1lBQ1IsSUFBSSxFQUFFLENBQUMsQ0FBQyxRQUFRO1lBQ2hCLFlBQVksRUFBRSxFQUFFO1NBQ2pCLENBQUMsQ0FBQztRQUNILFFBQVEsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUdELFdBQVcsRUFBRSxVQUFVLEVBQWE7UUFDMUIsSUFBQSx1QkFBSyxDQUFlO1FBQzVCLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxRQUFRLEVBQUUsS0FBSztTQUNoQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsWUFBWTtRQUNWLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7WUFBRSxPQUFPO1FBQ3JELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxhQUFhO1FBQWIsaUJBVUM7UUFUQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxRQUFRO1lBQUUsT0FBTztRQUNoSCxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLE9BQU8sRUFBRSxJQUFJO1lBQ2IsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUM7U0FDekIsRUFBRTs7OzRCQUNELFdBQU0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUE7O3dCQUFoRSxTQUFnRSxDQUFDO3dCQUNqRSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7Ozs7YUFDbEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVLLGlCQUFpQixFQUF2QixVQUF3QixRQUFnQixFQUFFLElBQVE7UUFBUixxQkFBQSxFQUFBLFFBQVE7Ozs7Ozt3QkFDaEQsSUFBSSxDQUFDLE9BQU8sWUFDVixPQUFPLEVBQUUsSUFBSSxFQUNiLElBQUksTUFBQSxFQUNKLElBQUksRUFBRSxLQUFLLElBQ1IsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQzdDLENBQUM7d0JBQ2dCLFdBQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUM7Z0NBQzdDLElBQUksRUFBRSxhQUFhO2dDQUNuQixJQUFJLEVBQUU7b0NBQ0osUUFBUSxVQUFBO29DQUNSLFNBQVMsRUFBRSxJQUFJO2lDQUNoQjs2QkFDRixDQUFDLEVBQUE7O3dCQU5NLE1BQU0sR0FBSyxDQUFBLFNBTWpCLENBQUEsT0FOWTt3QkFPTixLQUEyQyxNQUFnQyxLQUFyQyxFQUFyQixZQUFZLGFBQUEsRUFBRSxLQUFLLFdBQUEsQ0FBd0M7d0JBQ3BGLElBQUksQ0FBQyxPQUFPLENBQUM7NEJBQ1gsT0FBTyxFQUFFLEtBQUs7NEJBQ2QsS0FBSyxPQUFBOzRCQUNMLFlBQVksaUJBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUssWUFBWSxDQUFDO3lCQUMzRCxDQUFDLENBQUM7d0JBQ0gsSUFBSSxDQUFDLGVBQWUsR0FBRyxRQUFRLENBQUM7Ozs7O0tBQ2pDO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiDlm77kuabmkJzntKLnu5PmnpzliJfooahcbiAqL1xuXG5jb25zdCBNQVhfUEFHRSA9IDU7IC8vIOacgOWkmue/u+S6lOmhteWIsOW6lVxuXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIGluaXQ6IHRydWUsXG4gICAgbG9hZGluZzogZmFsc2UsXG4gICAgdG90YWw6IDAsXG4gICAgcGFnZTogMSxcbiAgICBtYXhQYWdlOiBNQVhfUEFHRSxcbiAgICBrZXl3b3JkczogJycsXG4gICAgc2VhcmNoUmVzdWx0OiBbXSBhcyBib29rSXRlbURhdGFbXSxcbiAgfSxcblxuICBjdXJyZW50S2V5d29yZHM6ICcnLFxuXG4gIG9uTG9hZChxdWVyeSkge1xuICAgIGNvbnN0IHsga2V5d29yZHMgfSA9IHF1ZXJ5O1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBrZXl3b3JkcyxcbiAgICAgIGluaXQ6ICEha2V5d29yZHMsXG4gICAgICBzZWFyY2hSZXN1bHQ6IFtdLFxuICAgIH0pO1xuICAgIGtleXdvcmRzICYmIHRoaXMuZmV0Y2hTZWFyY2hSZXN1bHQoa2V5d29yZHMsIHRoaXMuZGF0YS5wYWdlKTtcbiAgfSxcblxuICAvLyBpbnB1dCBVSVxuICBpbnB1dFVwZGF0ZTogZnVuY3Rpb24gKGV2OiBBbnlPYmplY3QpIHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBldi5kZXRhaWw7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGtleXdvcmRzOiB2YWx1ZSxcbiAgICB9KTtcbiAgfSxcblxuICBpbnB1dENvbmZpcm0oKSB7XG4gICAgaWYgKHRoaXMuZGF0YS5sb2FkaW5nIHx8ICF0aGlzLmRhdGEua2V5d29yZHMpIHJldHVybjtcbiAgICB0aGlzLmZldGNoU2VhcmNoUmVzdWx0KHRoaXMuZGF0YS5rZXl3b3Jkcyk7XG4gIH0sXG5cbiAgb25SZWFjaEJvdHRvbSgpIHtcbiAgICBpZiAodGhpcy5kYXRhLmxvYWRpbmcgfHwgdGhpcy5kYXRhLnNlYXJjaFJlc3VsdC5sZW5ndGggPj0gdGhpcy5kYXRhLnRvdGFsIHx8IHRoaXMuZGF0YS5wYWdlID49IE1BWF9QQUdFKSByZXR1cm47XG4gICAgY29uc29sZS5sb2coJy0tIHJlYWNoIGJvdHRvbScpO1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgcGFnZTogdGhpcy5kYXRhLnBhZ2UgKyAxLFxuICAgIH0sIGFzeW5jICgpID0+IHtcbiAgICAgIGF3YWl0IHRoaXMuZmV0Y2hTZWFyY2hSZXN1bHQodGhpcy5kYXRhLmtleXdvcmRzLCB0aGlzLmRhdGEucGFnZSk7XG4gICAgICB0aGlzLnNldERhdGEoeyBsb2FkaW5nOiBmYWxzZSB9KTtcbiAgICB9KTtcbiAgfSxcblxuICBhc3luYyBmZXRjaFNlYXJjaFJlc3VsdChrZXl3b3Jkczogc3RyaW5nLCBwYWdlID0gMSkge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgcGFnZSxcbiAgICAgIGluaXQ6IGZhbHNlLFxuICAgICAgLi4uKHBhZ2UgPT09IDEgPyB7IHNlYXJjaFJlc3VsdDogW10gfSA6IG51bGwpXG4gICAgfSk7XG4gICAgY29uc3QgeyByZXN1bHQgfSA9IGF3YWl0IHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XG4gICAgICBuYW1lOiAnYm9vay1zZWFyY2gnLFxuICAgICAgZGF0YToge1xuICAgICAgICBrZXl3b3JkcyxcbiAgICAgICAgcGFnZUNvdW50OiBwYWdlLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBjb25zdCB7IGRhdGE6IHsgY29udGVudDogc2VhcmNoUmVzdWx0LCB0b3RhbCB9IH0gPSByZXN1bHQgYXMgc2VhcmNoRnVuY1Jlc3VsdE9iamVjdDtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICB0b3RhbCxcbiAgICAgIHNlYXJjaFJlc3VsdDogWy4uLnRoaXMuZGF0YS5zZWFyY2hSZXN1bHQsIC4uLnNlYXJjaFJlc3VsdF1cbiAgICB9KTtcbiAgICB0aGlzLmN1cnJlbnRLZXl3b3JkcyA9IGtleXdvcmRzO1xuICB9LFxufSk7XG4iXX0=