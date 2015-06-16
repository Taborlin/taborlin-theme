(function() {
	var triggerBttn = document.getElementById( 'trigger-overlay' ),
		overlay = document.querySelector( 'aside.overlay' ),
		closeBttn = overlay.querySelector( 'button.overlay__close' );
		transEndEventNames = {
			'WebkitTransition': 'webkitTransitionEnd',
			'MozTransition': 'transitionend',
			'OTransition': 'oTransitionEnd',
			'msTransition': 'MSTransitionEnd',
			'transition': 'transitionend'
		},
		transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
		support = { transitions : Modernizr.csstransitions };
		s = Snap( overlay.querySelector( 'svg' ) ),
		path = s.select( 'path' ),
		pathConfig = {
			from : path.attr( 'd' ),
			to : overlay.getAttribute( 'data-path-to' )
		};

	function toggleOverlay() {
		if( classie.has( overlay, 'open' ) ) {
			classie.remove( overlay, 'open' );
			classie.add( overlay, 'close' );
			var select = document.getElementById('select');
				var cl = select.classList;
				if (cl.contains('cs-active')) {
					cl.remove('cs-active');
				}

			var onEndTransitionFn = function( ev ) {
				classie.remove( overlay, 'close' );
			};

			path.animate( { 'path' : pathConfig.from }, 400, mina.linear, onEndTransitionFn );
		}
		else if( !classie.has( overlay, 'close' ) ) {
			classie.add( overlay, 'open' );
			path.animate( { 'path' : pathConfig.to }, 400, mina.linear );
		}
	}

	triggerBttn.addEventListener( 'click', toggleOverlay );
	closeBttn.addEventListener( 'click', toggleOverlay );
})();
