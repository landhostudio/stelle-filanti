//=include ../../bower_components/jquery/dist/jquery.js
//=include ../../bower_components/fastclick/lib/fastclick.js

(function($) {

  'use strict';

  var init = function() {
    if ( $('.hamburger').length ) {
      initHamburger();
    }
    initLog();
  };

  function initHamburger() {
    var timesClickedOnion = 0;
    var timesClickedTomato = 0;
    var timesClickedSalad = 0;
    var timesClickedSauce = 0;
    var timesClickedCheese = 0;
    var timesClickedMeat = 0;
    $('.hamburger-ingredients-button--onion').bind( 'click', function( event ) {
      timesClickedOnion++;
      if ( timesClickedOnion == 1 ) {
        $('.hamburger-ingredient--onion-2').addClass('hamburger-ingredient--onion--active');
        console.log('added second onion');
      } else if ( timesClickedOnion == 2 ) {
        $('.hamburger-ingredient--onion-3').addClass('hamburger-ingredient--onion--active');
        console.log('added third onion');
      } else if ( timesClickedOnion == 3 ) {
        $('.hamburger-ingredient--onion-1').removeClass('hamburger-ingredient--onion--active');
        $('.hamburger-ingredient--onion-2').removeClass('hamburger-ingredient--onion--active');
        $('.hamburger-ingredient--onion-3').removeClass('hamburger-ingredient--onion--active');
        $('.hamburger-scene-onions').addClass('hamburger-scene-onions--empty');
        console.log('removed all onions');
      } else if ( timesClickedOnion == 4 ) {
        timesClickedOnion = 0;
        $('.hamburger-ingredient--onion-1').addClass('hamburger-ingredient--onion--active');
        $('.hamburger-scene-onions').removeClass('hamburger-scene-onions--empty');
        console.log('added first onion');
      }
    });
    $('.hamburger-ingredients-button--tomato').bind( 'click', function( event ) {
      timesClickedTomato++;
      if ( timesClickedTomato == 1 ) {
        $('.hamburger-ingredient--tomato-2').addClass('hamburger-ingredient--tomato--active');
        console.log('added second tomato');
      } else if ( timesClickedTomato == 2 ) {
        $('.hamburger-ingredient--tomato-3').addClass('hamburger-ingredient--tomato--active');
        console.log('added third tomato');
      } else if ( timesClickedTomato == 3 ) {
        $('.hamburger-ingredient--tomato-1').removeClass('hamburger-ingredient--tomato--active');
        $('.hamburger-ingredient--tomato-2').removeClass('hamburger-ingredient--tomato--active');
        $('.hamburger-ingredient--tomato-3').removeClass('hamburger-ingredient--tomato--active');
        $('.hamburger-scene-tomatos').addClass('hamburger-scene-tomatos--empty');
        console.log('removed all tomatos');
      } else if ( timesClickedTomato == 4 ) {
        timesClickedTomato = 0;
        $('.hamburger-ingredient--tomato-1').addClass('hamburger-ingredient--tomato--active');
        $('.hamburger-scene-tomatos').removeClass('hamburger-scene-tomatos--empty');
        console.log('added first tomato');
      }
    });
    $('.hamburger-ingredients-button--salad').bind( 'click', function( event ) {
      timesClickedSalad++;
      if ( timesClickedSalad == 1 ) {
        $('.hamburger-ingredient--salad-2').addClass('hamburger-ingredient--salad--active');
        console.log('added second salad');
      } else if ( timesClickedSalad == 2 ) {
        $('.hamburger-ingredient--salad-3').addClass('hamburger-ingredient--salad--active');
        console.log('added third salad');
      } else if ( timesClickedSalad == 3 ) {
        $('.hamburger-ingredient--salad-1').removeClass('hamburger-ingredient--salad--active');
        $('.hamburger-ingredient--salad-2').removeClass('hamburger-ingredient--salad--active');
        $('.hamburger-ingredient--salad-3').removeClass('hamburger-ingredient--salad--active');
        $('.hamburger-scene-salads').addClass('hamburger-scene-salads--empty');
        console.log('removed all salads');
      } else if ( timesClickedSalad == 4 ) {
        timesClickedSalad = 0;
        $('.hamburger-ingredient--salad-1').addClass('hamburger-ingredient--salad--active');
        $('.hamburger-scene-salads').removeClass('hamburger-scene-salads--empty');
        console.log('added first salad');
      }
    });
    $('.hamburger-ingredients-button--sauce').bind( 'click', function( event ) {
      timesClickedSauce++;
      if ( timesClickedSauce == 1 ) {
        $('.hamburger-ingredient--sauce-2').addClass('hamburger-ingredient--sauce--active');
        console.log('added second sauce');
      } else if ( timesClickedSauce == 2 ) {
        $('.hamburger-ingredient--sauce-3').addClass('hamburger-ingredient--sauce--active');
        console.log('added third sauce');
      } else if ( timesClickedSauce == 3 ) {
        $('.hamburger-ingredient--sauce-1').removeClass('hamburger-ingredient--sauce--active');
        $('.hamburger-ingredient--sauce-2').removeClass('hamburger-ingredient--sauce--active');
        $('.hamburger-ingredient--sauce-3').removeClass('hamburger-ingredient--sauce--active');
        $('.hamburger-scene-sauces').addClass('hamburger-scene-sauces--empty');
        console.log('removed all sauces');
      } else if ( timesClickedSauce == 4 ) {
        timesClickedSauce = 0;
        $('.hamburger-ingredient--sauce-1').addClass('hamburger-ingredient--sauce--active');
        $('.hamburger-scene-sauces').removeClass('hamburger-scene-sauces--empty');
        console.log('added first sauce');
      }
    });
    $('.hamburger-ingredients-button--cheese').bind( 'click', function( event ) {
      timesClickedCheese++;
      if ( timesClickedCheese == 1 ) {
        $('.hamburger-ingredient--cheese-2').addClass('hamburger-ingredient--cheese--active');
        console.log('added second cheese');
      } else if ( timesClickedCheese == 2 ) {
        $('.hamburger-ingredient--cheese-3').addClass('hamburger-ingredient--cheese--active');
        console.log('added third cheese');
      } else if ( timesClickedCheese == 3 ) {
        $('.hamburger-ingredient--cheese-1').removeClass('hamburger-ingredient--cheese--active');
        $('.hamburger-ingredient--cheese-2').removeClass('hamburger-ingredient--cheese--active');
        $('.hamburger-ingredient--cheese-3').removeClass('hamburger-ingredient--cheese--active');
        $('.hamburger-scene-cheeses').addClass('hamburger-scene-cheeses--empty');
        console.log('removed all cheeses');
      } else if ( timesClickedCheese == 4 ) {
        timesClickedCheese = 0;
        $('.hamburger-ingredient--cheese-1').addClass('hamburger-ingredient--cheese--active');
        $('.hamburger-scene-cheeses').removeClass('hamburger-scene-cheeses--empty');
        console.log('added first cheese');
      }
    });
    $('.hamburger-ingredients-button--meat').bind( 'click', function( event ) {
      timesClickedMeat++;
      if ( timesClickedMeat == 1 ) {
        $('.hamburger-ingredient--meat-2').addClass('hamburger-ingredient--meat--active');
        console.log('added second meat');
      } else if ( timesClickedMeat == 2 ) {
        $('.hamburger-ingredient--meat-3').addClass('hamburger-ingredient--meat--active');
        console.log('added third meat');
      } else if ( timesClickedMeat == 3 ) {
        timesClickedMeat = 0;
        $('.hamburger-ingredient--meat-2').removeClass('hamburger-ingredient--meat--active');
        $('.hamburger-ingredient--meat-3').removeClass('hamburger-ingredient--meat--active');
        console.log('removed two meats');
      }
    });
  };

  function initLog() {
    console.log('Stelle Filanti');
  };

  init();

})(jQuery);
