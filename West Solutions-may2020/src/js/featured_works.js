$(document).ready(function () {
    $('.mag_img').magnificPopup({
        delegate: 'img',
        callbacks: {
            elementParse: function (item) {
                item.src = 'img/featured_works/work_' + (item.index + 1) + '.svg'
            }
        },
        gallery: {
            enabled: true
        },
        type: 'image'
    });
});