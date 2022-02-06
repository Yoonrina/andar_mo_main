$(function(){
  //최상단 띠배너 오토 스와이프, fade버전
  var swiper = new Swiper(".top_advertisemant", {
    spaceBetween: 30,
    effect: "fade",
    autoplay:{
      delay:1000,
      disableOnInteraction:false,
    },
  });


  //헤더 - 카테고리

  //사이드메뉴 - 메뉴클릭하면 왼쪽에서 나옴
  $('.aside_menu').click(function(e){
    e.preventDefault();
    $('aside').addClass('open');
    $('.aside_bg').addClass('open');
    $('body').addClass('hidden');
  })
  //사이드메뉴 - 닫기 클릭하면 왼쪽으로 사라짐
  $('.closs').click(function(e){
    e.preventDefault();
    $('aside').removeClass('open');
    $('.aside_bg').removeClass('open');
    $('body').removeClass('hidden');
  })

  //대메뉴 클릭하면 화살표 돌아감, 소메뉴나옴
  $('.as_item > .cate_link').click(function(e){
    e.preventDefault();

    h = $(this).siblings('.sub_menu').children('.s_list').outerHeight();


    if($(this).siblings('.sub_menu').height() > 0){

      $(this).siblings('.down_btn').removeClass('open');

      $(this).siblings('.sub_menu').stop().animate({height:0},300);
    }else{

      $(this).siblings('.down_btn').addClass('open');

      // $('.sub_menu').stop().animate({height:0},300);
      $(this).siblings('.sub_menu').stop().animate({height:h},300);
    }
    
  })


  //스크롤 내리면 헤더(fixed) 나타남
  $(window).scroll(function(){

    curr = $(this).scrollTop();

    if(curr > 2){
      $('.logo_area').addClass('on');
      $('.category').addClass('on');
    }else{
      $('.logo_area').removeClass('on');
      $('.category').removeClass('on');
    }
  });

  //카테고리-대메뉴 스와이프 부분
  var swiper = new Swiper(".cate_list", {
    slidesPerView: 'auto',
    spaceBetween: 15,
    freeMode: true,
  });

  //all_view(화살표) 누르면 아래화살표, 전체메뉴
  $('.all_view').click(function(e){
    e.preventDefault();

    h = $('.top_menu_all .inner .m_all_list').outerHeight();

    if($(this).hasClass('show')){

      //닫음
      $('.top_menu_all').stop().animate({height:0},300);
      $(this).removeClass('show');
      $('.cate_sum_up').addClass('on');
      $('.all_menu_title').removeClass('show');

    }else{

      //열음
      $(this).siblings('.top_menu_all').stop().animate({height:h},300,function(){
        $('.top_menu_all').css({'height':'auto'})
      });

      $(this).addClass('show');
      $('.cate_sum_up').removeClass('on');
      $('.all_menu_title').addClass('show');
    };


    /*
    if($(this).siblings('.top_menu_all').height() > 0){

      //닫음
      $('.top_menu_all').stop().animate({height:0},300);

      $('.cate_sum_up').addClass('on');

      $('.all_view').removeClass('show');
      $('.all_menu_title').removeClass('show');
    }else{

      //열음

      $(this).siblings('.top_menu_all').stop().animate({height:h},300);

      $('.cate_sum_up').removeClass('on');
      $('.all_view').addClass('show');
      $('.all_menu_title').addClass('show');
    }
    */

  });

  //검색페이지, 닫기
  $('.search').click(function(e){
    e.preventDefault();
    $('.search_wrap').addClass('search_on');
  });

  $('.search_close').click(function(e){
    e.preventDefault();
    $('.search_wrap').removeClass('search_on');
  });

  //퀵버튼, 스크롤 올릴때마다 나타남
  var lastScroll = 0;

  $(window).scroll(function(){
    
    curr = $(this).scrollTop();
  
    if(curr > lastScroll){
      if ($(window).scrollTop() >= 100){
        //console.log('내려가는중');
        $('.quick_btn').removeClass('show');
      }
    }else{
      //console.log('올라가는중');
      $('.quick_btn').addClass('show');
    }
    lastScroll = curr;
  });

  //탑버튼 누르면 부드럽게 위로
  $('.top_btn').click(function(e){
    e.preventDefault();
    $('html,body').stop().animate({scrollTop:0},500);
  });



  //메인

  //sc_main_vis 슬라이드
  var swiper = new Swiper(".sc_main_vis", {
    loop:true,
    spaceBetween: 30,
    effect: "fade",
    autoplay:{
      delay:3000,
      disableOnInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  //레깅스, 브라탑, 세트 슬라이드
  var swiper = new Swiper(".thumbnail_list", {
    freeMode: true,
    slidesPerView: 'auto',
    spaceBetween: 10,
  });














});