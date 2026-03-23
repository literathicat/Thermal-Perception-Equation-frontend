// pages/upload/upload.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 跳转到编辑衣物页面
   */
  navigateToEditClothes() {
    wx.navigateTo({
      url: '../editclothes/editclothes'
    });
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
    wx.navigateTo({
      url: '../myfavorite/myfavorite',
      fail: (err) => {
        console.error('跳转到我的收藏失败:', err);
        wx.showToast({
          title: '跳转失败',
          icon: 'none',
          duration: 2000
        });
      }
    });
  }
})