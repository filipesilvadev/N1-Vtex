$(document).ready(function(){

	var isSafari = /constructor/i.test(window.HTMLElement);

	if (isSafari) {
		$('#search').css('-webkit-appearance', 'none');
	}	

	(function SliderN1(){
		var $overview = $('#slide .overview'),
			$viewport = $('#slide .viewPort'),
			$prevBtn = $('#slideController .prev'),
			$nextBtn = $('#slideController .next');

	  	var min = 1;
		var max = $viewport.length;

		$nextBtn.click(function(){
		    if (min+1 > max) return;
		    min++;
		    $($overview).animate({left: "-=100.3%"},1250);
		});

		$prevBtn.click(function(){
		    if (min-1 < 1) return;
		    min--; 
		    $($overview).animate({left: "+=100.3%"},1250);
		});
	})();

	(function JSONnews(){			
		$.getJSON('data.json', function(data){
			var $json = data;

				for (var i = 0; i < $json.length; i++) {
					var id = "#prod_"+[i],
					$article = $(
						'<article class="product" id="prod_'+[i]+'">'+
							'<a href="#">' +
								'<img>' +
							'</a>' +
							'<div class="description">' +
								'<p class="productName"></p>' +
								'<em></em>' +
							'</div>' +
							'<div class="price">' +
								'<span>R$</span>' +
								'<p class="productPrice"></p>' +
							'</div>' +
						'</article>'
					),
					$news = $('.news .wrapper');				
					$news.append($article);

					var name     = $(id + ' .productName'),
						desc     = $(id + ' em'),
						price    = $(id + ' .productPrice'),
						url      = $(id + ' a'),
						img      = $(id + ' img');
					
					name.html($json[i].productName);
		 			desc.html($json[i].productEspecification);
		 			price.html($json[i].productPrice.replace('00',',00'));
		 			url.attr('href', ($json[i].productPrice.replace('/url','#'));
		 			url.attr('href',($json[i].productUrl));
		 			img.attr('src',($json[i].productImagerl));
				};
		});		
	})();
});