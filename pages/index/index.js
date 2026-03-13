Page({
  data: {
    userInfo: {
      avatarUrl: '/image/保存.png',
      nickName: '用户昵称'
    },
    weatherData: {
      location: '北京市',
      temp: '25',
      pm25: '45',
      uv: '中等',
      condition: '晴',
      feels_like: '23',
      humidity: '65',
      wind_speed: '3'
    },
    iconsTop: [
      { name: ' ', icon: '/image/首页-我的衣柜按钮.png', url: '../myclothes/myclothes' },
      { name: ' ', icon: '/image/首页-生成穿搭按钮.png', url: '../generateoutfits/generateoutfits' },
      { name: ' ', icon: '/image/首页-知识库按钮.png', url: '../knowledgebase/knowledgebase' },
      {
        name: ' ',
        icon: '/image/首页-搜索按钮.png',
        url: '../search/search'
      }
    ],
    outfitRecommend: {
      image: '/image/首页-背景.png',
      sign: '22℃微风→休闲牛仔风，幸运色：雾霾蓝',
      desc: '今日推荐: 轻薄外套搭配T恤，适合当前温度',
      share_url: '#'
    }
  },
  onLoad() {
    // 性能优化：检查数据是否需要更新
    // 由于初始数据已经设置，这里可以添加异步数据获取逻辑
    // 当前使用模拟数据，避免不必要的重渲染
    this.loadMockDataAsync();
  },
  
  loadMockDataAsync() {
    // 模拟异步数据加载，避免阻塞页面渲染
    setTimeout(() => {
      // 只有需要更新时才调用setData
      // 这里可以根据实际业务逻辑判断是否需要更新数据
      const needsUpdate = false;
      
      if (needsUpdate) {
        this.getMockData();
      }
    }, 100);
  },
  
  getMockData() {
    // 模拟用户数据
    const mockUser = {
      user_id: 1,
      nickname: '用户昵称',
      avatar: '/image/保存.png',
      gender: 'male',
      height: 175,
      weight: 65
    };

    // 模拟天气数据
    const mockWeather = {
      city: '北京市',
      temperature: 25,
      feels_like: 23,
      humidity: 65,
      wind_speed: 3,
      condition: '晴',
      pm25: 45,
      uv: '中等'
    };

    // 模拟今日穿搭签数据
    const mockOutfitSign = {
      sign: '22℃微风→休闲牛仔风，幸运色：雾霾蓝',
      share_url: '#'
    };

    // 性能优化：批量更新数据，减少setData调用次数
    const updateData = {
      'userInfo.avatarUrl': mockUser.avatar,
      'userInfo.nickName': mockUser.nickname,
      weatherData: {
        location: mockWeather.city,
        temp: mockWeather.temperature,
        pm25: mockWeather.pm25,
        uv: mockWeather.uv,
        condition: mockWeather.condition,
        feels_like: mockWeather.feels_like,
        humidity: mockWeather.humidity,
        wind_speed: mockWeather.wind_speed
      },
      outfitRecommend: {
        image: '/image/首页-背景.png',
        sign: mockOutfitSign.sign,
        desc: '今日推荐: 轻薄外套搭配T恤，适合当前温度',
        share_url: mockOutfitSign.share_url
      }
    };
    
    this.setData(updateData);
  },

  navigateTo(e) {
    try {
      // 边界检查：确保事件对象和目标存在
      if (!e || !e.currentTarget || !e.currentTarget.dataset) {
        console.warn('导航事件对象无效');
        return;
      }
      
      const url = e.currentTarget.dataset.url;
      
      // 边界检查：确保URL有效且非空
      if (!url || typeof url !== 'string' || url.trim() === '') {
        console.warn('导航URL无效:', url);
        return;
      }
      
      // 边界检查：确保URL格式正确（相对路径）
      if (!url.startsWith('../') && !url.startsWith('/')) {
        console.warn('导航URL格式不正确:', url);
        return;
      }
      
      wx.navigateTo({ 
        url,
        fail: (err) => {
          console.error('页面跳转失败:', err);
          wx.showToast({
            title: '页面跳转失败',
            icon: 'none',
            duration: 2000
          });
        }
      });
    } catch (error) {
      console.error('导航函数执行出错:', error);
    }
  },

  onChooseAvatar(e) {
    this.setData({
      'userInfo.avatarUrl': e.detail.avatarUrl
    });
  },

  goToMyFavorite() {
    console.log('goToMyFavorite clicked');
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
});