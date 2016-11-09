(function($) {

    $.fn.modalWindowShow = function() {
        var $link = this,
            $modal,
            $overlay,
            $body = $('body'),
            result = '.result';

        $link.on('click', showModal);

        function showModal(e){
            e.preventDefault();
            $modal = $('<div class="modalWindow"><h1 class="h1"> Результат прохождения теста: </span> </h1><ul class="result"></ul>');
            $overlay = $('<div class="modalWindow--overlay"></div>');

            $body.append($overlay);
            $body.append($modal);

            templaterAnswer();

            $overlay.on('click', hideModal);
        }

        function hideModal(){
            $modal.hide();
            $overlay.hide();
        }

        function clearLS(){
            localStorage.removeItem('userAnswer');
            localStorage.removeItem('dataTestStart');
        }

        function templaterAnswer(){
            var tempHtmlAnswer = $('#htmlTemplaterAnswer').html(),
                tempDataAnswer = JSON.parse(localStorage.getItem('userAnswer'));
            clearLS();
            
            var tempContentAnswer = tmpl(tempHtmlAnswer, tempDataAnswer);
            $(result).append(tempContentAnswer);
        }

        return this;
    };
})(jQuery);
