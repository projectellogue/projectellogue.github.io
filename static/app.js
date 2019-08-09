$(function () {

    var navigation = function () {
        $('.Header .burger').click(function () {
            $('.collapsible').toggleClass('expanded');
        });
    };

	$.nette.init();
    navigation();

	$('.slick').slick({
		dots: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000
	});

});
