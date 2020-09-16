// pages/switch/switch.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectOpen:["展开","收起"],
    isOpen:false,//默认关闭
      switchConf: {
        width: 150,
        height: 80,
        color: '#f90',
        checked: true,
        disabled: false,
        noRadius: false,
        radiuSize:'60',
        checkedText:"开",
        uncheckedText:'关'
      },
    
  },
  selSwitch:function(){
		this.data.isOpen=!this.data.isOpen;
		this.setData({
			isOpen:this.data.isOpen
		})
  },
  _doSwitch1: function(e) {
    console.log(e.detail)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})