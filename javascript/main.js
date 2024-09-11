$(document).ready(function() {


  // SWIPER 메인비쥬얼

      const swiper_m = new Swiper(".main", {
          cssMode: true,
          slidesPerView: 1,
          spaceBetween: 10,
          autoplay: {
              delay: 2000,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          pagination: {
            el: ".swiper-pagination",
          },
          mousewheel: true,
          keyboard: true,
      });


  // CATEGORY CLICK 시 NAV OPEN / CLOSE

      $(".category button").click(function() {
        $("nav").stop().slideDown(500);
      });

      $("nav").mouseleave(function() {
        $("nav").stop().slideUp(500);
      });


  // NAV TITLE BUTTON MOUSEENTER / MOUSELEAVE 시 SUB OPEN / CLOSE

      $(".tit").mouseenter(function() {
        $(this).siblings(".sub").show();
      });

      $(".tit").mouseleave(function() {
        $(this).siblings(".sub").hide();
      });


  // NAV TITLE BUTTON MOUSEENTER / MOUSELEAVE 시 MORE OPEN / CLOSE

      $(".tit").mouseenter(function() {
        $(this).siblings(".more").show();
      });

      $(".tit").mouseleave(function() {
        $(this).siblings(".more").hide();
      });


    // SWIPER 추천상품

      const swiper_r = new Swiper(".recommend", {
        slidesPerView: 2,
        spaceBetween: 20,
        scrollbar: {
          el: ".swiper-scrollbar",
          draggable: true, 
          hide: true,
        },
      });


    // 추천상품 각 상품 IMG HOVER 설정

      $(".reco1_img").on("mouseenter", function() {
        $(".reco1_img").attr("src", "./images/reco1_hover.webp");
      });

      $(".reco1_img").on("mouseleave", function() {
          $(".reco1_img").attr("src", "./images/reco1.webp");
      });

      $(".reco2_img").on("mouseenter", function() {
        $(".reco2_img").attr("src", "./images/reco2_hover.webp");
      });

      $(".reco2_img").on("mouseleave", function() {
          $(".reco2_img").attr("src", "./images/reco2.webp");
      });

      $(".reco3_img").on("mouseenter", function() {
        $(".reco3_img").attr("src", "./images/reco3_hover.webp");
      });

      $(".reco3_img").on("mouseleave", function() {
          $(".reco3_img").attr("src", "./images/reco3.jpg");
      });

      $(".reco4_img").on("mouseenter", function() {
        $(".reco4_img").attr("src", "./images/reco4_hover.webp");
      });

      $(".reco4_img").on("mouseleave", function() {
          $(".reco4_img").attr("src", "./images/reco4.webp");
      });


    // SWIPER 신상품

      const swiper_n = new Swiper(".new", {
        slidesPerView: 2,
        spaceBetween: 20,
        scrollbar: {
          el: ".swiper-scrollbar",
          draggable: true, 
          hide: true,
        },
      });


    // 신상품 각 상품 IMG HOVER 설정

      $(".new1_img").on("mouseenter", function() {
        $(".new1_img").attr("src", "./images/new1_hover.webp");
      });

      $(".new1_img").on("mouseleave", function() {
          $(".new1_img").attr("src", "./images/new1.webp");
      });

      $(".new2_img").on("mouseenter", function() {
        $(".new2_img").attr("src", "./images/new2_hover.webp");
      });

      $(".new2_img").on("mouseleave", function() {
          $(".new2_img").attr("src", "./images/new2.webp");
      });

      $(".new3_img").on("mouseenter", function() {
        $(".new3_img").attr("src", "./images/new3_hover.webp");
      });

      $(".new3_img").on("mouseleave", function() {
          $(".new3_img").attr("src", "./images/new3.webp");
      });

      $(".new4_img").on("mouseenter", function() {
        $(".new4_img").attr("src", "./images/new4_hover.webp");
      });

      $(".new4_img").on("mouseleave", function() {
          $(".new4_img").attr("src", "./images/new4.webp");
      });    
    

    // SWIPER 스페셜 할인

      const swiper_s = new Swiper(".special", {
        slidesPerView: 2,
        spaceBetween: 20,
        scrollbar: {
          el: ".swiper-scrollbar",
          draggable: true, 
          hide: true,
        },
      });


    // 스페셜 할인 각 상품 IMG HOVER 설정

      $(".special1_img").on("mouseenter", function() {
        $(".special1_img").attr("src", "./images/special1_hover.webp");
      });

      $(".special1_img").on("mouseleave", function() {
          $(".special1_img").attr("src", "./images/special1.webp");
      });

      $(".special2_img").on("mouseenter", function() {
        $(".special2_img").attr("src", "./images/special2_hover.webp");
      });

      $(".special2_img").on("mouseleave", function() {
          $(".special2_img").attr("src", "./images/special2.webp");
      });

      $(".special3_img").on("mouseenter", function() {
        $(".special3_img").attr("src", "./images/special3_hover.webp");
      });

      $(".special3_img").on("mouseleave", function() {
          $(".special3_img").attr("src", "./images/special3.webp");
      });

      $(".special4_img").on("mouseenter", function() {
        $(".special4_img").attr("src", "./images/special4_hover.webp");
      });

      $(".special4_img").on("mouseleave", function() {
          $(".special4_img").attr("src", "./images/special4.webp");
      });


    // SWIPER 배너

      const swiper_b = new Swiper(".swiper.banner", {
        slidesPerView: 1,
        cssMode: true,
        autoplay: {
          delay: 2000,
        },
        pagination: {
          el: ".swiper-pagination",
        },
        mousewheel: true,
        keyboard: true,
      });

    
    // SWIPER 탭메뉴

      const swiper_t = new Swiper(".swiper.tabmenu", {
        slidesPerView: 2,
        spaceBetween: 10,
        scrollbar: {
          el: ".swiper-scrollbar",
          draggable: true, 
          hide: false,
        },
        breakpoints: {
        
          992: {
            slidesPerView: 4,
            spaceBetween: 12,
            autowidth: true,
          },
        },
      });


    // 탭메뉴 클릭시 활성화 된 메뉴 폰트 색상 변경

      $(".swiper.tabmenu button").on("click", function() {
        $(".swiper.tabmenu button").css("color","#cccccc");
        $(this).css("color","#111111");
      });


    // 탭메뉴 클릭시 활성화 된 메뉴 리스트 SHOW & HIDE  

      $(".swiper.tabmenu .swiper-slide").on("click", function() {
        const i = $(this).index();
        $(".tabcon").hide();
        $(".tabcon").eq(i).show();
      });


    // 식품 각 상품 IMG HOVER 설정

      $(".grocery1_img").on("mouseenter", function() {
        $(".grocery1_img").attr("src", "./images/grocery1_hover.webp");
      });

      $(".grocery1_img").on("mouseleave", function() {
          $(".grocery1_img").attr("src", "./images/grocery1.webp");
      });

      $(".grocery2_img").on("mouseenter", function() {
        $(".grocery2_img").attr("src", "./images/grocery2_hover.webp");
      });

      $(".grocery2_img").on("mouseleave", function() {
          $(".grocery2_img").attr("src", "./images/grocery2.webp");
      });

      $(".grocery3_img").on("mouseenter", function() {
        $(".grocery3_img").attr("src", "./images/grocery3_hover.webp");
      });

      $(".grocery3_img").on("mouseleave", function() {
          $(".grocery3_img").attr("src", "./images/grocery3.webp");
      });

      $(".grocery4_img").on("mouseenter", function() {
        $(".grocery4_img").attr("src", "./images/grocery4_hover.jpg");
      });

      $(".grocery4_img").on("mouseleave", function() {
          $(".grocery4_img").attr("src", "./images/grocery4.webp");
      });

      $(".grocery5_img").on("mouseenter", function() {
        $(".grocery5_img").attr("src", "./images/grocery5_hover.webp");
      });

      $(".grocery5_img").on("mouseleave", function() {
          $(".grocery5_img").attr("src", "./images/grocery5.jpg");
      });

      $(".grocery6_img").on("mouseenter", function() {
        $(".grocery6_img").attr("src", "./images/grocery6_hover.webp");
      });

      $(".grocery6_img").on("mouseleave", function() {
          $(".grocery6_img").attr("src", "./images/grocery6.webp");
      });


    // 가구 각 상품 IMG HOVER 설정

      $(".furniture1_img").on("mouseenter", function() {
        $(".furniture1_img").attr("src", "./images/furniture1_hover.webp");
      });

      $(".furniture1_img").on("mouseleave", function() {
          $(".furniture1_img").attr("src", "./images/furniture1.webp");
      });

      $(".furniture2_img").on("mouseenter", function() {
        $(".furniture2_img").attr("src", "./images/furniture2_hover.webp");
      });

      $(".furniture2_img").on("mouseleave", function() {
          $(".furniture2_img").attr("src", "./images/furniture2.webp");
      });

      $(".furniture3_img").on("mouseenter", function() {
        $(".furniture3_img").attr("src", "./images/furniture3_hover.jfif");
      });

      $(".furniture3_img").on("mouseleave", function() {
          $(".furniture3_img").attr("src", "./images/furniture3.webp");
      });

      $(".furniture4_img").on("mouseenter", function() {
        $(".furniture4_img").attr("src", "./images/furniture4_hover.webp");
      });

      $(".furniture4_img").on("mouseleave", function() {
          $(".furniture4_img").attr("src", "./images/furniture4.webp");
      });

      $(".furniture5_img").on("mouseenter", function() {
        $(".furniture5_img").attr("src", "./images/furniture5_hover.webp");
      });

      $(".furniture5_img").on("mouseleave", function() {
          $(".furniture5_img").attr("src", "./images/furniture5.webp");
      });

      $(".furniture6_img").on("mouseenter", function() {
        $(".furniture6_img").attr("src", "./images/furniture6_hover.webp");
      });

      $(".furniture6_img").on("mouseleave", function() {
          $(".furniture6_img").attr("src", "./images/furniture6.webp");
      });


    // 가전 각 상품 IMG HOVER 설정

      $(".appliances1_img").on("mouseenter", function() {
        $(".appliances1_img").attr("src", "./images/appliances1_hover.webp");
      });

      $(".appliances1_img").on("mouseleave", function() {
          $(".appliances1_img").attr("src", "./images/appliances1.webp");
      });

      $(".appliances2_img").on("mouseenter", function() {
        $(".appliances2_img").attr("src", "./images/appliances2_hover.webp");
      });

      $(".appliances2_img").on("mouseleave", function() {
          $(".appliances2_img").attr("src", "./images/appliances2.webp");
      });

      $(".appliances3_img").on("mouseenter", function() {
        $(".appliances3_img").attr("src", "./images/appliances3_hover.webp");
      });

      $(".appliances3_img").on("mouseleave", function() {
          $(".appliances3_img").attr("src", "./images/appliances3.webp");
      });

      $(".appliances4_img").on("mouseenter", function() {
        $(".appliances4_img").attr("src", "./images/appliances4_hover.webp");
      });

      $(".appliances4_img").on("mouseleave", function() {
          $(".appliances4_img").attr("src", "./images/appliances4.webp");
      });

      $(".appliances5_img").on("mouseenter", function() {
        $(".appliances5_img").attr("src", "./images/appliances5_hover.webp");
      });

      $(".appliances5_img").on("mouseleave", function() {
          $(".appliances5_img").attr("src", "./images/appliances5.webp");
      });

      $(".appliances6_img").on("mouseenter", function() {
        $(".appliances6_img").attr("src", "./images/appliances6_hover.webp");
      });

      $(".appliances6_img").on("mouseleave", function() {
          $(".appliances6_img").attr("src", "./images/appliances6.webp");
      });


    // 뷰티 각 상품 IMG HOVER 설정

      $(".beauty1_img").on("mouseenter", function() {
        $(".beauty1_img").attr("src", "./images/beauty1_hover.webp");
      });

      $(".beauty1_img").on("mouseleave", function() {
          $(".beauty1_img").attr("src", "./images/beauty1.webp");
      });

      $(".beauty2_img").on("mouseenter", function() {
        $(".beauty2_img").attr("src", "./images/beauty2_hover.webp");
      });

      $(".beauty2_img").on("mouseleave", function() {
          $(".beauty2_img").attr("src", "./images/beauty2.webp");
      });

      $(".beauty3_img").on("mouseenter", function() {
        $(".beauty3_img").attr("src", "./images/beauty3_hover.webp");
      });

      $(".beauty3_img").on("mouseleave", function() {
          $(".beauty3_img").attr("src", "./images/beauty3.webp");
      });

      $(".beauty4_img").on("mouseenter", function() {
        $(".beauty4_img").attr("src", "./images/beauty4_hover.webp");
      });

      $(".beauty4_img").on("mouseleave", function() {
          $(".beauty4_img").attr("src", "./images/beauty4.webp");
      });

      $(".beauty5_img").on("mouseenter", function() {
        $(".beauty5_img").attr("src", "./images/beauty5_hover.webp");
      });

      $(".beauty5_img").on("mouseleave", function() {
          $(".beauty5_img").attr("src", "./images/beauty5.webp");
      });

      $(".beauty6_img").on("mouseenter", function() {
        $(".beauty6_img").attr("src", "./images/beauty6_hover.webp");
      });

      $(".beauty6_img").on("mouseleave", function() {
          $(".beauty6_img").attr("src", "./images/beauty6.webp");
      });


    // 각 상품 HEART ICON 클릭 시 찜하기 ON & OFF 

      $(".heart").on("click", function() {
      if ($(this).attr("src") === "./images/icon_heart.png") {
          $(this).attr("src", "./images/icon_favorite2.png");
      } else {
          $(this).attr("src", "./images/icon_heart.png");
      }
      });

    // SWIPER 커넥션

      const swiper_c = new Swiper(".connection", {
        slidesPerView: 2,
        spaceBetween: 12,
        scrollbar: {
          el: ".swiper-scrollbar",
          draggable: true, 
          hide: true,
        },
        breakpoints: {
        
          992: {
            slidesPerView: 4,
            spaceBetween: 12,
          },
        },
      });


    // 모바일 버전 BOTTOM_NAV 의 MENU 클릭시 NAV OPEN & CLOSE

      $(".bottomNav .open").on("click", function() {
        $(".bottomNav .nav").css("left", 0);
      });

      $(".bottomNav .close").on("click", function() {
        $(".bottomNav .nav").css("left", "-100%");
      });


    // SWIPER 서비스

      const swiper_e = new Swiper(".service", {
        slidesPerView: 1,
        spaceBetween: 20,
        scrollbar: {
          el: ".swiper-scrollbar",
          draggable: true, 
          hide: true,
        },
        breakpoints: {
        
          700: {
            slidesPerView: 2,
            spaceBetween: 12,
          },
        },
      });


    // FOOTER NAV OPEN & CLOSE

      $("footer .right .tit").click(function() {
        $(this).next(".sub_tit").stop().slideToggle(500);
      });


    // BOTTON NAV 각 상품 IMG HOVER 설정

      $(".nav1_img").on("mouseenter", function() {
        $(".nav1_img").attr("src", "./images/nav_list1_hover.webp");
      });

      $(".nav1_img").on("mouseleave", function() {
          $(".nav1_img").attr("src", "./images/nav_list1.webp");
      });

      $(".nav2_img").on("mouseenter", function() {
        $(".nav2_img").attr("src", "./images/nav_list2_hover.webp");
      });

      $(".nav2_img").on("mouseleave", function() {
          $(".nav2_img").attr("src", "./images/nav_list2.webp");
      });

      $(".nav3_img").on("mouseenter", function() {
        $(".nav3_img").attr("src", "./images/nav_list3_hover.webp");
      });

      $(".nav3_img").on("mouseleave", function() {
          $(".nav3_img").attr("src", "./images/nav_list3.webp");
      });

      $(".nav4_img").on("mouseenter", function() {
        $(".nav4_img").attr("src", "./images/nav_list4_hover.webp");
      });

      $(".nav4_img").on("mouseleave", function() {
          $(".nav4_img").attr("src", "./images/nav_list4.webp");
      });

      $(".nav5_img").on("mouseenter", function() {
        $(".nav5_img").attr("src", "./images/nav_list5_hover.webp");
      });

      $(".nav5_img").on("mouseleave", function() {
          $(".nav5_img").attr("src", "./images/nav_list5.webp");
      });

      $(".nav6_img").on("mouseenter", function() {
        $(".nav6_img").attr("src", "./images/nav_list6_hover.webp");
      });

      $(".nav6_img").on("mouseleave", function() {
          $(".nav6_img").attr("src", "./images/nav_list6.webp");
      });

      $(".nav7_img").on("mouseenter", function() {
        $(".nav7_img").attr("src", "./images/nav_list7_hover.webp");
      });

      $(".nav7_img").on("mouseleave", function() {
          $(".nav7_img").attr("src", "./images/nav_list7.webp");
      });

      $(".nav8_img").on("mouseenter", function() {
        $(".nav8_img").attr("src", "./images/nav_list8_hover.webp");
      });

      $(".nav8_img").on("mouseleave", function() {
          $(".nav8_img").attr("src", "./images/nav_list8.webp");
      });

      $(".nav9_img").on("mouseenter", function() {
        $(".nav9_img").attr("src", "./images/nav_list9_hover.webp");
      });

      $(".nav9_img").on("mouseleave", function() {
          $(".nav9_img").attr("src", "./images/nav_list9.webp");
      });

      $(".nav10_img").on("mouseenter", function() {
        $(".nav10_img").attr("src", "./images/nav_list10_hover.webp");
      });

      $(".nav10_img").on("mouseleave", function() {
          $(".nav10_img").attr("src", "./images/nav_list10.webp");
      });

      $(".nav11_img").on("mouseenter", function() {
        $(".nav11_img").attr("src", "./images/nav_list11_hover.webp");
      });

      $(".nav11_img").on("mouseleave", function() {
          $(".nav11_img").attr("src", "./images/nav_list11.webp");
      });

      $(".nav12_img").on("mouseenter", function() {
        $(".nav12_img").attr("src", "./images/nav_list12_hover.webp");
      });

      $(".nav12_img").on("mouseleave", function() {
          $(".nav12_img").attr("src", "./images/nav_list12.webp");
      });

      $(".nav13_img").on("mouseenter", function() {
        $(".nav13_img").attr("src", "./images/nav_list13_hover.webp");
      });

      $(".nav13_img").on("mouseleave", function() {
          $(".nav13_img").attr("src", "./images/nav_list13.webp");
      });

      $(".nav14_img").on("mouseenter", function() {
        $(".nav14_img").attr("src", "./images/nav_list14_hover.jpg");
      });

      $(".nav14_img").on("mouseleave", function() {
          $(".nav14_img").attr("src", "./images/nav_list14.webp");
      });

      $(".nav15_img").on("mouseenter", function() {
        $(".nav15_img").attr("src", "./images/nav_list15_hover.jpg");
      });

      $(".nav15_img").on("mouseleave", function() {
          $(".nav15_img").attr("src", "./images/nav_list15.jpg");
      });

});