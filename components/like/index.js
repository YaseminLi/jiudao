// components/like/index.js
Component({
  properties: {
    isLike: {
      type: Boolean,
    },
    likeCount: {
      type: Number,
    }
  },
  data: {
    yesSrc: 'images/like.png',
    noSrc: 'images/like@dis.png',
    countNum:""
  },
  methods: {
    onLike(event) {
      let count = this.properties.count;
      let isLike = this.properties.isLike;
      count = isLike ? count - 1 : count + 1;
      this.setData({
        count: count,
        isLike: !isLike
      });
      let behavior = this.properties.isLike?"like":"cancle";
      const myEventDetail = {behavior:behavior};
      const myEventOption = {}; // 触发事件的选项
      this.triggerEvent('like', myEventDetail, myEventOption);
    }
  }
})