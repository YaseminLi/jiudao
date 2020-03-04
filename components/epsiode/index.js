// components/data/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index: String,
    pubdate: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    year: "",
    months: ["0", "一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    month: ""
  },
  observers:{
    'pubdate':function(pubdate){
      let year = pubdate.substring(0, 4);
      let month = Number(pubdate.substring(5, 7));
      this.setData({
        year: year,
        month: this.data.months[month]
      });
    }
  }
})