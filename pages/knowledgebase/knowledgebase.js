// pages/knowledgebase/knowledgebase.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    knowledgeList: [],
    hasMore: true,
    isLoading: false,
    pageIndex: 1,
    pageSize: 10
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.loadKnowledgeData();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    // 页面显示时刷新数据
    this.refreshDataIfNeeded();
  },

  /**
   * 加载知识数据
   */
  loadKnowledgeData() {
    // 防止重复加载
    if (this.data.isLoading) {
      return;
    }
    
    this.setData({
      isLoading: true
    });
    
    // 模拟数据加载
    const mockData = this.getMockKnowledgeData();
    
    // 模拟网络延迟
    setTimeout(() => {
      this.setData({
        knowledgeList: mockData,
        isLoading: false,
        hasMore: mockData.length >= this.data.pageSize
      });
      
      // 停止下拉刷新
      wx.stopPullDownRefresh();
    }, 500);
  },

  /**
   * 获取模拟知识数据
   */
  getMockKnowledgeData() {
    return [
      {
        id: 1,
        title: '春季穿搭指南',
        category: '季节穿搭',
        description: '春季气温多变，如何搭配衣物既保暖又时尚？了解春季穿搭的核心原则和实用技巧。',
        date: '2025-03-01',
        readTime: 5
      },
      {
        id: 2,
        title: '职场穿搭礼仪',
        category: '职场穿搭',
        description: '不同职业场合的着装规范，如何通过穿搭展现专业形象，提升职场竞争力。',
        date: '2025-02-28',
        readTime: 8
      },
      {
        id: 3,
        title: '色彩搭配原理',
        category: '色彩理论',
        description: '了解色彩搭配的基本原理，如何选择适合自己的颜色，打造和谐的整体造型。',
        date: '2025-02-25',
        readTime: 10
      },
      {
        id: 4,
        title: '面料选择与保养',
        category: '衣物护理',
        description: '不同面料的特性及保养方法，延长衣物使用寿命，保持衣物最佳状态。',
        date: '2025-02-20',
        readTime: 6
      },
      {
        id: 5,
        title: '旅行穿搭技巧',
        category: '旅行穿搭',
        description: '轻装上阵的旅行穿搭方案，既实用又时尚，适合各种旅行场景。',
        date: '2025-02-15',
        readTime: 7
      },
      {
        id: 6,
        title: '体型与穿搭',
        category: '体型分析',
        description: '根据不同的体型特点选择适合的服装款式，扬长避短，展现最佳身材比例。',
        date: '2025-02-10',
        readTime: 12
      }
    ];
  },

  /**
   * 跳转到详情页
   */
  navigateToDetail(e) {
    // 边界检查
    if (!e || !e.currentTarget || !e.currentTarget.dataset) {
      console.warn('跳转事件对象无效');
      return;
    }
    
    const id = e.currentTarget.dataset.id;
    if (!id) {
      console.warn('知识ID无效');
      return;
    }
    
    // 这里可以跳转到详情页
    // wx.navigateTo({
    //   url: '/pages/knowledgedetail/knowledgedetail?id=' + id
    // });
    
    // 暂时显示提示
    wx.showToast({
      title: '查看知识ID: ' + id,
      icon: 'none',
      duration: 1500
    });
  },

  /**
   * 刷新数据（如果需要）
   */
  refreshDataIfNeeded() {
    // 这里可以根据实际业务逻辑判断是否需要刷新数据
    // 例如：检查数据更新时间、用户操作等
    const needsRefresh = false;
    
    if (needsRefresh) {
      this.setData({
        pageIndex: 1
      });
      this.loadKnowledgeData();
    }
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    // 重置页码
    this.setData({
      pageIndex: 1
    });
    
    // 重新加载数据
    this.loadKnowledgeData();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    // 检查是否还有更多数据
    if (!this.data.hasMore || this.data.isLoading) {
      return;
    }
    
    // 加载更多数据
    this.loadMoreData();
  },

  /**
   * 加载更多数据
   */
  loadMoreData() {
    // 这里可以加载下一页数据
    // 由于是模拟数据，暂时不实现分页加载
    
    wx.showToast({
      title: '没有更多数据了',
      icon: 'none',
      duration: 1500
    });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
    return {
      title: '穿搭知识库',
      path: '/pages/knowledgebase/knowledgebase',
      imageUrl: '/image/背景-知识卡片.png'
    };
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    // 页面初次渲染完成
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    // 页面隐藏
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    // 页面卸载
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