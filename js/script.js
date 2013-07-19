/* Author: www.andrewdobson.co.uk

*/

/*MAIN SLIDESHOW*/
			
			jQuery(function($){
				
				$.supersized({
				
					// Functionality
					slide_interval          :   4000,		// Length between transitions
					transition              :   1, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
					transition_speed		:	1500,		// Speed of transition
															   
					// Components							
					slide_links				:	'blank',	// Individual links for each slide (Options: false, 'num', 'name', 'blank')
					slides 					:  	[			// Slideshow Images
														{image : 'content/images/40years.jpg', title : '40 years www.40years.co.uk'},
														{image : 'content/images/bluehead.jpg', title : 'N.O.R.A'},  
														{image : 'content/images/gollum.jpg', title : 'The Hunt for Gollum'},
														{image : 'content/images/horror1.jpg', title : 'Red Balloon'},
														{image : 'content/images/nick.jpg', title : 'Nickelodeon Ident'},
														{image : 'content/images/plaid.jpg', title : 'Warp records promo'},
														{image : 'content/images/test.jpg', title : 'The Bill - ITV Promo www.timeslicefilms.com/#2'},
														{image : 'content/images/vh1.jpg', title : 'VH1 Promo: Nobody Does it Better'},
														{image : 'content/images/teaser_1_large.jpg', title : ''},
														{image : 'content/images/teaser_2_large.jpg', title : ''},
														{image : 'content/images/teaser_3_large.jpg', title : ''},
														{image : 'content/images/teaser_4_large.jpg', title : ''}
												]
					
				});
		    });
		    

/* MOSAIC*/

	$('.boxgrid.slidedown').hover(function(){
										 
		$(".cover", this).stop().animate({top:'0px'},{queue:false,duration:300});
	}, function() {
		$(".cover", this).stop().animate({top:'-161px'},{queue:false,duration:300});
	});
