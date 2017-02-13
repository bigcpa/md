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



// fix block fix content bottom sidebar
// $('#fixblock').scroolly([
// {
// 	to: 'con-bottom = vp-top',
// 	css: {
// 		position: '',
// 		top: ''
// 	}
// },
// {
// 	from: 'el-top = vp-top',
// 	css: {
// 		position: 'fixed',
// 		top: '0'
// 	}
// }
// ], $('.sidebar-content'));

// fix block fix content top sidebar
$('#fixblock').scroolly([
{
	to: 'con-bottom = vp-top',
	css: {
		position: '',
		top: ''
	}
},
{
	from: 'con-bottom = vp-top',
	css: {
		position: 'fixed',
		top: '0'
	}
}
], $('.sidebar-content'));



// pjax
// $(document).pjax('a', '#pjax-container')



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
    $('body,html').animate({scrollTop:0},300);
  });
});



// tabs
(function($) {
$(function() {

  $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });

});
})(jQuery);



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





