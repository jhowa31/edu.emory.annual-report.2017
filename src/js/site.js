// Plain Javascript 

// ANIMATE CSS AND JQUERY VIEWPORT
(function($){
    if(!$){
        return;
    }
    
    $(document).ready(function() {
        $('.fade-in-box').addClass("hide-me").viewportChecker({
            classToAdd: 'show-me animated fadeIn',
            offset: 100
        });
        $('body').scrollspy({ 
            target: '#navbarSupportedContentSections', 
            offset: 56 
        });
    });
})(jQuery);