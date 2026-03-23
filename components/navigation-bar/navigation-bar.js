// components/navigation-bar/navigation-bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    currentPage: {
      type: String,
      value: 'index'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // 页面映射关系
    pageMap: {
      'index': '/pages/index/index',
      'myclothes': '/pages/myclothes/myclothes',
      'generateoutfits': '/pages/generateoutfits/generateoutfits',
      'knowledgebase': '/pages/knowledgebase/knowledgebase',
      'search': '/pages/search/search',
      'upload': '/pages/upload/upload',
      'editclothes': '/pages/editclothes/editclothes'
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    navigateToPage(e) {
      const page = e.currentTarget.dataset.page;
      const currentPage = this.properties.currentPage;
      
      // 如果当前已经在目标页面，则不跳转
      if (page === currentPage) {
        return;
      }
      
      const url = this.data.pageMap[page];
      if (url) {
        wx.switchTab({
          url: url,
          fail: (err) => {
            console.error('跳转失败:', err);
            wx.navigateTo({
              url: url
            });
          }
        });
      }
    }
  }
})