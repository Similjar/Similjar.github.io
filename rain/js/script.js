'use strict';
$(function() {
  var countField = $('.count'),
      speedField = $('.speed'),
      count = 0,
      start = '.StartButton',
      stop = '.StopButton',
      field = 'main',
      squareClass = 'square',
      speedUp = 10,
      speedInUp = speedUp,
      timerId = 0,
      squares = [],
      squareSide = 30,
      heightOfField = $('main').height() - squareSide,
      widthOfField = $('main').width() - squareSide;


  function startOnClick() {
    clear();
    var sqTimeOutId = setTimeout(function tick() {
      var sqTimeOut = 1000 * Math.random() * (speedInUp / 2);
      drowSquare();
      squares.push(sqTimeOutId);
      sqTimeOutId = setTimeout(tick, sqTimeOut);
    }, 1000);
  }

  function stopOnClick() {
    clearInterval(timerId);
    for (var i = 0; i < squares.length; i++){
      clearTimeout(squares[i]);
    }
    clear();
  }

  function drowSquare() {
    var random = Math.random(),
        elem = {
          speed: speedInUp * heightOfField / Math.random(),
          y: widthOfField * Math.random(),
          color: '#' + Math.round(0xfff * Math.random()).toString(16),
        },
        newsquare = createNewSquare(elem);

    move.call(newsquare, elem.speed);
    return;
  }

  function createNewSquare(elem) {
    var squareNumber = squares.length;

    $(field).append("<div class='" + squareClass + " " + squareNumber + "'></div>");
    var newsquare = $('.' + squareNumber);

    newsquare.css({
      "top": "0",
      "left": elem.y + "px",
      "background-color": elem.color,
    });

    return newsquare;
  }

  function squareClick() {
    count++;
    insertCount(count);
    $(this).remove();
    goToSpeedUp();
  }

  function goToSpeedUp() {
    if (count%speedUp === 0) {
      speedInUp--;
      insertSpeed(speedUp - speedInUp);
    }
  }

  function move(speed) {
    $(this).animate({
      top: '+=' + heightOfField
    }, speed);
    $(this).fadeOut(300);
  }

  function insertCount(countIn) {
    if (countIn < 10) {countField.text('0' + countIn);}
    else {countField.text('' + countIn);}
  }
  function insertSpeed(speedIn) {
    speedField.text('' + speedIn);
  }

  function clear() {
    count = 0;
    insertCount(count);
    $(field).empty();
    insertSpeed(0);
  }

  $(field).on('click', '.square', function () {
    var currentSquare = $(this);
    squareClick.call(currentSquare);
  });
  $(start).on('click', startOnClick);
  $(stop).on('click', stopOnClick);

});
