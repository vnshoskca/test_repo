/************************/ 
/*トグル*/
/************************/ 
$(function(){
$('.faq-list2').on('click',function () {
    $(this).toggleClass('faq-open');
    $(this).children('.answer').slideToggle();
})
});



/*
//$(function(){
    function slider(){
        var current = $('.my-item.current'),
            next = current.is(':last-child') ? $('.my-item').first() : current.next();
        next.addClass('current');
        current.removeClass('current');
      }
      var setSlider = setInterval( slider, 2000);
      //setTimeout( slider, 1000);
//});
*/

/************************/ 
/*スライダー：opacity遷移*/
/************************/ 
function slider(flag, num) {
    var current = $(".my-item.current"),
        next,
        index;
        //console.log(current);
    if (!flag) {/*my-buttonのnextがクリックされた時*/ 
      next = current.is(":last-child") ? $(".my-item").first() : current.next();
      index = next.index();
    } else if (flag === 'my-dot') {
      next = $(".my-item").eq(num);
      //console.log(next);
      index = num;
      //console.log(num);
      //console.log(index);
    } else {/*my-buttonのprevがクリックされた時*/
      next = current.is(":first-child") ? $(".my-item").last() : current.prev();
      index = next.index();
    }
    next.addClass("current");
    current.removeClass("current");
    $(".my-dot").eq(index).addClass("current").siblings().removeClass("current");
}

//var setSlider = setInterval(slider, 4000);
  
$(".my-button").on("click", function() {
    //clearInterval(setSlider);
    var flag = $(this).is(".prev") ? true : false;
    slider(flag);
    //var setSlider = setInterval(slider, 4000);
});
  
$(".my-dot").on("click", function() {
    if ($(this).is(".current")) return;/*自然遷移と重なったらスルーする*/ 
    //clearInterval(setSlider);
    var num = $(this).index();
    slider('my-dot', num);
    //var setSlider = setInterval(slider, 4000);
});

/***************************/ 
/*スライダー：スライド横に遷移*/
/****************************/ 
window.addEventListener("load" , function (){

    //クリックした時、scroll()を実行する。押された要素(this)とブーリアン値(NextとPrevを見分ける)を引数にする。
    $(".prev2").on("click",function(){ scroll(this,false); });
    $(".next2").on("click",function(){ scroll(this,true); });
});
//scroll関数
function scroll(elem,next){

    /* クリックされた箇所のスクロールする要素を抜き取る */
    let target  = $(elem).siblings(".my-items2");

    let all_width       = target.get(0).scrollWidth;
    let single_width    = target.outerWidth();
    let position_width  = target.scrollLeft();

    //先頭、末端までスクロールしたら、それぞれ戻る、進むができないように(jQueryアニメーション遅延問題)
    if ( (next) && ( all_width > single_width + position_width ) ){
        target.animate({ scrollLeft:"+=" + String(single_width) } , 300);
    }
    else if ( (!next) && ( 0 < position_width ) ){
        target.animate({ scrollLeft:"-=" + String(single_width) } , 300);
    }
}


/**https://noauto-nolife.com/post/javascript-carousel-origin-slider/**/
window.addEventListener("load" , function (){

    //クリックした時、scroll()を実行する。押された要素(this)とブーリアン値(NextとPrevを見分ける)を引数にする。
    $(".previous_button").on("click",function(){ scroll(this,false); });
    $(".next_button").on("click",    function(){ scroll(this,true); });
});
//scroll関数
function scroll(elem,next){

    /* クリックされた箇所のスクロールする要素を抜き取る */
    let target  = $(elem).siblings(".data_preview_area");/*my-items*/

    let all_width       = target.get(0).scrollWidth;
    let single_width    = target.outerWidth();
    let position_width  = target.scrollLeft();

    //先頭、末端までスクロールしたら、それぞれ戻る、進むができないように(jQueryアニメーション遅延問題)
    if ( (next) && ( all_width > single_width + position_width ) ){
        target.animate({ scrollLeft:"+=" + String(single_width) } , 300);
    }
    else if ( (!next) && ( 0 < position_width ) ){
        target.animate({ scrollLeft:"-=" + String(single_width) } , 300);
    }
}

/*CSSとJavaScriptでスワイプ操作にも対応した簡単なスライドを自作する*/
/*https://blog.ver001.com/css-javascript-slide-swipe/*/
document.querySelectorAll('.left').forEach(elm => {
	elm.onclick = function () {
		let ul = elm.parentNode.querySelector('ul');
		ul.scrollLeft -= ul.clientWidth;
	};
});
document.querySelectorAll('.right').forEach(elm => {
	elm.onclick = function () {
		let ul = elm.parentNode.querySelector('ul');
		ul.scrollLeft += ul.clientWidth;
	};
});

/**{%- comment -%} 画像スライダーのライブラリはslickよりSwiperの方がおすすめなたった１つの理由 {%- endcomment -%}
{%- comment -%} https://templete-press.com/blog/swiper-vs-slick/#Swiper-2 {%- endcomment -%}**/
/*
const mySwiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
   
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
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
  */
  
//$(".swiper-button").on("click", function() {
    /*
new Swiper('.swiper-container', {
    loop: true, // 最後のスライドの後は最初のスライドに戻るならtrue
    navigation: { // 前後の矢印のクラス名を指定
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    },
    
    autoplay: {
        delay: 3000, // 自動再生する場合の実行間隔
        disableOnInteraction: false, // 矢印やスワイプでスライド切り替わった場合、自動再生を停止するか、再開したいのでfalse
    },
    
    speed: 500, // スライドの切り替わる時間
});
*/
//});
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

 
