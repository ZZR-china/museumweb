$(function(){
  var count = 0
  setTimeout(function(){
    setInterval(function(){
      if (count%2 === 1) {
        $('.section.home .text .bottom img').show()
      }else{
        $('.section.home .text .bottom img').hide()
      }
      count++
    },500);
  }, 2500);
  $('#fp-nav ul').append('<li class="tohome"><div><a href="#home"><img src="images/top.png"/></a></div></li>');
  var showMenu = $('.show_menu');
  var menu = $('#menu');
  showMenu.hover(function(){
    menu.show()
    showMenu.hide()
  })
  menu.hover(function(){
    menu.show()
  },function(){
    showMenu.show()
    menu.hide()
  })
  showMenu.click(function(){
    alert(22)
  })

  var modelExit = $('.exit')
  modelExit.click(function(){
    $(this).parent().parent().hide()
  })

  var item = $('.main .item')
  item.click(function(){
    var name = $(this).attr("dataIndex")
    if (name==="modal2") {
      return
    }
    $("."+name).show()
  })

  var userLeft = $('.section.home .user .left');
  var userRight = $('.section.home .user .right');

  userLeft.hover(function(){
    $('.home_bg img').removeClass('right')
    $('.home_bg img').addClass('left')
  })
  userRight.hover(function(){
    $('.home_bg img').removeClass('left')
    $('.home_bg img').addClass('right')
  })
})