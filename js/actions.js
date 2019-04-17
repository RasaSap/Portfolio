"use strict";

/* HEADER */
window.onscroll = function() {stickToTop()};


$('#header .menu').click(function(){
    console.log('pirmas mano kartas :)');
    console.log('su jumis... :D');
    
});


/* HERO */



/* CLIENT LOGOS */



/* ABOUT MYSELF */



/* STATISTICS and SERVICE OFFERS */
document.getElementById('statistics_cards').innerHTML = renderCards( statistics );


/* SKILLS */
document.getElementById('skills_progress_bars').innerHTML = renderSkills( skills);


/* LATEST WORKS */
document.getElementById('latest_works').innerHTML = renderHistory( works );


/* JOB HISTORY */
document.getElementById('history').innerHTML = renderHistory( jobs);

/* SERVICE OFFERS */
document.getElementById('service_cards').innerHTML = renderService( service);

/* TESTIMONIALS */



/* CONTACT ME */



/* FOOTER */



/* BACKT TO TOP */