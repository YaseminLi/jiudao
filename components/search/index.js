import {
  SearchModel
} from '../../api/search.js';
const searchModel = new SearchModel();
Component({
  data: {
    hotKeyword: '',
    historySearch: '',
    inputValue: '',
    searchResult: '',
    isSearching: false,
    haveResult:false
  },
  observers:{
    //触底加载更多
    'more':function(more){
      console.log('加载更多')
    }
  },
  attached: function() {
    searchModel.getHotKeyword(data => {
      this.setData({
        hotKeyword: data
      });
      const historySearch = searchModel.getHistorySearch();
    this.setData({
      historySearch
    });
    });
  },
  methods: {
    onCancelSearch: function(event) {
      this.triggerEvent('cancelSearch', {}, {});
    },
    onClearInput: function(event) {
      console.log('clear')
      this.setData({
        isSearching: false,
        inputValue: '',
        historySearch: searchModel.getHistorySearch()
      })
    },
    onSearch: function(event) {
      this.setData({
        isSearching: true
      });
      const q = event.detail.value || event.detail.comment;
        searchModel.getSearch(q,data => {
          this.setData({
            searchResult: data,
            inputValue: q
          })
          if(typeof data!=='string'){
            this.setData({
              haveResult:true
            });
          }
        })
    },
    onBookDetail: function (event) {
    let id=event.currentTarget.dataset.id
      this.triggerEvent('bookDetail', {id:id}, {});
    },
  }
})