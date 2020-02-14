/**
 * 图书搜索结果列表
 */

const MAX_PAGE = 5; // 最多翻五页到底

Page({
  data: {
    init: true,
    loading: false,
    total: 0,
    page: 1,
    maxPage: MAX_PAGE,
    keywords: '',
    searchResult: [] as bookItemData[],
  },

  currentKeywords: '',

  onLoad(query) {
    const { keywords } = query;
    this.setData({
      keywords,
      init: !!keywords,
      searchResult: [],
    });
    keywords && this.fetchSearchResult(keywords, this.data.page);
  },

  // input UI
  inputUpdate: function (ev: AnyObject) {
    const { value } = ev.detail;
    this.setData({
      keywords: value,
    });
  },

  inputConfirm() {
    if (this.data.loading || !this.data.keywords) return;
    this.fetchSearchResult(this.data.keywords);
  },

  onReachBottom() {
    if (this.data.loading || this.data.searchResult.length >= this.data.total || this.data.page >= MAX_PAGE) return;
    console.log('-- reach bottom');
    this.setData({
      loading: true,
      page: this.data.page + 1,
    }, async () => {
      await this.fetchSearchResult(this.data.keywords, this.data.page);
      this.setData({ loading: false });
    });
  },

  async fetchSearchResult(keywords: string, page = 1) {
    this.setData({
      loading: true,
      page,
      init: false,
      ...(page === 1 ? { searchResult: [] } : null)
    });
    try {
      const { result } = await wx.cloud.callFunction({
        name: 'book-search',
        data: {
          keywords,
          pageCount: page,
        },
      });
      const { data: { content: searchResult, total } } = result as searchFuncResultObject;
      this.setData({
        loading: false,
        total,
        searchResult: [...this.data.searchResult, ...searchResult]
      });
      this.currentKeywords = keywords;
    } catch (err) {
      wx.showModal({
        title: '出错了',
        content: JSON.stringify(err),
        showCancel: false,
        complete: () => {
          this.setData({
            loading: false,
          });
        },
      });
    }
  },
});
