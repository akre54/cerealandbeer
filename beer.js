$(function() {

  // Generate random header title 
  // description and sidebar link
  
  var titles = [
    'Amalgamated Musings',
    'Sound Unwound',
    'Adam K',
    'Cotija Ergo Sum',
    'The Wavpool',
    'Ars Symphonica',
    'Sonic Blend',
    'Highbrow / Lowbrow'
  ];

  var links = [
    "http://butdoesitfloat.com/",
    "http://www.todayandtomorrow.net/",
    "http://blueballfixed.ytmnd.com/",
    "http://www.whatthefuckshouldimakefordinner.com/index.php",
    "http://2d3d5d.com/work/Tuned-Pale-Ale#http://upl1nk.com/media/images/mattbraun/TunedBlowingWeb.jpg",
    "http://durch-bruch.blogspot.com/",
    "http://www.benjoffe.com/code/games/torus/",
    "http://www.deliciousmeliscious.com/2009/08/cheesecake-stuffed-strawberries.html",
    "http://vimeo.com/14782834",
    "http://www.secretgeek.net/dod_intro.asp",
    "http://www.ignant.de/",
    "http://www.youtube.com/user/jcl5m",
    "http://www.catrinhedstrom.com",
    "http://archive.davidkamp.de/",
    "http://traer.cc/"
 ];
     
  var descs = [
    "I collect things. Sometimes I write them down",
    "everything and more",
    "live, musically"
  ];

  var rand = function(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  /* presto change-o */
  var changeText = function(div, arr) {
     $(div).fadeOut('slow', function() {
       $(div).text(rand(arr)).show();
     });
  }

  setInterval(function() {
    changeText("#blog_title", titles);
    changeText("#desc", descs);
  }, 30000);

  $("#sidebar_link").attr("href", rand(links)).show();




/*
  $(".audio img").mouseover(function () {
    $(.audio #info).show();
  });
*/



/////////////////////////////////////////////
// Pagination
/////////////////////////////////////////////

$('body').on('click', 'a#prev', function(event) {
  event.preventDefault();
  $.get( $(event.target).attr('href'), function(data) {
    var content = $(data).find('#content').html();
    $('#pagination').remove();
    $('#content').append(content);
    $('a#next').remove();
  });
});



/////////////////////////////////////////////
// Header fun
///////////////////////////////////////////// 

  var colors = ["#EA0", "#369", "#C00"];
  var cIndex = 0;

  var $rollup = $('#rollup'), $links = $rollup.find('ul');
  $rollup.hover(function() {
    cIndex = (cIndex == colors.length - 1) ? 0 : cIndex + 1;
    $rollup.stop().animate({height: "75px", backgroundColor: colors[cIndex] }, {queue: false, duration: 400, complete: function() {
      $links.fadeIn('1000');
    }});
    
  }, function() {
    $rollup.stop().animate({height: '26px'}, {queue: false, duration: 400, complete: function() {
      $links.hide();
    }});
  });


  var $colophon = $('#colophon'), $coloH4 = $colophon.find('h4');
  $colophon.one("mouseover", function() {
    $colophon.animate({color: "#808080"}, {queue: false, duration: 600});
    $coloH4.animate({color: "#75A6DE"}, {queue: false, duration: 600});
  });

});

/////////////////////////////////////////////
// GA
/////////////////////////////////////////////


  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-32959835-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
