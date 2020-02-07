$('.nav-link').on('click', function (e) {
    e.preventDefault()
    $(this).html('Ты кликнул сюда!')
})
$('.nav-link').on('click', function (e) {
    e.preventDefault()
    $(this).css({
        'font-size': '60px',
        background: 'red',
        color: 'blue',
        'text-transform':'uppercase',
        'display': 'flex',
        'display': 'inline-block',
        'text-decoration': 'none',
        'width':'max-content',
        'font-style':'italic',
        'box-shadow': '0 0 10px 2px black',
        'margin- bottom':'10px',
        

    })
})
console.log($('.nav-link').hasClass('active'));
console.log($('.nav-link').addClass('add'));
console.log($('.nav-link').removeClass('active'));







