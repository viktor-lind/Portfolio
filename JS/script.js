
var mq = window.matchMedia( "(min-width: 300px)" );


$( document ).ready(function() {
  window.sr = ScrollReveal();
  sr.reveal('.showGoal', {duration: 3000, mobile: true });
    var reSlideIndex = 0;
    var oneSlideIndex = 0;
    var roSlideIndex = 0;
    var kronoxSlideIndex = 0;
    //oneSlideShow();
    reSlideShow();
    //roSlideShow();
    //kronoxSlideShow();

function reSlideShow() {
    var x = document.getElementsByClassName("my-slides");
    for (var i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
          
        
    }
    var y = document.getElementsByClassName("my-slides2");
    for (var i = 0; i < y.length; i++){
        y[i].style.display = "none";
    }
    var z = document.getElementsByClassName("my-slides3");
    for (var i = 0; i < z.length; i++){
        z[i].style.display = "none";
    }
    var a = document.getElementsByClassName("my-slides4");
    for (var i = 0; i < a.length; i++){
        a[i].style.display = "none";
    }
    reSlideIndex++;
    oneSlideIndex++;
    roSlideIndex++;
    kronoxSlideIndex++;
    if (reSlideIndex > x.length) {reSlideIndex = 1}
    if(oneSlideIndex > y.length) {oneSlideIndex = 1}
    if(roSlideIndex > z.length) {roSlideIndex = 1}
    if(kronoxSlideIndex > a.length) {kronoxSlideIndex = 1}
    y[oneSlideIndex-1].style.display = "block";
    x[reSlideIndex-1].style.display = "block";
    z[roSlideIndex-1].style.display = "block"; 
    a[kronoxSlideIndex-1].style.display = "block"; 
    setTimeout(reSlideShow, 2000);
}

/*function oneSlideShow() {
    var i;
    var x = document.getElementsByClassName("my-slides2");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    oneSlideIndex++;
    if (oneSlideIndex > x.length) {oneSlideIndex = 1} 
    x[oneSlideIndex-1].style.display = "block"; 
    setTimeout(oneSlideShow, 3000);
}

function roSlideShow() {
    var i;
    var x = document.getElementsByClassName("my-slides3");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    roSlideIndex++;
    if (roSlideIndex > x.length) {roSlideIndex = 1} 
    x[roSlideIndex-1].style.display = "block"; 
    setTimeout(roSlideShow, 2500);
}
    
function kronoxSlideShow() {
    var i;
    var x = document.getElementsByClassName("my-slides4");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    kronoxSlideIndex++;
    if (kronoxSlideIndex > x.length) {kronoxSlideIndex = 1} 
    x[kronoxSlideIndex-1].style.display = "block"; 
    setTimeout(kronoxSlideShow, 2500);
}*/
  $(window).scroll(function(){

    $('.background').css("opacity", 0.2 + $(window).scrollTop() / 950);
    var bottom = $('.sections').offset().top;
        
      if ($(this).scrollTop() > bottom - 30){ 
        $('.contactLogo').css('color', "black");
        $('.logo').css('opacity', "1");
    }
    else{
        $('.contactLogo').css('color', "white");
        $('.logo').css('opacity', "0");
    }

      if (mq.matches) {
  // window width is at least 500px
      $(".emptyCont").css("top", 0 - $(window).scrollTop() / 30 + "vw");
      }
      else{
          $(".logo").css("top", 12 -  $(window).scrollTop() / 80 + "em");

      }
  });

$('.logo').click(function(){
  $(window).scrollTop($('.project').offset().top);
});


});
