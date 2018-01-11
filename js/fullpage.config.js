
function inInformation() {
  $('.information .text .right .p1').hide().removeClass('fadeOutDown')
  $('.information .text .right .p2').hide().removeClass('fadeOutDown')
  $('.information .text .right .p3').hide().removeClass('fadeOutDown')
  $('.information .text .right .p4').hide().removeClass('fadeOutDown')
  $('.information .text .right .p5').hide().removeClass('fadeOutDown')
  $('.information .text .right .p6').hide().removeClass('fadeOutDown')
  $('.information .text .right .p7').hide().removeClass('fadeOutDown')
  $('.information .text .right .p8').hide().removeClass('fadeOutDown')
  setTimeout(function () {
    $('.information .text .right .p1').show().addClass('fadeInUp')
  }, 400);
  setTimeout(function () {
    $('.information .text .right .p2').show().addClass('fadeInUp')
  }, 600);
  setTimeout(function () {
    $('.information .text .right .p3').show().addClass('fadeInUp')
  }, 800);
  setTimeout(function () {
    $('.information .text .right .p4').show().addClass('fadeInUp')
  }, 1000);
  setTimeout(function () {
    $('.information .text .right .p5').show().addClass('fadeInUp')
  }, 1100);
  setTimeout(function () {
    $('.information .text .right .p6').show().addClass('fadeInUp')
  }, 1200);
  setTimeout(function () {
    $('.information .text .right .p7').show().addClass('fadeInUp')
  }, 1300);
  setTimeout(function () {
    $('.information .text .right .p8').show().addClass('fadeInUp')
  }, 1400);
}

function inHome() {

  // 删除旧样式
  $('.home .user .left').removeClass('slideOutLeft').hide()
  $('.home .user .right').removeClass('slideOutRight').hide()
  $('.home .text .text1').removeClass('fadeOutDown').hide()
  $('.home .text .text1').removeClass('fadeOutDown').hide()
  $('.home .text .text1').removeClass('fadeOutDown').hide()
  $('.home .text .text2').removeClass('fadeOutDown').hide()
  $('.home .text .text3').removeClass('fadeOutDown').hide()
  $('.home .text .text4').removeClass('fadeOutDown').hide()
  $('.home .text .bottom').removeClass('fadeOutDown').hide()

  $('.home .user .left').show().addClass('slideInLeft')
  $('.home .user .right').show().addClass('slideInRight')
  setTimeout(function () {
    $('.home .text .text1').show().addClass('bounceInUp')
  }, 300);
  setTimeout(function () {
    $('.home .text .text1').show().addClass('fadeInUp  ')
  }, 300);
  setTimeout(function () {
    $('.home .text .text1').show().addClass('fadeInUp')
    setTimeout(function () {
      $('.home .text .text2').show().addClass('fadeInUp')
      setTimeout(function () {
        $('.home .text .text3').show().addClass('fadeInUp')
        setTimeout(function () {
          $('.home .text .text4').show().addClass('fadeInUp')
          $('.home .text .bottom').show().addClass('fadeInUpBig')
        }, 300);
      }, 300);
    }, 300);
  }, 200);
}

function inVisitguide(){
  $('.visitguide .text .p1').hide().removeClass('fadeOutDown')
  $('.visitguide .text .p2').hide().removeClass('fadeOutDown')
  $('.visitguide .text .p3').hide().removeClass('fadeOutDown')
  $('.visitguide .text .p4').hide().removeClass('fadeOutDown')
  $('.visitguide .text .p5').hide().removeClass('fadeOutDown')
  $('.visitguide .text .p6').hide().removeClass('fadeOutDown')
  $('.visitguide .text .p7').hide().removeClass('fadeOutDown')
  $('.visitguide .text .p8').hide().removeClass('fadeOutDown')
  $('.visitguide .text .p9').hide().removeClass('fadeOutDown')
  $('.visitguide .text .p10').hide().removeClass('fadeOutDown')

  setTimeout(function () {
    $('.visitguide .text .p1').show().addClass('animated fadeInUp')
  }, 300);
  setTimeout(function () {
    $('.visitguide .text .p2').show().addClass('animated fadeInUp')
  }, 400);
  setTimeout(function () {
    $('.visitguide .text .p3').show().addClass('animated fadeInUp')
  }, 500);
  setTimeout(function () {
    $('.visitguide .text .p4').show().addClass('animated fadeInUp')
  }, 600);
  setTimeout(function () {
    $('.visitguide .text .p5').show().addClass('animated fadeInUp')
  }, 700);
  setTimeout(function () {
    $('.visitguide .text .p6').show().addClass('animated fadeInUp')
  }, 800);
  setTimeout(function () {
    $('.visitguide .text .p7').show().addClass('animated fadeInUp')
  }, 900);
  setTimeout(function () {
    $('.visitguide .text .p8').show().addClass('animated fadeInUp')
  }, 1000);
  setTimeout(function () {
    $('.visitguide .text .p9').show().addClass('animated fadeInUp')
  }, 1100);
  setTimeout(function () {
    $('.visitguide .text .p10').show().addClass('animated fadeInUp')
  }, 1200);
}
function ineducation(){
  $('.education .text .p1').hide().removeClass('fadeOutDown')
  $('.education .text .p2').hide().removeClass('fadeOutDown')
  $('.education .text .p3').hide().removeClass('fadeOutDown')
  $('.education .text .p4').hide().removeClass('fadeOutDown')
  $('.education .text .p5').hide().removeClass('fadeOutDown')
  $('.education .text .p6').hide().removeClass('fadeOutDown')
  $('.education .text .p7').hide().removeClass('fadeOutDown')
  $('.education .text .p8').hide().removeClass('fadeOutDown')
  $('.education .text .p9').hide().removeClass('fadeOutDown')
  $('.education .text .p10').hide().removeClass('fadeOutDown')

  setTimeout(function () {
    $('.education .text .p1').show().addClass('animated fadeInUp')
  }, 300);
  setTimeout(function () {
    $('.education .text .p2').show().addClass('animated fadeInUp')
  }, 400);
  setTimeout(function () {
    $('.education .text .p3').show().addClass('animated fadeInUp')
  }, 500);
  setTimeout(function () {
    $('.education .text .p4').show().addClass('animated fadeInUp')
  }, 600);
  setTimeout(function () {
    $('.education .text .p5').show().addClass('animated fadeInUp')
  }, 700);
  setTimeout(function () {
    $('.education .text .p6').show().addClass('animated fadeInUp')
  }, 800);
  setTimeout(function () {
    $('.education .text .p7').show().addClass('animated fadeInUp')
  }, 900);
  setTimeout(function () {
    $('.education .text .p8').show().addClass('animated fadeInUp')
  }, 1000);
  setTimeout(function () {
    $('.education .text .p9').show().addClass('animated fadeInUp')
  }, 1100);
  setTimeout(function () {
    $('.education .text .p10').show().addClass('animated fadeInUp')
  }, 1200);
}
$(function () {
  $('#museum').fullpage({
    sectionsColor: ['#000', '#000', '#000', '#000', '#000', '#000'],
    anchors: ['home', 'information', 'highlights', 'galleryview', 'education', 'visitguide'],
    'navigation': true,
    menu: '#menu',
    scrollingSpeed: 1000,
    afterRender: function () {
      inInformation()
      inHome()
      inVisitguide()
      ineducation()
    },
    onLeave: function (index, nextIndex) {
      console.log('index', index)
      if (nextIndex === 1) {
        inHome()
      } else {
        // 删除原有样式
        $('.home .user .left').removeClass('slideInLeft')
        $('.home .user .right').removeClass('slideInRight')
        $('.home .text .text1').removeClass('bounceInUp')
        $('.home .text .text1').removeClass('fadeInUp  ')
        $('.home .text .text1').removeClass('fadeInUp')
        $('.home .text .text2').removeClass('fadeInUp')
        $('.home .text .text3').removeClass('fadeInUp')
        $('.home .text .text4').removeClass('fadeInUp')
        // 添加新样式
        $('.home .user .left').addClass('slideOutLeft')
        $('.home .user .right').addClass('slideOutRight')
        $('.home .text .text1').addClass('fadeOutDown')
        $('.home .text .text1').addClass('fadeOutDown')
        $('.home .text .text1').addClass('fadeOutDown')
        $('.home .text .text2').addClass('fadeOutDown')
        $('.home .text .text3').addClass('fadeOutDown')
        $('.home .text .text4').addClass('fadeOutDown')
        $('.home .text .bottom').addClass('fadeOutDown')
        setTimeout(function(){
          $('.home .user .left').hide()
          $('.home .user .right').hide()
          $('.home .text .text1').hide()
          $('.home .text .text1').hide()
          $('.home .text .text1').hide()
          $('.home .text .text2').hide()
          $('.home .text .text3').hide()
          $('.home .text .text4').hide()
        },500)
      }
      if (nextIndex === 2) {
        inInformation()
      } else {
        // 删除原有样式
        $('.information .text .right .p1').removeClass('fadeInUp')
        $('.information .text .right .p2').removeClass('fadeInUp')
        $('.information .text .right .p3').removeClass('fadeInUp')
        $('.information .text .right .p4').removeClass('fadeInUp')
        $('.information .text .right .p5').removeClass('fadeInUp')
        $('.information .text .right .p6').removeClass('fadeInUp')
        $('.information .text .right .p7').removeClass('fadeInUp')
        $('.information .text .right .p8').removeClass('fadeInUp')
        // 添加新样式
        $('.information .text .right .p1').addClass('fadeOutDown')
        $('.information .text .right .p2').addClass('fadeOutDown')
        $('.information .text .right .p3').addClass('fadeOutDown')
        $('.information .text .right .p4').addClass('fadeOutDown')
        $('.information .text .right .p5').addClass('fadeOutDown')
        $('.information .text .right .p6').addClass('fadeOutDown')
        $('.information .text .right .p7').addClass('fadeOutDown')
        $('.information .text .right .p8').addClass('fadeOutDown')
        setTimeout(function(){
          $('.information .text .right .p1').hide()
          $('.information .text .right .p2').hide()
          $('.information .text .right .p3').hide()
          $('.information .text .right .p4').hide()
          $('.information .text .right .p5').hide()
          $('.information .text .right .p6').hide()
          $('.information .text .right .p7').hide()
          $('.information .text .right .p8').hide()
        },500);
      }
      if (nextIndex === 5) {
        ineducation()
      } else {
        // 删除原有样式
        $('.education .text .p1').removeClass('fadeInUp')
        $('.education .text .p2').removeClass('fadeInUp')
        $('.education .text .p3').removeClass('fadeInUp')
        $('.education .text .p4').removeClass('fadeInUp')
        $('.education .text .p5').removeClass('fadeInUp')
        $('.education .text .p6').removeClass('fadeInUp')
        $('.education .text .p7').removeClass('fadeInUp')
        $('.education .text .p8').removeClass('fadeInUp')
        $('.education .text .p9').removeClass('fadeInUp')
        $('.education .text .p10').removeClass('fadeInUp')
        // 添加新样式
        $('.education .text .p1').addClass('fadeOutDown')
        $('.education .text .p2').addClass('fadeOutDown')
        $('.education .text .p3').addClass('fadeOutDown')
        $('.education .text .p4').addClass('fadeOutDown')
        $('.education .text .p5').addClass('fadeOutDown')
        $('.education .text .p6').addClass('fadeOutDown')
        $('.education .text .p7').addClass('fadeOutDown')
        $('.education .text .p8').addClass('fadeOutDown')
        $('.education .text .p9').addClass('fadeOutDown')
        $('.education .text .p10').addClass('fadeOutDown')
        setTimeout(function(){
          $('.education .text .p1').hide()
          $('.education .text .p2').hide()
          $('.education .text .p3').hide()
          $('.education .text .p4').hide()
          $('.education .text .p5').hide()
          $('.education .text .p6').hide()
          $('.education .text .p7').hide()
          $('.education .text .p8').hide()
          $('.education .text .p9').hide()
          $('.education .text .p10').hide()
        },500);
      }
      if (nextIndex === 6) {
        inVisitguide()
      } else {
        // 删除原有样式
        $('.visitguide .text .p1').removeClass('fadeInUp')
        $('.visitguide .text .p2').removeClass('fadeInUp')
        $('.visitguide .text .p3').removeClass('fadeInUp')
        $('.visitguide .text .p4').removeClass('fadeInUp')
        $('.visitguide .text .p5').removeClass('fadeInUp')
        $('.visitguide .text .p6').removeClass('fadeInUp')
        $('.visitguide .text .p7').removeClass('fadeInUp')
        $('.visitguide .text .p8').removeClass('fadeInUp')
        $('.visitguide .text .p9').removeClass('fadeInUp')
        $('.visitguide .text .p10').removeClass('fadeInUp')
        // 添加新样式
        $('.visitguide .text .p1').addClass('fadeOutDown')
        $('.visitguide .text .p2').addClass('fadeOutDown')
        $('.visitguide .text .p3').addClass('fadeOutDown')
        $('.visitguide .text .p4').addClass('fadeOutDown')
        $('.visitguide .text .p5').addClass('fadeOutDown')
        $('.visitguide .text .p6').addClass('fadeOutDown')
        $('.visitguide .text .p7').addClass('fadeOutDown')
        $('.visitguide .text .p8').addClass('fadeOutDown')
        $('.visitguide .text .p9').addClass('fadeOutDown')
        $('.visitguide .text .p10').addClass('fadeOutDown')
        setTimeout(function(){
          $('.visitguide .text .p1').hide()
          $('.visitguide .text .p2').hide()
          $('.visitguide .text .p3').hide()
          $('.visitguide .text .p4').hide()
          $('.visitguide .text .p5').hide()
          $('.visitguide .text .p6').hide()
          $('.visitguide .text .p7').hide()
          $('.visitguide .text .p8').hide()
          $('.visitguide .text .p9').hide()
          $('.visitguide .text .p10').hide()
        },500);
      }
      if (nextIndex === 3) {
        setTimeout(function(){
          $('.highlights .main').removeClass('fadeOutDown')
          $('.highlights .main').addClass('fadeInDown').show()
        }, 500);
      } else {
        $('.highlights .main').removeClass('fadeInDown')
        $('.highlights .main').addClass('fadeOutDown')
        setTimeout(function(){
          $('.highlights .main').hide()
        }, 700)
      }
      if (nextIndex === 4) {
        setTimeout(function(){
          $('.galleryview .img').removeClass('fadeOutDown')
          $('.galleryview .img').addClass('fadeInDown').show()
        }, 500);
      } else {
        $('.galleryview .img').removeClass('fadeInDown')
        $('.galleryview .img').addClass('fadeOutDown')
        setTimeout(function(){
          $('.galleryview .img').hide()
        }, 700)
      }
    }
  });
});
