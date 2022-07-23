(()=>{
	var for3dTimeout;
	var cardsGLobal = document.querySelectorAll(".timer-select");
	var reflection = document.querySelectorAll("#timer-reflection")[0]

	cardsGLobal.forEach(cards => {
		['mousemove','touchmove'].forEach( e => 
			cards.addEventListener(e, function(e) {
				// normalise touch/mouse
				var pos = [e.offsetX,e.offsetY];
				if ( e.type === "touchmove" ) {
					pos = [ e.touches[0].clientX, e.touches[0].clientY ];
				}
				// math for mouse position
				var l = pos[0];
				var t = pos[1];
				var h = this.offsetHeight;
				var w = this.offsetWidth;
				var px = Math.abs(Math.floor(100 / w * l)-100);
				var py = Math.abs(Math.floor(100 / h * t)-100);
				var pa = (50-px)+(50-py);

				// math for gradient / background positions
				var lp = (50+(px - 50)/1);
				var tp = (50+(py - 50)/1);
				var ty = ((tp - 50)/2) * -1;
				var tx = ((lp - 50)/1.5) * .5;
				
				// css to apply for active card
				var tf = `transform: perspective(1000px) rotateX(${(ty*2)}deg) rotateY(${tx*2}deg)`
				
				// set / apply css class and style
				this.style = tf;
				reflection.style = `transform: perspective(1000px) translateY(17px) rotateX(${(ty*2)+50-170}deg) rotateY(${tx/8}deg)`
				if ( e.type === "touchmove" ) {
					return false; 
				}
				clearTimeout(for3dTimeout);
			}, false)
		);
	})
})()

