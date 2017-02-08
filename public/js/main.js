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

// scrolljump

window.onload = function() { // после загрузки страницы

	var scrollUp = document.getElementById('scrollup'); // найти элемент

	scrollUp.onmouseover = function() { // добавить прозрачность
		scrollUp.style.opacity=1;
		scrollUp.style.filter  = 'alpha(opacity=100)';
	};

	scrollUp.onmouseout = function() { //убрать прозрачность
		scrollUp.style.opacity = 0.3;
		scrollUp.style.filter  = 'alpha(opacity=30)';
	};

	scrollUp.onclick = function() { //обработка клика
		window.scrollTo(0,0);
	};

// show button

	window.onscroll = function () { // при скролле показывать и прятать блок
		if ( window.pageYOffset > 0 ) {
			scrollUp.style.display = 'block';
		} else {
			scrollUp.style.display = 'none';
		}
	};
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

// chatra settings
window.ChatraSetup = {
    colors: {
        buttonText: '#f0f0f0',
        buttonBg: '#9a9a9a'
    }
};








