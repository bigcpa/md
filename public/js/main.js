// sidebar-toggle
(function(document) {
	var toggle = document.querySelector('.sidebar-toggle');
	var sidebar = document.querySelector('#sidebar');
	var checkbox = document.querySelector('#sidebar-checkbox');

	document.addEventListener('click', function(e) {
		var target = e.target;

		if(!checkbox.checked ||
			sidebar.contains(target) ||
			(target === checkbox || target === toggle)) return;

			checkbox.checked = false;
	}, false);
})(document);

// fix block
function getTopOffset(e) { 
	var y = 0;
	do { y += e.offsetTop; } while (e = e.offsetParent);
	return y;
}
var block = document.getElementById('fixblock'); /* fixblock - значение атрибута id блока */
if ( null != block ) {
	var topPos = getTopOffset( block );

	window.onscroll = function() {
		var scrollHeight = Math.max( document.documentElement.scrollHeight, document.documentElement.clientHeight),

		    // определяем высоту рекламного блока
		    blockHeight = block.offsetHeight,

		    // вычисляем высоту подвала, footer заменить на значение атрибута id подвала
		    footerHeight = document.getElementById('footer').offsetHeight, 	    

		    // считаем позицию, до которой блок будет зафиксирован 
		    stopPos = scrollHeight - blockHeight - footerHeight; 

		var newcss = (topPos < window.pageYOffset) ? 
			'top:20px; position: fixed;' : 'position:static;';

		if ( window.pageYOffset > stopPos ) 
			newcss = 'position:static;';

		block.setAttribute( 'style', newcss );
	}
}

// scrolljump
$(function() { 
  $(window).scroll(function() {
    if($(this).scrollTop() != 0) {
      $('#scrollup').fadeIn();
    } else {
      $('#scrollup').fadeOut();
    }
  });
  $('#scrollup').click(function() {
    $('body,html').animate({scrollTop:0},400);
  });
});


// chatra settings
window.ChatraSetup = {
    colors: {
        buttonText: '#f0f0f0',
        buttonBg: '#4285f4'
    }
};
// chatra
(function(d, w, c) {
  w.ChatraID = 'dN3Chbwxiyss8DSKz';
  var s = d.createElement('script');
  w[c] = w[c] || function() {
    (w[c].q = w[c].q || []).push(arguments);
  };
  s.async = true;
  s.src = (d.location.protocol === 'https:' ? 'https:': 'http:')
  + '//call.chatra.io/chatra.js';
  if (d.head) d.head.appendChild(s);
})(document, window, 'Chatra');


// // disqus_loaded scroll
window.onscroll = function(e) {
    if ((window.innerHeight + window.scrollY) 
        >= document.body.offsetHeight) 
    {
        if (!disqus_loaded) disqus(); 
    }
};
// disqus_loaded click
// window.onscroll = function(e) {
//     if ((window.innerHeight + window.scrollY) 
//         >= document.body.offsetHeight) 
//     {
//         if (disqus_loaded==false){ load_disqus() };
//     }
// };





