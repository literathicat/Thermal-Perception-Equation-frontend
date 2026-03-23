Page({
  data: {
    pages: ['/1.png', '/2.png', '/3.png', '/4.png', '/5.png', '/6.png', '/7.png'],
    currentPage: 1,
    currentImage: '/1.png',
    hotspots: []
  },

  links: {
    1: [
      { to: 2, left: 77, top: 21.2, width: 12.8, height: 5.0 },
      { to: 3, left: 77, top: 36.0, width: 12.8, height: 5.0 },
      { to: 4, left: 77, top: 50.8, width: 12.8, height: 5.0 },
      { to: 5, left: 31, top: 79.5, width: 38.0, height: 6.8 }
    ],
    2: [{ to: 1, left: 5.8, top: 9.0, width: 8.8, height: 5.6 }],
    3: [{ to: 1, left: 5.8, top: 9.0, width: 8.8, height: 5.6 }],
    4: [{ to: 1, left: 5.8, top: 9.0, width: 8.8, height: 5.6 }],
    5: [
      { to: 1, left: 5.8, top: 9.0, width: 8.8, height: 5.6 },
      { to: 6, left: 66.3, top: 79.0, width: 26.8, height: 5.2 }
    ],
    6: [
      { to: 5, left: 5.8, top: 9.0, width: 8.8, height: 5.6 },
      { to: 7, left: 65, top: 48, width: 25, height: 6 }
    ],
    7: [{ to: 6, left: 5.8, top: 9.0, width: 8.8, height: 5.6 }]
  },

  onLoad() {
    this.renderPage(1);
  },

  renderPage(pageNo) {
    const currentImage = this.data.pages[pageNo - 1];
    const hotspots = this.links[pageNo] || [];

    this.setData({
      currentPage: pageNo,
      currentImage,
      hotspots
    });
  },

  goToPage(e) {
    const to = Number(e.currentTarget.dataset.to || 1);
    this.renderPage(to);
  },

  goHome() {
    this.renderPage(1);
  }
});
