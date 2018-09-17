$("document").ready(function(){
$("input").fadeIn(4000);
$(".join").fadeIn(4000);
//$(".container .world .image img").slideDown(3000);
/*
$(window).on("resize",function(){
$("#slider1").innerHeight($(window).innerHeight());
*/
$(window).on("scroll",function(){
    var sc=$(window).scrollTop(),
    getoffset=$(".get").offset().top,
    photob=$(".background").offset().top;
    if(sc>=getoffset-500){
        $(".get,#slider2").animate({
            opacity:1
        },3000)
    }
    if(sc>=4200){
        $(".when,.girl").animate({
            opacity:1
        },3000);
    }
    if(sc>=photob-300){
       
        $(".photo2").animate({
            opacity:1
           },2000);
           $(".photo3").animate({
            opacity:1
           },2000);
           $(".photo4").animate({
            opacity:1
           },2000);
          
    }
    if(sc>=photob+100){
        $(".photo5").animate({
            opacity:1
           },2000);
           $(".photo1").animate({
            opacity:1
           },2000);
    }

});
$(".tip button").click(function(){
    $("iframe").css("display","block");
    $(".workout").css("marginTop","20px");
    $(".tip button").css("display","none");
});

});