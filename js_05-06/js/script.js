'use strict';
//  Домашнее задание JavaScript №05-06
(function () {
    var timer, boardTimer, split, splitP;
    var countTimer;
    var idTimer = 0;
    var elemButton = [];
    var time = [0, 0, 0, 0];// hours, minutes, seconds, milisec;
    
    var elemHtml = { 
        //--------- [tag, class, id]
        divWrapper: ['div', 'wrapper',''], 
        divMain: ['div', 'main',''],
        divCanvas: ['canvas', 'board', 'timer'],
        divButtons: ['div', 'btnClass',''],
        tagButton: ['button', 'btn btn-default','btn-'],
        divFooter: ['footer', 'footer',''],
        divSplit: ['div', 'split', 'split'],
        
        butName: ['start', 'split', 'reset', 'stop'],
        
        htmlMinWidth: '400px',
        htmlWidth: '400px',
        htmlHeight: '100px',
        
        genTag: function (tagAtribut) {
            var tag = document.createElement(tagAtribut[0]);
            tag.className = tagAtribut[1];
            if (tagAtribut[2] > '') {
                tag.id = tagAtribut[2];
            }
            this.appendChild(tag);
            return tag;
        },
    }
    
    function drawHtml() { //tag, class, id
        var wrapper = elemHtml.genTag.call(document.body, elemHtml.divWrapper);
        var main = elemHtml.genTag.call(wrapper, elemHtml.divMain);
        timer = elemHtml.genTag.call(main, elemHtml.divCanvas);
        var buttons = elemHtml.genTag.call(main, elemHtml.divButtons);
        var footer = elemHtml.genTag.call(wrapper, elemHtml.divFooter);
        split = elemHtml.genTag.call(footer, elemHtml.divSplit);
        
        var butCount = elemHtml.butName.length;
        var butAtr = elemHtml.tagButton.slice();
        
        for (var i = 0; i < butCount-1; i++){
            butAtr[1] = butAtr[1] +' ' + elemHtml.butName[i];
            butAtr[2] = butAtr[2] + elemHtml.butName[i];
            
            elemButton[i] = elemHtml.genTag.call(buttons, butAtr);
            elemButton[i].innerHTML = elemHtml.butName[i];
        }
        
        main.setAttribute('min-width', elemHtml.htmlMinWidth);
        main.setAttribute('width', elemHtml.htmlWidth);
    }
    
    function clear() { 
       boardTimer.clearRect(0, 0, timer.width, timer.height);
    }
    
    function atribBoardTimer() {
        boardTimer.save();
        boardTimer.font = '36px Arial';
        boardTimer.fillStyle = '#000';
        boardTimer.textAlign = 'center';
        boardTimer.textBaseline = 'middle';
    }
    
    function drawBoardTimer() {
        clear();
        atribBoardTimer();
        
        for (var i = 0; i < 4; i++){
            boardTimer.fillText('00', (i * 50) + indent + 25, 50);
            boardTimer.fillText(':', ((i+1) * 50) + indent, 50);
        }
        
        boardTimer.clearRect(197 + indent, 0, 5, 100);
        boardTimer.restore();
    }
    
    function startOnClick() {
        //start
        if (elemButton[0].getAttribute('class') === (elemHtml.tagButton[1] + ' ' + elemHtml.butName[0])) {
            clearTimeout(idTimer);
            idTimer = setInterval(drawTimer, 10);
            elemButton[0].className = elemHtml.tagButton[1] + ' ' + elemHtml.butName[3];
            elemButton[0].innerHTML = elemHtml.butName[3];
        //stop
        } else if (elemButton[0].getAttribute('class') === (elemHtml.tagButton[1]  + ' ' + elemHtml.butName[3])) {
            clearTimeout(idTimer);
            elemButton[0].className = (elemHtml.tagButton[1] + ' ' + elemHtml.butName[0]);
            elemButton[0].innerHTML = elemHtml.butName[0];
            splitP = elemHtml.genTag.call(split, 'p', 'p');
            splitP.innerHTML += ('stop: '+ time[0] + ':' + time[1] + ':' + time[2] + ':' + time[3]);
        }
    }
    
    function splitOnClick() {
        splitP = elemHtml.genTag.call(split, 'p', 'p');
        splitP.innerHTML += ('split: '+ time[0] + ':' + time[1] + ':' + time[2] + ':' + time[3]);
    }
    
    function resetOnClick() {
        clearTimeout(idTimer);
        countTimer = 0;
        time = [0, 0, 0, 0];
        elemButton[0].className = (elemHtml.tagButton[1] + ' ' + elemHtml.butName[0]);
        elemButton[0].innerHTML = elemHtml.butName[0];
        drawBoardTimer();
        split.innerHTML = ('');
    }
    
 // main function
    function drawTimer() { 
        clear();
        atribBoardTimer();

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
    
    //main part
    var indent = (parseInt(elemHtml.htmlWidth)-time.length*50)/2;
    countTimer = 0;
    
    drawHtml();
    timer.setAttribute('width', elemHtml.htmlWidth);
    timer.setAttribute('height', elemHtml.htmlHeight);
    boardTimer = timer.getContext('2d');
    drawBoardTimer();
        
    //start - stop
    elemButton[0].onclick = startOnClick;
    
    //split
    elemButton[1].onclick = splitOnClick;
    
    //reset
    elemButton[2].onclick = resetOnClick
        
})();