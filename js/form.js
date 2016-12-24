$(function() {
    $('#submit').click(function(e) {
        $.ajax({
            url: "https://formspree.io/sweetdreams2015est@gmail.com",
            method: "POST",
            data: {
                name: $('#Імя').val(),
                email: $('#email').val(),
                tel: $('#№телефону').val(),
                comment: $('#comment').val()
            },
            dataType: "json"
        }).done(function() {
            $('form').html('<h1>Дякуюємо!</h1>');
        });
    });
});