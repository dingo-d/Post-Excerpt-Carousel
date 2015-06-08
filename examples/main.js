jQuery(document).ready(function ($) {
	'use strict';


	$('.post_excerpt_carousel').each(function(){
		var $this = $(this);
		post_excerpt_positioning($this);
	});

	$(window).on('resize', function(){
		$('.post_excerpt_carousel').each(function(){
			var $this = $(this);
			post_excerpt_positioning($this);
		});
	});

	function post_excerpt_positioning(e){

		var $carousel = e;
		var outer_width = $(window).outerWidth();
		var container_width;

		if (outer_width > 1190) {
			container_width = 1170;
		}

		if (outer_width > 960 && outer_width < 1190) {
			container_width = 960;
		}

		if (outer_width < 960) {
			container_width = (9/10)*outer_width;
		}

		var list_width = $carousel.find('li').outerWidth(true);
		var left_offset = list_width - (outer_width - container_width)/2;
		var $prev = $carousel.find('.carousel_prev');
		var $next = $carousel.find('.carousel_next');
		var duration = $carousel.data('duration');
		var li_number = $carousel.find('li').length;
		var $ul = $carousel.find('ul');
		var $li = $ul.find('li');
		$ul.css({'display': 'inline-block', 'width': li_number * $carousel.find('li').outerWidth(true) + 'px', 'left': -left_offset + 'px'});

		if (outer_width < 760){
			$li.eq(1).addClass('active');
		} else if (outer_width > 760){
			$li.eq(1).addClass('active');
			$li.eq(2).addClass('active');
		}

		var $not_active_no = $carousel.find('li').not('.first').not('.last').not('.active').length;
		var $not_active_width = $not_active_no * $carousel.find('li').outerWidth(true);

		$carousel.on('click', '.carousel_next', function (e) {
			e.preventDefault();
			var $li = $ul.find('li');
			var $a = $('.active', $carousel);

			if (!$a.next().hasClass('last') && !$ul.is(':animated')) {
				$a.removeClass('active').next().addClass('active');
			}

			if (parseInt($ul.css('left'), 10) != -parseInt($not_active_width + left_offset, 10) && !$ul.is(':animated')) {
				$ul.animate({
					left: parseInt($ul.css('left'), 10) - $ul.find('li').outerWidth(true),
				}, duration);
			}
		});

		$carousel.on('click', '.carousel_prev', function (e) {
			e.preventDefault();
			var $li = $ul.find('li');
			var $a = $('.active', $carousel);

			if (!$a.prev().hasClass('first') && !$ul.is(':animated')) {
				$a.removeClass('active').prev().addClass('active');
			}

			if (parseInt($ul.css('left'), 10) !== -parseInt(left_offset, 10) && !$ul.is(':animated')) {
				$ul.animate({
					left: parseInt($ul.css('left'), 10) + $ul.find('li').outerWidth(true),
				}, duration);
			}
		});
	}

});