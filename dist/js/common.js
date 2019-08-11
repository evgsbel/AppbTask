$(".top-row__left-button").each(function () {
    $(this).on("click", function () {
        var e = $(this).closest(".top-row__button-wrapper");
        e.find(".top-row__left-button").removeClass("top-row__left-button_active")
        $(this).addClass("top-row__left-button_active")
    });
});

$(".table__name").each(function () {
    $(this).click(function () {
        var a = $(this).attr('data-btn');
        var b = document.querySelectorAll('[data-open="' + a + '"]');
        var c = document.querySelectorAll('.table__hide_js');
        //$(this).parent().next('.table__hide_js').slideToggle();
        $(this).find('.table__name-title').toggleClass('table__name-title_active');
        //$(c).hide();
        $(b).slideToggle();
    })
})

$('.table__img').hover(function () {
    var d = $(this).attr('src');
    var e = document.querySelectorAll('[src="' + d + '"]');
    $(e).toggleClass('table__img_active');
})

$(".table__star").on("click", function () {
    $(this).toggleClass('icon-star_active icon-star_not-active');
})

$(".table__rating_title").on("click", function () {
    $(this).toggleClass('table__rating_title_top');
})

$(document).on('change', '.table__input', function () {
    var $this = $(this), $chks = $(document.getElementsByName(this.name)), $all = $chks.filter(".table__input_js");

    if ($this.hasClass('table__input_js')) {
        $chks.prop('checked', $this.prop('checked'));
    } else switch ($chks.filter(":checked").length) {
        case +$all.prop('checked'):
            $all.prop('checked', false).prop('indeterminate', false);
            break;
        case $chks.length - !!$this.prop('checked'):
            $all.prop('checked', true).prop('indeterminate', false);
            break;
        default:
            $all.prop('indeterminate', true);
    }
});



