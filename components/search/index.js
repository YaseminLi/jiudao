import {
  KeywordModel
} from '../../models/keyword.js';
const keywordModel = new KeywordModel();
Component({
  properties:{
    more:Boolean,
  },
  data: {
    hotKeyword: '',
    historySearch: '',
    inputValue: '',
    searchResult: '',
    isSearching: false
  },
  observers:{
    //触底加载更多
    'more':function(more){
      console.log('加载更多')
    }
  },
  attached: function() {
    keywordModel.getHotKeyword().then(data => {
      this.setData({
        hotKeyword: data
      });
    });
    const historySearch = keywordModel.getHistorySearch();
    this.setData({
      historySearch
    });
  },
  methods: {
    onCancelSearch: function(event) {
      this.triggerEvent('cancelSearch', {}, {});
    },
    onClearInput: function(event) {
      this.setData({
        isSearching: false,
        inputValue: '',
        historySearch: keywordModel.getHistorySearch()
      })
    },
    onSearch: function(event) {
      this.setData({
        isSearching: true
      });
      const q = event.detail.value || event.detail.comment;
      const searchResult = wx.getStorageSync('bookSearch-' + q);
      if (searchResult) {
        this.setData({
          searchResult
        })
      } else {
        keywordModel.getSearch().then(data => {
          this.setData({
            searchResult: data,
            inputValue:q
          });
          wx.setStorageSync('bookSearch-' + q, data)
          keywordModel.addInputToHistory(q);
        })
      };

    },
    onBookDetail: function (event) {
      wx.navigateTo({
        url: '/pages/book-detail/book-detail?id=' + event.currentTarget.dataset.id,
      })
    },
  }
})