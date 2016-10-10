'use strict';
//  Домашнее задание JavaScript №07-08

$(function() {
    carousel();
    
    $("select").selectbox();
    
    $(".check--js").each(changeCheckStart);
    $('.check--js').on("mousedown", changeCheck);
    $('.check--js').hover(changeCheckHoverEnter, changeCheckHoverLeave);
    $('.labelcheck--js').on("mousedown", 'span', changeCheck);
    $('.submenu--menu').on("mouseenter", dropdownShow);
    $('.submenu--menu').on("mouseleave", dropdownHide);
      
    function dropdownShow(){
       // e.preventDefault();
       var $dropElement = $(this).children("ul");
       $dropElement.animate({
            height: "show",
            opacity: "show", 
            }, 400);
        $dropElement.animate({ 
            backgroundColor: "rgb(225,225,225)",
            }, 400);
    } 
    
    function dropdownHide(){
        var $dropElement = $(this).children("ul");
        $dropElement.animate({
            height: "hide",
            opacity: "hide",    
            }, 400);
        
    }   
          
   function changeCheck(el) {
        var $input = $(this).find("input").eq(0);
        if (!$input.attr("disabled")){
            if(!$input.attr("checked")) {
                $(this).css("background-position","0 -17px");	
                $input.attr("checked", true);
            } else {
                $(this).css("background-position","0 0");
                $input.attr("checked", false);
            }
        }
         
        return true;
    }
    
    function changeCheckHoverEnter() {
        var $input = $(this).find("input").eq(0);
        if (!$input.attr("disabled")){
            if($input.attr("checked")) {
                $(this).css("background-position","0 -51px");
            } else {
                $(this).css("background-position","0 -34px");
            }
        }
        return true;
    }

    function changeCheckHoverLeave() {
        var $input = $(this).find("input").eq(0);
        if (!$input.attr("disabled")){
            if($input.attr("checked")) {
                $(this).css("background-position","0 -17px");	
            } else {
                $(this).css("background-position","0 0");
            }
        }
        return true;
    }
    
    function changeCheckStart(){
        var $input = $(this).find("input").eq(0);
        if($input.attr("checked")) {
            $(this).css("background-position","0 -17px");
            if($input.attr("disabled")) {
                $(this).css("background-position","0 -68px");	
            }
        } else {
            if($input.attr("disabled")) {
            $(this).css("background-position","0 -85px");	
            }
        }
        return true;
    }
    
    function carousel(){
        $(".owl-carousel").owlCarousel({
            //
            loop: true,
            margin: 0,
            padding: 10,
            navigation : true,
            slideSpeed : 300,
            paginationSpeed : 400,
    
            items : 2,
      
            responsive: true,
   
            mouseDrag : true,
            touchDrag : true,

        });
       
    }

});

