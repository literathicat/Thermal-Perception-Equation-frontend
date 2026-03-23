// pages/editclothes/editclothes.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 控制标签面板显示
    showTagPanel: false,
    // 标签图片位置和尺寸数据
    tag1: {
      left: 50,
      top: 50,
      width: 160,
      height: 160
    },
    tag2: {
      left: 230,
      top: -10,
      width: 280,
      height: 280
    },
    tag4: {
      left: 50,
      top: 100,
      width: 220,
      height: 220
    },
    tag5: {
      left: 50,
      top: 200,
      width: 180,
      height: 180
    },
    // 添加按钮位置和尺寸数据（右下角）
    addTag: {
      left: 500,
      top: 450,
      width: 80,
      height: 80
    },
    // 标签面板背景尺寸
    tagPanelBgWidth: 600,
    tagPanelBgHeight: 600
  },

  /**
   * 切换标签面板显示/隐藏
   */
  toggleTagPanel() {
    this.setData({
      showTagPanel: !this.data.showTagPanel
    });
  },

  /**
   * 阻止事件冒泡（空函数）
   */
  stopPropagation() {
    // 空函数，仅用于阻止事件冒泡
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