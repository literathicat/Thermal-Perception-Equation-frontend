// pages/myclothes/myclothes.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showCategoryOptions: false,
    categoryOptions: [
      { id: 1, name: 'T恤' },
      { id: 2, name: '针织衫' },
      { id: 3, name: '衬衫' },
      { id: 4, name: '卫衣' },
      { id: 5, name: '外套' },
      { id: 6, name: '裤子' },
      { id: 7, name: '裙子' },
      { id: 8, name: '连衣裙' },
      { id: 9, name: '牛仔裤' },
      { id: 10, name: '短裤' }
    ],
    selectedCategory: ''
  },

  /**
   * 切换品类选项显示
   */
  toggleCategoryOptions() {
    this.setData({
      showCategoryOptions: !this.data.showCategoryOptions
    });
  },

  /**
   * 选择品类
   */
  selectCategory(e) {
    const index = e.currentTarget.dataset.index;
    const category = this.data.categoryOptions[index];
    this.setData({
      selectedCategory: category.name,
      showCategoryOptions: false
    });
    wx.showToast({
      title: `已选择：${category.name}`,
      icon: 'success',
      duration: 1500
    });
    // 这里可以触发实际的筛选逻辑
    // this.filterByCategory(category.id);
  },

  /**
   * 关闭品类选项
   */
  closeCategoryOptions() {
    this.setData({
      showCategoryOptions: false
    });
  },

  /**
   * 跳转到上传页面
   */
  navigateToUpload() {
    wx.navigateTo({
      url: '../upload/upload'
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