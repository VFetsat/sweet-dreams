$(function() {
    $('#submit').click(function(e) {
        e.preventDefault();
        $.ajax({
            url: "https://formspree.io/sweetdreamsest2015@gmail.com",
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