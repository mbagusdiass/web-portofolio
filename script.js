//$(document).ready(Function(){
	//$(window).scroll(Function(){
//	if(this.scorllY > 20) { 
//	$('.navbar').addClass("sticky")
//	}
//	})
//});
alert("Mohon maaf pak belum selesai dikarenakan jempol tangan saya sakit dan susah untuk ngetik.");
alert("semuanya saya kerjakan dihp dan maaf belum selesai");
alert("susah pak ngetik pake jari telunjuk");

$(document).ready(function() {
  $(window).scroll(function() {
    if(this.scrollY > 20){
       $(`.navbar`).addClass("sticky");
    }else{
         $(`.navbar`).removeClass("sticky");
    }
  });
  
  //toggle menu/navbar
$(`.menu-btn`).click(function() {
  $(`.navbar .menu`).toggleClass("active");
  $(`.menu-btn i`).toggleClass("active");
});

});