$.ajaxSetup ({
	cache: false
});


function normalFont(){
	$('#content').css('font-size', 12);
	return false;
}

function mediumFont(){
	$('#content').css('font-size', 16);
	return false;
}
    
function largeFont(){
    $('#content').css('font-size', 18);
	return false;	
}


$(document).ready(function(){

	// livequery implementation for dynamically loaded content

	$.getScript("static/js/livequery.js", function(){

		if ($('#tabs').length>0) {
			
			$('#tabs').livequery(function(){
				var $tabs = $('#tabs').tabs();
				$('ul.bottom-more li a[href != "#"]').click(function(){
					$tabs.tabs('select', $(this).attr("href"));
				});
			});
		}


	});



	if ($('#utility').length>0) {
		$('#utility ul li:last').css('border-right', 'none');
		$('#utility ul li:last').css('padding-right', '0px');
	}
	
	if ($('.side-nav').length>0) {
		$('.side-nav ul li:last').css('border-bottom', 'none');
	}
	
	if ($('#tabs').length>0) {
		var $tabs = $('#tabs').tabs();
		$('ul.bottom-more li a[href != "#"]').click(function(){
			$tabs.tabs('select', $(this).attr("href"));
		});
	}
	
	if ($('.glossary-trigger').length>0) {
		$('ul.glossary li a.glossary-trigger').each(function(){
			$(this).toggle(function() {
				$(this).next('.glossary-explain').slideDown('medium');
				$(this).addClass('contract');
			}, function() {
				$(this).next('.glossary-explain').slideUp('medium');
				$(this).removeClass('contract');
			});
		});
	}

	// determining the correct position of the welcome message
	if ($('#welcome-message').length>0) {
		var browserWidth = $(window).width();
		var paddingValue = Math.round((browserWidth - 716) / 2 - 93);
		$('#welcome-message').css('padding-left',paddingValue+'px');
	};

	
	if ($(".slide-holder").length>0) {
		$('.slide-holder')
		.after('<div id="page-title">')
		.cycle({
			fx: 'scrollLeft',
    		timeout: 5000,
    		pause: 1,
    		pager: '#page-title'
		});
		
		// define position of search pointer relatively to the list item
		
		$('.search-pointer').each(function(index){
			$(this).css('left',(Math.round($(this).parent().width() / 2) - 6)+'px');
		});	
	}
	
	$('.small').click(function(){
		$(this).addClass('active');
		$('.medium').removeClass('active');
		$('.large').removeClass('active');
		normalFont();
		return false;
	});

	$('.medium').click(function(){
		$(this).addClass('active');
		$('.small').removeClass('active');
		$('.large').removeClass('active');
		mediumFont();
		return false;
	});

	$('.large').click(function(){
		$(this).addClass('active');
		$('.medium').removeClass('active');
		$('.small').removeClass('active');
		largeFont();
		return false;
	});
	
	if ($(".print").length>0) {
		$('.print').click(function() {
			window.print();
			return false;
		});
	}
	
	if ($(".tooltip-triger").length>0) {
		$('.tooltip-triger').tooltip({
			position: "bottom center",
			relative: true,
			offset: [-18, 0]
		});
	}
	
	 $(".modules-content").click(function(){
   	var e = $(this).find("a:first").attr("href");
   	window.location=e;
  	});
  	
  	if ($('#contact-form').length > 0) {
  		$('#contact-form').validate();
  	}
  
	if ($('.fancybox-trigger').length > 0) {
		
		$('.fancybox-trigger').fancybox({
				'type': 'ajax',
				'scrolling':'no',
				'ajax': {
					dataFilter: function(data) {
						var fakeBody = $(data);
						fakeBody = $('#content', fakeBody);
						return(fakeBody);
					}
				},
				'onComplete' : function(){
						if ($('#tabs').length>0) {
							$('#tabs').tabs();
						};
						$('.navigation-next-page').remove();
						$('h2').remove();
				} 

		});
	}
  	
});