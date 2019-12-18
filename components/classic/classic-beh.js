module.exports = Behavior({
  behaviors: [],
  properties: {
    content: {
      type: String
    },
    image: {
      type: String
    },
    hidden: {
      type: Boolean
    }
  },
  methods:{
    onImageLoad() {
      this.triggerEvent('imageLoad', {}, {})
    }
  }
})