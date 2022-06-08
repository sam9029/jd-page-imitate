// swiper 实例
// big---------------------
var bigSwiper = new Swiper ('.swiperBig', {
    direction: 'horizontal', // 横向切换选项
    loop: true, // 循环模式选项
    autoplay: true,//可选选项，自动滑动
    
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        clickable :true,//点击分页器的指示点分页器会控制Swiper切换
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  // small---------------------
  var smallSwiper = new Swiper ('.swiperSmall', {
    direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay: true,//可选选项，自动滑动
    
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        clickable :true,//点击分页器的指示点分页器会控制Swiper切换
    }
  })  