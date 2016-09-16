'use strict';
//alert('Домашнее задание JavaScript №03');
(function () {
    var timer, boardTimer, split;
    var countTimer;
    var idTimer = 0;
    var but = [];
    var time = [0, 0, 0, 0];// hours, minutes, seconds, milisec;
        
    var width = '400px';
    var indent = (parseInt(width)-time.length*50)/2;
    var height = '100px';
       
    drawHtml();
    timer.setAttribute('width', width);
    timer.setAttribute('height', height);
    boardTimer = timer.getContext('2d');
    
    drowBoardTimer();
    countTimer = 0;
   
    but[0].onclick = function() {
        if (but[0].getAttribute('class') === 'btn btn-default start') {
            clearTimeout(idTimer);
            idTimer = setInterval(drowTimer, 10);
            console.log (idTimer);
            but[0].className = 'btn btn-default stop';
            but[0].innerHTML = 'stop';
        } else if (but[0].getAttribute('class') === 'btn btn-default stop') {
            clearTimeout(idTimer);
            console.log (idTimer);
            but[0].className = 'btn btn-default start';
            but[0].innerHTML = 'start';
        }
    }
    
    but[1].onclick = function() {
        var splitP = genTag.call(split, 'p', 'p');
        splitP.innerHTML += ('split: '+ time[0] + ':' + time[1] + ':' + time[2] + ':' + time[3]);
    }
    
    but[2].onclick = function() {
        clearTimeout(idTimer);
        countTimer = 0;
        time = [0, 0, 0, 0];
        but[0].className = 'btn btn-default start';
        but[0].innerHTML = 'start';
        drowBoardTimer();
    }
    
        
    function genTag(tagName, tagClass, tagId) {
        var tag = document.createElement(tagName);
        tag.className = tagClass;
        if (tagId > '') {
            tag.id = tagId;
        }
        this.appendChild(tag);
        return tag;
    }
    
    function drawHtml() { //tag, class, id
        var wrapper = genTag.call(document.body, 'div', 'wrapper');
        var main = genTag.call(wrapper, 'div', 'main');
        timer = genTag.call(main, 'canvas', 'board', 'timer');
        var battons = genTag.call(main, 'div', 'btnClass');
        var footer = genTag.call(wrapper, 'footer', 'footer');
        split = genTag.call(footer, 'div', 'split', 'split');
        
        var butName = ['start', 'split', 'reset'];
        var butCount = butName.length;
        for (var i = 0; i < butCount; i++){
            but[i] = genTag.call(battons, 'button', 'btn btn-default ' + butName[i], 'but'+butName[i]); 
            but[i].innerHTML = butName[i];
        }
        main.setAttribute('min-width', '400px');
        main.setAttribute('width', '400px');
   }
    
    function clear() { 
        boardTimer.clearRect(0, 0, timer.width, timer.height);
    }
    
    function drowBoardTimer(){
        clear();
        boardTimer.save();
        boardTimer.font = '36px Arial';
        boardTimer.fillStyle = '#000';
        boardTimer.textAlign = 'center';
        boardTimer.textBaseline = 'middle';
        
        for (var i = 0; i < 4; i++){
            boardTimer.fillText('00', (i * 50) + indent + 25, 50);
            boardTimer.fillText(':', ((i+1) * 50) + indent, 50);
        }
        boardTimer.clearRect(197 + indent, 0, 5, 100);
        boardTimer.restore();
    }
    
 // Основная функция
    function drowTimer() { 
        clear();
        boardTimer.save();
        boardTimer.font = '36px Arial';
        boardTimer.fillStyle = '#000';
        boardTimer.textAlign = 'center';
        boardTimer.textBaseline = 'middle';

        time[0] = Math.floor(countTimer / 3600000) % 24;
        var hourRest = countTimer % 3600000;
        time[1] = Math.floor(hourRest / 60000);
        var minRest = hourRest % 60000;
        time[2] = Math.floor(minRest / 1000);
        time[3] = (countTimer % 1000)/10;
        
        for (var i = 0; i < 4; i++){
            if (time[i] > 9) {
                boardTimer.fillText(time[i], (i * 50) + indent + 25, 50);
            } else {
                boardTimer.fillText('0' + time[i], (i * 50) + indent + 25, 50);
            }
            boardTimer.fillText(':', ((i + 1) * 50) + indent, 50);
        }
        boardTimer.clearRect(197 + indent, 0, 5, 100);
        boardTimer.restore();
        countTimer += 10;
    }
    

})();