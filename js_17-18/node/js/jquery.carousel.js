(function($) {
    
    $.fn.carousel = function() {
   
    var leftUIEl = $('.carousel-arrow-left');
    var rightUIEl = $('.carousel-arrow-right');
    var elementsList = $('.carousel-list');
 
    var pixelsOffset = 250;
    var currentLeftValue = 0;
    var elementsCount = elementsList.find('li').length;
    var minimumOffset = - ((elementsCount - 2) * pixelsOffset);
    var maximumOffset = 0;
    
    leftUIEl.click(function() { 
        if (currentLeftValue != maximumOffset) {
            currentLeftValue += 250;
            elementsList.animate({ left: currentLeftValue}, 500);
        } else {
            elementsList.animate({ 
                left: 250
            }, 500);
            elementsList.animate({ 
                left: 0,
            }, 100);
        }       
    });
 
    rightUIEl.click(function() {
        if (currentLeftValue != minimumOffset) {
            currentLeftValue -= 250;
            elementsList.animate({ left : currentLeftValue}, 500);
        } else {
            elementsList.animate({ 
                left: currentLeftValue - 250,
            }, 500);
            elementsList.animate({ 
                left: currentLeftValue,
            }, 100);
        }        
    });
    }
})(jQuery);