
const topicItems = ['Apples', 'Oranges', 'Pears', 'Peaches', 'Watermelon', 'Mangos','Coconut']
const idButtons = $('#buttons');
const idAddButt = $('#addButt');
const queryURL = "https://api.giphy.com/v1/gifs/search?api_key=mD36BJfT1Yf7RVO8Xqfm65rJgtck3eKI?q=cat";

for (let i = 0; i < topicItems.length; i++) {
    let $butt = $('<button/>',
        {
            text: topicItems[i],
            class: 'btn btn-success',
            click: searchGifApi,
        });
    idButtons.append($butt);
}

idAddButt.click(function (event) {
    event.preventDefault();
    let $butt = $('<button/>',
        {
            text: $('input').val().trim(),
            class: 'btn btn-success',
            click: searchGifApi,
        });
    idButtons.append($butt);
    alert('Added new button!');
});

function searchGifApi() {
    let searchItem = $(this)[0].firstChild.data;
    var xhr = $.get("http://api.giphy.com/v1/gifs/search?q="+searchItem+"&api_key=mD36BJfT1Yf7RVO8Xqfm65rJgtck3eKI&limit=20");
    xhr.done(function (data) {
        console.log("success got data", data);
        for (let i = 0; i < data.data.length; i++) {
            let $img = $('<img>');
            let gifStill = data.data[i].images.downsized_still.url;
            let gifAnimate = data.data[i].images.downsized_medium.url;
            $img.addClass('gifImages');
            $img.attr('data-gifAnimate',gifAnimate);
            $img.attr('data-gifStill',gifStill);
            $img.attr('data-gifAnimateState', 'false');
            $img.attr('src', gifStill);
            $img.on('click',gifState);
            $('#gifDisplay').prepend($img);
        }
    });
};

function gifState(){
    let gifStill = $(this).attr('data-gifStill');
    let gifAnimate = $(this).attr('data-gifAnimate');
    let gifState = $(this).attr('data-gifAnimateState');
    console.log(gifState);
    if($(this).attr('data-gifAnimateState')=='false'){
        $(this).attr('src',gifAnimate);
        $(this).attr('data-gifAnimateState','true');
    } else {
        $(this).attr('src',gifStill);
        $(this).attr('data-gifAnimateState','false');
    }
}

$('h1').text('Gif-Tastic!')