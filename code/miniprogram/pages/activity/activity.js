// miniprogram/pages/activity/activity.js
var postData = require('../../utils/testdata.js'); 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    courseList: 4,
    list: ["cloud://web-cesm9.7765-web-cesm9-1301211111/first.jpg", "cloud://web-cesm9.7765-web-cesm9-1301211111/second.jpg", "cloud://web-cesm9.7765-web-cesm9-1301211111/third.jpg", "cloud://web-cesm9.7765-web-cesm9-1301211111/fourth.jpg"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("---->" + postData);
    //遍历
    var length = postData["dataList"].length;
    console.log("migai-->" + length)
    for (let i = 0; i < length; i++) {
      console.log("hello-->" + postData["dataList"][i]["title"]);
    }
    var list = this.data.list
    this.setData({
      list: postData
    })
    console.log("mylist-->" + this.data.list)
    for (let i = 0; i < length; i++) {
      console.log("hello-->" + this.data.list["dataList"]);
    }
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

  /**跳转详情页 */
  // onTapdetail: function (event) {
  //   //var postad = event.currentTarget.dataset.postad   //获取传递的值
  //  // console.log(postad);
  //   wx.navigateTo({
  //     //url: 'post-detail/post-detail'  //跳转详情页  切记配置app.json文件 
  //     //url: 'post-detail/post-detail?id=' + postad    //传递参数
  //     url: '../discover/adc/adc'
  //     //?id=' + postad
  //   })
  // },
  onTapdetail: function (event) {
    var postad = event.currentTarget.dataset.postad   //获取传递的值
    console.log(postad);
    wx.navigateTo({
      url: '../discover/adc/adc?id='+postad
    })
  }
})