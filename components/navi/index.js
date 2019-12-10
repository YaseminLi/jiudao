// components/controlor/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: String,
    first: Boolean,
    latest: Boolean
  },
  data: {
    disLeftSrc: 'images/triangle.dis@left.png',
    leftSrc: 'images/triangle@left.png',
    disRightSrc: 'images/triangle.dis@right.png',
    rightSrc: 'images/triangle@right.png',
  },
  methods: {
    onLeft: function(event) {
      //if判断是来禁用最新/最后一期的切换功能
      if (!this.properties.latest) {
        this.triggerEvent('left', {}, {});
      }
    },
    onRight: function(event) {
      //if判断是来禁用最新/最后一期的切换功能
      if (!this.properties.first) {
        this.triggerEvent('right', {}, {});
      }
    }
  }

})