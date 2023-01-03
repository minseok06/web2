// html요소를 선택한 후 그 요소에 수행할 액션을 지정함
jQuery(document).ready(function(){

    $('.navi>li').mouseover(function(){ /* $(선택자).action */
        $(this).find('.submenu').stop().slideDown(500);
    }).mouseout(function(){
        $(this).find('.submenu').stop().slideUp(500);
    });
// $('.navi>li') navi의 <li>요소에 마우스오버와 마우스 아웃 이벤트
// slideDown(500) jQuery에서 제공하는 함수로 슬라이딩 애니메이션을
// 숫자 500은 0.5초를 의미
});