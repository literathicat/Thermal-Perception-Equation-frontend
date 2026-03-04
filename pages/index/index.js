Page({
  data: {
    userInfo: {
      avatarUrl: 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0',
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
      image: '../../image/首页-背景.png',
      sign: '22℃微风→休闲牛仔风，幸运色：雾霾蓝',
      desc: '今日推荐: 轻薄外套搭配T恤，适合当前温度',
      share_url: '#'
    }
  },
  onLoad() {
            // 使用模拟数据替代API调用
        this.getMockData();
        },
        getMockData() {
            // 模拟用户数据
            const mockUser = {
              user_id: 1,
              nickname: '用户昵称',
              avatar: 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0',
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

            this.setData({
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
                image: '../../image/首页-背景.png',
                sign: mockOutfitSign.sign,
                desc: '今日推荐: 轻薄外套搭配T恤，适合当前温度',
                share_url: mockOutfitSign.share_url
              }
            });
  },

  navigateTo(e) {
    const url = e.currentTarget.dataset.url;
    if (url) {
      wx.navigateTo({ url });
    }
  },

  onChooseAvatar(e) {
    this.setData({
      'userInfo.avatarUrl': e.detail.avatarUrl
    });
  }
});