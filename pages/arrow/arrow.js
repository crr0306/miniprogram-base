// pages/arrow/arrow.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      recordList:[
        {
          id:0,
          title:"标题1",
          content:"展示内容",
          isOpen:false
        },
        {
          id:1,
          title:"标题2",
          content:"展示内容",
          isOpen:false
        }
      ],
      
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

  },
  clickQues(e){
    var that=this;
    var idx=e.currentTarget.dataset.id;
    var recordList=that.data.recordList;
    console.log("isOpen:",recordList[idx].isOpen);
    var isOpen=(recordList[idx].isOpen);
    
    that.setData({
      [ 'recordList['+idx+'].isOpen']:!isOpen
    })
    console.log("isOpen:", recordList[idx].isOpen);
    },
})