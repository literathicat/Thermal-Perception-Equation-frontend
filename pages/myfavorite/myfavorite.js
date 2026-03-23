// pages/myfavorite/myfavorite.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  goToMyFavorite() {
    // 如果已经在myfavorite页面，可以不做跳转，或者跳转到自身（可选）
    // wx.navigateTo({
    //   url: '../myfavorite/myfavorite',
    // });
    // 这里我们选择不做任何操作，或者可以给个提示
    wx.showToast({
      title: '已经在我的收藏',
      icon: 'none',
      duration: 1000
    });
  }
})