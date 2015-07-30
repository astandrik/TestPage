
$('#home').click(
    function () {
        $('#home').fadeOut(400);
        $('#house').offset($('home').offset());
        $('#house').removeClass('invisible');
        $('#house').fadeIn();
    });


$('#house').click(
    function () {
        $('#house').fadeOut(400);
        $('#house').addClass('invisible');
        $('#home').fadeIn(400);
    });