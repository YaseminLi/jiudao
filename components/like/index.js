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
      let behavior = this.properties.isLike?"like":"cancle";
      const myEventDetail = {behavior:behavior};
      const myEventOption = {}; // 触发事件的选项
      this.triggerEvent('like', myEventDetail, myEventOption);
      this.triggerEvent('bookLike', myEventDetail, myEventOption);
    }
  }
})