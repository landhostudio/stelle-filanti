//=include ../../bower_components/jquery/dist/jquery.js
//=include ../../bower_components/fastclick/lib/fastclick.js
//=include ../../bower_components/viewport-units-buggyfill/viewport-units-buggyfill.js
window.viewportUnitsBuggyfill.init();

(function($) {

  'use strict';

  var init = function() {
    initHeader();
    if ( $('.hamburger').length ) {
      initHamburger();
    }
    if ( $('.character').length ) {
      initCharacter();
    }
    if ( $('.map').length ) {
      initMap();
    }
    if ( $('.video').length ) {
      initVideo();
    }
    initLog();
  };

  function initHeader() {
    $('.header-toggle-button').click(function() {
      $('.header').toggleClass('header--active');
    });
  };

  function initHamburger() {
    var timesClickedOnion = 0;
    var timesClickedSalad = 0;
    var timesClickedTomato = 0;
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

  function initCharacter() {
    // $('.character').addClass('character--active');
    $('.character').addClass('character--active').delay(3000).queue( function(next) {
      $(this).addClass('character--disabled');
      next();
    });
    $('.header').delay(3000).queue( function(next) {
      $(this).addClass('header--started');
      next();
    });
  };

  function initMap() {
    // dopo l'ordine fammi vedere il contenuto
    $('.map').delay(3500).queue( function(next) {
      $(this).addClass('map--active');
      next();
    });
    $('.map-canvas').delay(3500).queue( function(next) {
      var imageSrc = '/img/map.gif';
      var image = '<img src="'+imageSrc+'" alt="">'
      $(this).append(image);
      $(this).addClass('map-canvas--active');
      next();
    });
    // bisogna sapere quanto dura animazione della mappa
    $('.map-canvas').delay(5000).queue( function(next) {
      $('.map-heading h2').text('Video');
      $(this).addClass('map-canvas--disabled');
      next();
    });
    // in base a questa animazione infinine si farà vedere il video
    $('.map-video').delay(9000).queue( function(next) {
      
      var id = 'int1DQ42Rqo';
      var videoSrc = 'https://www.youtube.com/embed/' + id + '?rel=0&amp;showinfo=0;autoplay=1';
      var iframe = '<iframe src="'+videoSrc+'" frameborder="0" allowfullscreen></iframe>';
      $(this).append(iframe);
      $(this).addClass('map-video--active');

      next();
    });
  };

  function initVideo() {
    var id = 'int1DQ42Rqo';
    var videoSrc = 'https://www.youtube.com/embed/' + id + '?rel=0&amp;showinfo=0;autoplay=1';
    var iframe = '<iframe src="'+videoSrc+'" frameborder="0" allowfullscreen></iframe>';
    $('.video-holder').append(iframe);
  };

  function initLog() {
    console.log('Stelle Filanti');
  };

  init();

})(jQuery);
