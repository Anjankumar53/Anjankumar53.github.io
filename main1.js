//smooth scroll//
$('#view-work').on('click',function(){
    const img= $('#images').position().top;

    $('html,body').animate({
        scrollTop:img;
    },1000ms);
});