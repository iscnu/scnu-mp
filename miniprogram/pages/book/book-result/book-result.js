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
            var result, _a, searchResult, total, err_1;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.setData(__assign({ loading: true, page: page, init: false }, (page === 1 ? { searchResult: [] } : null)));
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4, wx.cloud.callFunction({
                                name: 'book-search',
                                data: {
                                    keywords: keywords,
                                    pageCount: page,
                                },
                            })];
                    case 2:
                        result = (_b.sent()).result;
                        _a = result.data, searchResult = _a.content, total = _a.total;
                        this.setData({
                            loading: false,
                            total: total,
                            searchResult: __spreadArrays(this.data.searchResult, searchResult)
                        });
                        this.currentKeywords = keywords;
                        return [3, 4];
                    case 3:
                        err_1 = _b.sent();
                        wx.showModal({
                            title: '出错了',
                            content: JSON.stringify(err_1),
                            showCancel: false,
                            complete: function () {
                                _this.setData({
                                    loading: false,
                                });
                            },
                        });
                        return [3, 4];
                    case 4: return [2];
                }
            });
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay1yZXN1bHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJib29rLXJlc3VsdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUEsSUFBTSxRQUFRLEdBQUcsQ0FBQyxDQUFDO0FBRW5CLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxJQUFJO1FBQ1YsT0FBTyxFQUFFLEtBQUs7UUFDZCxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksRUFBRSxDQUFDO1FBQ1AsT0FBTyxFQUFFLFFBQVE7UUFDakIsUUFBUSxFQUFFLEVBQUU7UUFDWixZQUFZLEVBQUUsRUFBb0I7S0FDbkM7SUFFRCxlQUFlLEVBQUUsRUFBRTtJQUVuQixNQUFNLFlBQUMsS0FBSztRQUNGLElBQUEseUJBQVEsQ0FBVztRQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsUUFBUSxVQUFBO1lBQ1IsSUFBSSxFQUFFLENBQUMsQ0FBQyxRQUFRO1lBQ2hCLFlBQVksRUFBRSxFQUFFO1NBQ2pCLENBQUMsQ0FBQztRQUNILFFBQVEsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUdELFdBQVcsRUFBRSxVQUFVLEVBQWE7UUFDMUIsSUFBQSx1QkFBSyxDQUFlO1FBQzVCLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxRQUFRLEVBQUUsS0FBSztTQUNoQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsWUFBWTtRQUNWLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7WUFBRSxPQUFPO1FBQ3JELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxhQUFhO1FBQWIsaUJBVUM7UUFUQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxRQUFRO1lBQUUsT0FBTztRQUNoSCxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLE9BQU8sRUFBRSxJQUFJO1lBQ2IsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUM7U0FDekIsRUFBRTs7OzRCQUNELFdBQU0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUE7O3dCQUFoRSxTQUFnRSxDQUFDO3dCQUNqRSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7Ozs7YUFDbEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVLLGlCQUFpQixFQUF2QixVQUF3QixRQUFnQixFQUFFLElBQVE7UUFBUixxQkFBQSxFQUFBLFFBQVE7Ozs7Ozs7d0JBQ2hELElBQUksQ0FBQyxPQUFPLFlBQ1YsT0FBTyxFQUFFLElBQUksRUFDYixJQUFJLE1BQUEsRUFDSixJQUFJLEVBQUUsS0FBSyxJQUNSLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUM3QyxDQUFDOzs7O3dCQUVrQixXQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO2dDQUM3QyxJQUFJLEVBQUUsYUFBYTtnQ0FDbkIsSUFBSSxFQUFFO29DQUNKLFFBQVEsVUFBQTtvQ0FDUixTQUFTLEVBQUUsSUFBSTtpQ0FDaEI7NkJBQ0YsQ0FBQyxFQUFBOzt3QkFOTSxNQUFNLEdBQUssQ0FBQSxTQU1qQixDQUFBLE9BTlk7d0JBT04sS0FBMkMsTUFBZ0MsS0FBckMsRUFBckIsWUFBWSxhQUFBLEVBQUUsS0FBSyxXQUFBLENBQXdDO3dCQUNwRixJQUFJLENBQUMsT0FBTyxDQUFDOzRCQUNYLE9BQU8sRUFBRSxLQUFLOzRCQUNkLEtBQUssT0FBQTs0QkFDTCxZQUFZLGlCQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFLLFlBQVksQ0FBQzt5QkFDM0QsQ0FBQyxDQUFDO3dCQUNILElBQUksQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDOzs7O3dCQUVoQyxFQUFFLENBQUMsU0FBUyxDQUFDOzRCQUNYLEtBQUssRUFBRSxLQUFLOzRCQUNaLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUcsQ0FBQzs0QkFDNUIsVUFBVSxFQUFFLEtBQUs7NEJBQ2pCLFFBQVEsRUFBRTtnQ0FDUixLQUFJLENBQUMsT0FBTyxDQUFDO29DQUNYLE9BQU8sRUFBRSxLQUFLO2lDQUNmLENBQUMsQ0FBQzs0QkFDTCxDQUFDO3lCQUNGLENBQUMsQ0FBQzs7Ozs7O0tBRU47Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIOWbvuS5puaQnOe0oue7k+aenOWIl+ihqFxuICovXG5cbmNvbnN0IE1BWF9QQUdFID0gNTsgLy8g5pyA5aSa57+75LqU6aG15Yiw5bqVXG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgaW5pdDogdHJ1ZSxcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICB0b3RhbDogMCxcbiAgICBwYWdlOiAxLFxuICAgIG1heFBhZ2U6IE1BWF9QQUdFLFxuICAgIGtleXdvcmRzOiAnJyxcbiAgICBzZWFyY2hSZXN1bHQ6IFtdIGFzIGJvb2tJdGVtRGF0YVtdLFxuICB9LFxuXG4gIGN1cnJlbnRLZXl3b3JkczogJycsXG5cbiAgb25Mb2FkKHF1ZXJ5KSB7XG4gICAgY29uc3QgeyBrZXl3b3JkcyB9ID0gcXVlcnk7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGtleXdvcmRzLFxuICAgICAgaW5pdDogISFrZXl3b3JkcyxcbiAgICAgIHNlYXJjaFJlc3VsdDogW10sXG4gICAgfSk7XG4gICAga2V5d29yZHMgJiYgdGhpcy5mZXRjaFNlYXJjaFJlc3VsdChrZXl3b3JkcywgdGhpcy5kYXRhLnBhZ2UpO1xuICB9LFxuXG4gIC8vIGlucHV0IFVJXG4gIGlucHV0VXBkYXRlOiBmdW5jdGlvbiAoZXY6IEFueU9iamVjdCkge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IGV2LmRldGFpbDtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAga2V5d29yZHM6IHZhbHVlLFxuICAgIH0pO1xuICB9LFxuXG4gIGlucHV0Q29uZmlybSgpIHtcbiAgICBpZiAodGhpcy5kYXRhLmxvYWRpbmcgfHwgIXRoaXMuZGF0YS5rZXl3b3JkcykgcmV0dXJuO1xuICAgIHRoaXMuZmV0Y2hTZWFyY2hSZXN1bHQodGhpcy5kYXRhLmtleXdvcmRzKTtcbiAgfSxcblxuICBvblJlYWNoQm90dG9tKCkge1xuICAgIGlmICh0aGlzLmRhdGEubG9hZGluZyB8fCB0aGlzLmRhdGEuc2VhcmNoUmVzdWx0Lmxlbmd0aCA+PSB0aGlzLmRhdGEudG90YWwgfHwgdGhpcy5kYXRhLnBhZ2UgPj0gTUFYX1BBR0UpIHJldHVybjtcbiAgICBjb25zb2xlLmxvZygnLS0gcmVhY2ggYm90dG9tJyk7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICBwYWdlOiB0aGlzLmRhdGEucGFnZSArIDEsXG4gICAgfSwgYXN5bmMgKCkgPT4ge1xuICAgICAgYXdhaXQgdGhpcy5mZXRjaFNlYXJjaFJlc3VsdCh0aGlzLmRhdGEua2V5d29yZHMsIHRoaXMuZGF0YS5wYWdlKTtcbiAgICAgIHRoaXMuc2V0RGF0YSh7IGxvYWRpbmc6IGZhbHNlIH0pO1xuICAgIH0pO1xuICB9LFxuXG4gIGFzeW5jIGZldGNoU2VhcmNoUmVzdWx0KGtleXdvcmRzOiBzdHJpbmcsIHBhZ2UgPSAxKSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICBwYWdlLFxuICAgICAgaW5pdDogZmFsc2UsXG4gICAgICAuLi4ocGFnZSA9PT0gMSA/IHsgc2VhcmNoUmVzdWx0OiBbXSB9IDogbnVsbClcbiAgICB9KTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyByZXN1bHQgfSA9IGF3YWl0IHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XG4gICAgICAgIG5hbWU6ICdib29rLXNlYXJjaCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBrZXl3b3JkcyxcbiAgICAgICAgICBwYWdlQ291bnQ6IHBhZ2UsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHsgZGF0YTogeyBjb250ZW50OiBzZWFyY2hSZXN1bHQsIHRvdGFsIH0gfSA9IHJlc3VsdCBhcyBzZWFyY2hGdW5jUmVzdWx0T2JqZWN0O1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgIHRvdGFsLFxuICAgICAgICBzZWFyY2hSZXN1bHQ6IFsuLi50aGlzLmRhdGEuc2VhcmNoUmVzdWx0LCAuLi5zZWFyY2hSZXN1bHRdXG4gICAgICB9KTtcbiAgICAgIHRoaXMuY3VycmVudEtleXdvcmRzID0ga2V5d29yZHM7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB3eC5zaG93TW9kYWwoe1xuICAgICAgICB0aXRsZTogJ+WHuumUmeS6hicsXG4gICAgICAgIGNvbnRlbnQ6IEpTT04uc3RyaW5naWZ5KGVyciksXG4gICAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxuICAgICAgICBjb21wbGV0ZTogKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbn0pO1xuIl19