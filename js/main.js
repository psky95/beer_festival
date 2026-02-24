function initSlick(selector, options) {
    var baseOptions = {
        autoplay: true,
        responsive: [{
            breakpoint: 461,
            settings: {
                arrows: false,
                autoplay: false,
                swipe: true,
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: false
            }
        }]
    };

    var mergedOptions = $.extend(true, {}, baseOptions, options);
    $(selector).slick(mergedOptions);
}

function initBeerSlider() {
    initSlick("#beer_line-up .wrap2 .teb_menu ul.teb_list", {
        autoplaySpeed: 3500,
        slidesToShow: 4,
        slidesToScroll: 4,
        speed: 1500
    });
}

function initFoodSlider() {
    initSlick("#food_line-up .wrap2 .teb_menu ul.food-list-primary", {
        autoplaySpeed: 3500,
        slidesToShow: 4,
        slidesToScroll: 4,
        speed: 1500
    });

    initSlick("#food_line-up .wrap2 .teb_menu ul.food-list-secondary", {
        autoplaySpeed: 4000,
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 1000
    });
}

function initMusicianTabs() {
    initSlick("#musician_line-up .wrap2 .teb_img ul.line-up", {
        autoplaySpeed: 4000,
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 1000,
        responsive: [{
            breakpoint: 461,
            settings: {
                arrows: false,
                autoplay: false,
                swipe: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false
            }
        }]
    });

    $("#musician_line-up .wrap2 .teb_menu ul.teb_list li:first-child a").css({
        background: "#f08c68",
        color: "#fff"
    });

    $("#musician_line-up .wrap2 .teb_menu ul.teb_list li a").on("click", function () {
        $(this).css({
            background: "#f08c68",
            color: "#fff"
        });

        $("#musician_line-up .wrap2 .teb_menu ul.teb_list li a").not(this).css({
            background: "",
            color: ""
        });

        var index = $(this).parent().index();
        $(".teb_img .musician_list").css("display", "none");
        $(".teb_img .musician_list:eq(" + index + ")").css("display", "block");
        $("#musician_line-up .wrap2 .teb_img ul.line-up").slick("refresh");

        return false;
    });
}

$(document).ready(function () {
    initBeerSlider();
    initFoodSlider();
    initMusicianTabs();
});
