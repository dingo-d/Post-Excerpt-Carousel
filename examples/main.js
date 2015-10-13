jQuery(document).ready(function ($) {
	'use strict';

	var $carousel = $('.post_excerpt_carousel');

	$carousel.each(function(){

		var $this = $(this);

		var outer_width = $(window).outerWidth();
		var container_width;

		if (outer_width > 1190) {
			container_width = 1170;
		} else if (outer_width > 960) {
			container_width = 960;
		} else {
			container_width = parseInt((9/10)*outer_width,10);
		}

		var duration = $this.data('duration');
		var li_number = $this.find('li').length;
		var $ul = $this.find('ul');
		var $li = $ul.find('li');

		if (outer_width < 760) {
			$li.css('width', container_width);
			$li.eq(1).addClass('active');
			if ($li.eq(2).hasClass('active')) {
				$li.eq(2).removeClass('active');
			}
		} else {
			$li.eq(1).addClass('active');
			$li.eq(2).addClass('active');
		}

		var list_width = $this.find('li').outerWidth(true);
		var left_offset;

		left_offset = parseInt(list_width - (outer_width - container_width-42)/2, 10);

		$ul.css({'display': 'inline-block', 'width': li_number * $this.find('li').outerWidth(true) + 'px', 'left': -left_offset + 'px'});

		var not_active_no = $this.find('li:not(.first, .last, .active)').length;
		var not_active_width = not_active_no * $this.find('li').outerWidth(true);

		$this.on('click', '.carousel_next', function (e) {
			e.preventDefault();

			if ($this.find('li.last').prev().hasClass('active')) {
				return;
			} else {
				var $a = $('.active', $this);

				if (!$a.next().hasClass('last') && !$ul.is(':animated')) {
					$a.removeClass('active').next().addClass('active');
				}

				if (!$ul.is(':animated')) {
					$ul.animate({
						left: parseInt($ul.css('left'), 10) - $ul.find('li').outerWidth(true),
					}, duration);
				}
			}

		});

		$this.on('click', '.carousel_prev', function (e) {
			e.preventDefault();

			if($this.find('li.first').next().hasClass('active')) {
				return;
			} else {
				var $a = $('.active', $this);

				if (!$a.prev().hasClass('first') && !$ul.is(':animated')) {
					$a.removeClass('active').prev().addClass('active');
				}

				if (!$ul.is(':animated')) {
					$ul.animate({
						left: parseInt($ul.css('left'), 10) + $ul.find('li').outerWidth(true),
					}, duration);
				}
			}

		});

	});

	// Desktop on resize

	$(window).on('resize', function(){
		if($(window).width()>1024){
			$carousel.each(function(){

				var $this = $(this);

				var outer_width = $(window).outerWidth();
				var container_width;

				if (outer_width > 1190) {
					container_width = 1170;
				} else if (outer_width > 960) {
					container_width = 960;
				} else {
					container_width = parseInt((9/10)*outer_width,10);
				}

				var duration = $this.data('duration');
				var li_number = $this.find('li').length;
				var $ul = $this.find('ul');
				var $li = $ul.find('li');

				if (outer_width < 760){
					$li.css('width', container_width);
					$li.eq(1).addClass('active');
					if ($li.eq(2).hasClass('active')) {
						$li.eq(2).removeClass('active');
					}
				} else {
					$li.eq(1).addClass('active');
					$li.eq(2).addClass('active');
				}

				var list_width = $this.find('li').outerWidth(true);
				var left_offset;

				left_offset = parseInt(list_width - (outer_width - container_width-42)/2, 10);

				$ul.css({'display': 'inline-block', 'width': li_number * $this.find('li').outerWidth(true) + 'px', 'left': -left_offset + 'px'});

				var not_active_no = $this.find('li:not(.first, .last, .active)').length;
				var not_active_width = not_active_no * $this.find('li').outerWidth(true);

				$this.on('click', '.carousel_next', function (e) {
					e.preventDefault();

					if ($this.find('li.last').prev().hasClass('active')) {
						return;
					} else {
						var $a = $('.active', $this);

						if (!$a.next().hasClass('last') && !$ul.is(':animated')) {
							$a.removeClass('active').next().addClass('active');
						}

						if (!$ul.is(':animated')) {
							$ul.animate({
								left: parseInt($ul.css('left'), 10) - $ul.find('li').outerWidth(true),
							}, duration);
						}
					}

				});

				$this.on('click', '.carousel_prev', function (e) {
					e.preventDefault();

					if ($this.find('li.first').next().hasClass('active')) {
						return;
					} else {
						var $a = $('.active', $this);

						if (!$a.prev().hasClass('first') && !$ul.is(':animated')) {
							$a.removeClass('active').prev().addClass('active');
						}

						if (!$ul.is(':animated')) {
							$ul.animate({
								left: parseInt($ul.css('left'), 10) + $ul.find('li').outerWidth(true),
							}, duration);
						}
					}

				});

			});
		}
	});


	// Mobile orientationchange


	$(window).on('orientationchange', function(){
		$carousel.each(function(){

			var $this = $(this);

			var outer_width = $(window).outerWidth();
			var container_width;

			if (outer_width > 1190) {
				container_width = 1170;
			} else if (outer_width > 960) {
				container_width = 960;
			} else {
				container_width = parseInt((9/10)*outer_width,10);
			}

			var duration = $this.data('duration');
			var li_number = $this.find('li').length;
			var $ul = $this.find('ul');
			var $li = $ul.find('li');

			if (outer_width < 760){
				$li.css('width', container_width);
				$li.eq(1).addClass('active');
				if ($li.eq(2).hasClass('active')) {
					$li.eq(2).removeClass('active');
				}
			} else {
				$li.eq(1).addClass('active');
				$li.eq(2).addClass('active');
			}

			var list_width = $this.find('li').outerWidth(true);
			var left_offset;

			left_offset = parseInt(list_width - (outer_width - container_width-42)/2, 10);

			$ul.css({'display': 'inline-block', 'width': li_number * $this.find('li').outerWidth(true) + 'px', 'left': -left_offset + 'px'});


			var not_active_no = $this.find('li:not(.first, .last, .active)').length;
			var not_active_width = not_active_no * $this.find('li').outerWidth(true);

			$this.on('click', '.carousel_next', function (e) {
				e.preventDefault();

				if ($this.find('li.last').prev().hasClass('active')) {
					return;
				} else {
					var $a = $('.active', $this);

					if (!$a.next().hasClass('last') && !$ul.is(':animated')) {
						$a.removeClass('active').next().addClass('active');
					}

					if (!$ul.is(':animated')) {
						$ul.animate({
							left: parseInt($ul.css('left'), 10) - $ul.find('li').outerWidth(true),
						}, duration);
					}
				}

			});

			$this.on('click', '.carousel_prev', function (e) {
				e.preventDefault();

				if ($this.find('li.first').next().hasClass('active')) {
					return;
				} else {
					var $a = $('.active', $this);

					if (!$a.prev().hasClass('first') && !$ul.is(':animated')) {
						$a.removeClass('active').prev().addClass('active');
					}

					if (!$ul.is(':animated')) {
						$ul.animate({
							left: parseInt($ul.css('left'), 10) + $ul.find('li').outerWidth(true),
						}, duration);
					}
				}

			});

		});
	});


});