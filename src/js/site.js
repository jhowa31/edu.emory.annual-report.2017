// Plain Javascript 

// ANIMATE CSS AND JQUERY VIEWPORT
jQuery(document).ready(function() {
    jQuery('.fade-in-box').addClass("hide-me").viewportChecker({
        classToAdd: 'show-me animated fadeIn',
        offset: 100
       });
});