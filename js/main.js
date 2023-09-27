//01) 슬라이더
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true, 
    
    //오토플레이
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: "fraction",
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  
  //02) btn 자주찾는 서비스로 (스크롤)
  const BtnInto = document.querySelector('.header_btn')
  const special = document.querySelector('.nav_wrap')

  BtnInto.addEventListener('click',()=>{
    special.scrollIntoView({block:"center", behavior:"smooth"})
  })




  //03) 검색창 입력안하면 경고뜨게

  const inputBtn = document.querySelector('.search_bar_div input') // 텍스트칸
  const searchBtn = document.querySelector('.search_bar_div button') // "저장" 버튼

  searchBtn.addEventListener('click',function(){

      if(inputBtn.value == ''){
          alert('내용을 입력하세요.')
          return; 
      }
    })


    //04) 민원신청 팝업 버튼 누르면 뜨게

const elBtn1 =document.querySelector('.s1_wrap button');
const els1 =document.querySelector('.s1_wrap');
const closeBtn = document.querySelector('.sp_close')
const closeBtn2 = document.querySelector('.sp_btn')
const dark = document.querySelector('.dark');


elBtn1.addEventListener('click', function(){
  els1.classList.add('active');
  dark.style.display = 'block';
})

closeBtn.addEventListener('click', function(){
  els1.classList.remove('active');
  dark.style.display = 'none';
})

closeBtn2.addEventListener('click', function(){
  els1.classList.remove('active');
  dark.style.display = 'none';
  alert('접수완료! \n빠르게 안내드리겠습니다.')
})






  
  
  /*
  헤더 행정안전부 부분 스크롤 내리면 위로 반 올라가게 하기!
  
  */