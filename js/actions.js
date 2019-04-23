"use strict";

/* HEADER */
window.onscroll = function() {stickToTop()};


/*$('#header .container .menu').click(function(){
    console.log('pirmas mano kartas :)');
    console.log('su jumis... :D');   
});*/

/*$('#header .menu').click(function(){openNav()});*/



/*$('#header .menu).click(function() {
    console.log('pirmas mano kartas :)')});*/
/* HERO */



/* CLIENT LOGOS */



/* ABOUT MYSELF */



/* STATISTICS and SERVICE OFFERS */
document.getElementById('statistics_cards').innerHTML = renderCards( statistics );
/* SERVICE OFFERS */
// document.getElementById('offers').innerHTML = renderCards( offers );
$('#offers').html( renderCards( offers ) );

/* SKILLS */
document.getElementById('skills_progress_bars').innerHTML = renderSkills( skills);


/* LATEST WORKS */
document.getElementById('latest_works').innerHTML = renderWorks( works );


/* JOB HISTORY */
document.getElementById('history').innerHTML = renderHistory( jobs);



/* TESTIMONIALS */



/* CONTACT ME */



/* FOOTER */



/* BACk TO TOP */
window.onscroll = function() {scrollFunction()};