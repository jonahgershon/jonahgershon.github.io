console.log("top of page")
 
console.log("load external html");
 
//$(document).ready(function(){
//    $("#footer-placeholder").load("assets/footer.html");
//    console.log("nav load");
//}); 
 
//$(document).ready(function(){
   // $("#nav-placeholder").load("assets/nav.html");
   // console.log("nav load");
//});
function disableScroll() {
    console.log("disable scroll");
    document.body.style.overflow = 'hidden';
    document.querySelector('html').scrollTop = window.scrollY;
}
function enableScroll() {
    console.log("enable scroll");
    document.body.style.overflow = null;
}
 
 
//$('#nav-placeholder').load('assets/nav.html', function() {
 
 
    const ham = document.getElementById('ham');
    var nlinks = document.getElementById('nlinks');
    var navstate = true;
    var firstclick = true;
    console.log("ham = "+ham);
 
    ham.addEventListener('click', () => {
        console.log("ham EL");
        if (firstclick) {
            nlinks.classList.add('nav-on');
            firstclick = false
            ham.classList.toggle('burg-on')
            disableScroll();
        } else{
            if (navstate == false) {
                //nav-on
                nlinks.classList.add('nav-on');
                nlinks.classList.remove('nav-off');
                disableScroll();
                navstate = true;
                ham.classList.toggle('burg-on');
                ham.classList.toggle('burg-off');
        
            } else{
                //nav-off
                nlinks.classList.remove('nav-on');
                nlinks.classList.add('nav-off');
                enableScroll();
                navstate = false;
                ham.classList.toggle('burg-off');
                ham.classList.toggle('burg-on');
        
            }
        }
    });
 
 
    var width = 0;
    $(window).resize(function() {
    width = $(window).width();
    $("#status").text(width);
    console.log(width);
    if (width>900 && navstate && !(firstclick)){
        nlinks.classList.remove('nav-on');
        nlinks.classList.add('nav-off');
        enableScroll();
        navstate = false;
        ham.classList.toggle('burg-off');
        ham.classList.toggle('burg-on');
    }
    });
 
    console.log("end of page")
//});