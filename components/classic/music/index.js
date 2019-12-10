const myBehavior = require("../classic-beh.js");
const backgroundAudioManager = wx.getBackgroundAudioManager();
Component({
  behaviors: [myBehavior],
  properties: {
    image: String,
    imageUrl: String,
    src: String,
    title: String,
    index: String,
  },
  data: {
    isPlaying: false,
    playSrc: "images/player@play.png",
    pauseSrc: "images/player@pause.png"
  },

  lifetimes: {
    attached: function(event) {
      this._recoverPlaying();
      this._monitorSwitch();
    },
  },
  methods: {
    onPlay() {
      let isPlaying = !this.data.isPlaying;
      this.setData({
        isPlaying: isPlaying
      });
      backgroundAudioManager.title = this.properties.title;
      backgroundAudioManager.coverImgUrl = this.properties.src;
      if (isPlaying) {
        backgroundAudioManager.src = this.properties.src;
      } else {
        backgroundAudioManager.pause();
      };
    },
    _recoverPlaying() {
      if (backgroundAudioManager.paused) {
        this.setData({
          isPlaying: false
        });
        return
      };
      if (backgroundAudioManager.src == this.properties.src) {
        this.setData({
          isPlaying: true,
        });
        return
      }
    },
    _monitorSwitch() {
      backgroundAudioManager.onPlay(
        () => {
          this._recoverPlaying()
        });
      backgroundAudioManager.onPause(
        () => {
          this._recoverPlaying()
        });
      backgroundAudioManager.onStop(
        () => {
          this._recoverPlaying()
        });
      backgroundAudioManager.onEnded(
        () => {
          this._recoverPlaying()
        });
    }
  }

})