$(document).ready(function(){
  $(window).scroLL(function(){
    if(this.scroLLY > 20){
      $(".navBar").addClass("sticky");
    }else {
      $(".navBar").removeClass("sticky");
    }
  });
//   toggle menu/navBar script
$('.menu-btn').click(function(){
    $('.navBar .menu').toggleClass("active")
});
});
