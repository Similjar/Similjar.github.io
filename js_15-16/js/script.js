'use strict';


$(function() {
    
    var request = new XMLHttpRequest;
    
    function getjson (word, counter) {
        request.open ('GET', 'https://api.riffsy.com/v1/search?key=LIVDSRZULELA&tag='+ word +'&limit='+counter, true);
        request.onreadystatechange = function() {
            //console.log('status, readyState:', request.status, request.readyState);
            if (request.status === 200 && request.readyState === 4) {
                var resText = JSON.parse(request.responseText);
                for (var i = 0; i < counter; i++) {
                    var imgSrc = resText.results[i].url;
                    $('.image').append('<img src="'+ imgSrc +'">');
                }
            } else if (request.status !== 200) {
                console.log('false');
            }
        }
        request.send();
    }
    
    //console.log(request);
    $('.mbtn').on('click', function(){
        $('.image img').remove();
        var inputValue = $('.text-filed').val();
        getjson(inputValue, 8);
    });
    getjson();
    
    function Human() {
        this.name = 'Vasja';
        this.sex = 'M';
        this.length = '185cm';
        this.weight = '95kg';
    }
    var newHuman = new Human();
    
    function Worker(job, pay) {
        this.job = job;
        this.pay = pay;
        this.work = function() {
            console.log(this.name + ' ' + this.sex + ' ' + this.job + ' ' + this.pay + ' - работает');
        }
    }
    Worker.prototype = newHuman;
    var manager = new Worker('manager','500$');
    var cleaner = new Worker('cleaner','100$');
    var teacher = new Worker('teacher','300$');
    

    function Student(studies, grant) {
        this.studies = studies;
        this.grant = grant;
        this.work = function() {
            console.log(this.name + ' ' + this.sex + ' ' + this.studies + ' ' + this.grant + ' - смотрит сериалы');
        }
    }
    Student.prototype = newHuman;
    var student1 = new Student('management studies','50$');
    var student2 = new Student('religious studies','50$');
    var student3 = new Student('painting studies','50$');
 
    manager.work();
    cleaner.work();
    teacher.work();
    student1.work();
    student2.work();
    student3.work();
  
});