// pages/mine/mine.js
//https://blog.csdn.net/saucxs/article/details/92979252
//https://blog.csdn.net/u012054869/article/details/88018966
Page({

  /**
   * 页面的初始数据
   */
  data: {
    clientHeight: 0,
    currentIndex: 0,
    "firstList": [{ name: 'w券1', money: '5.00' }, { name: 'w券2', money: '50.00' }, { name: 'w券3', money: '50.00' }, { name: 'w券2', money: '50.00' }, { name: 'w券2', money: '50.00' }, { name: 'w券2', money: '50.00' }, { name: 'w券2', money: '50.00' }, { name: 'w券2', money: '50.00' }, { name: 'w券10', money: '50.00' }, { name: 'w券3', money: '50.00' }, { name: 'w券2', money: '50.00' }, { name: 'w券2', money: '50.00' }, { name: 'w券2', money: '50.00' }, { name: 'w券2', money: '50.00' }, { name: 'w券2', money: '50.00' }, { name: 'w券11', money: '50.00' }],
    "secondList": [{ name: 'y券1', money: '10.00' }, { name: 'y券2', money: '20.00' }],
    "thirdList": [{ name: 'g券1', money: '30.00' }, { name: 'g券2', money: '40.00' }],

  },
  onLoad: function (options) {
    var that = this
    wx.getSystemInfo({
      success: function (res) {
        console.log(res)
        that.setData({
          clientHeight: res.windowHeight
        });
      }
    })

  },
  //点击tabbar标题
  titleClick: function (e) {
    var idx = e.currentTarget.dataset.idx;
    this.setData({
      currentIndex: idx
    })
  },
  //
  //swiper切换时会调用
  //触发条件：current改变
  pagechange: function (e) {
    console.log(e);
    if ("touch" === e.detail.source) {
      let currentPageIndex = this.data.currentIndex
      currentPageIndex = (currentPageIndex + 1) % 3
      this.setData({
        currentIndex: currentPageIndex
      })
    }
  },
})