// components/preview/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
favor:Object
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onImageLoad:function(){
      this.triggerEvent('imageLoad', {}, {});
    }
  }
})
