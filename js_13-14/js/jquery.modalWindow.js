(function($) {

    $.fn.modalWindowShow = function() {
        var $link = this;
        var $modal;
        var $overlay;

        $link.on('click', showModal);

        function showModal(e){
            e.preventDefault();
            $modal = $('<div class="modalWindow"><h1 class="h1"> Результат прохождения теста: </span> </h1><ul class="result"></ul>');
            $overlay = $('<div class="modalWindow--overlay"></div>');

            $('body').append($overlay);
            $('body').append($modal);

            templaterAnswer();

            $overlay.on('click', hideModal);
        }

        function hideModal(){
            $modal.hide();
            $overlay.hide();
            localStorage.removeItem('result');
            localStorage.removeItem('userAnswer');
            localStorage.removeItem('dataTestStart');
          //  localStorage.clear();
        }

        function templaterAnswer(){
            var tempHtmlAnswer = $('#htmlTemplaterAnswer').html();
            var tempDataAnswer = JSON.parse(localStorage.getItem('result'));

            var tempContentAnswer = tmpl(tempHtmlAnswer, tempDataAnswer);
            $('.result').append(tempContentAnswer);
        }

        return this;
    };
})(jQuery);
