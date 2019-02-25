
const topicItems = ['Apples', 'Oranges', 'Pears', 'Peaches', 'Watermelon', 'Mangos']
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
function alertTest() {
    alert(`You Pressed : ${$(this)[0].firstChild.data}`);
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
    // $.ajax({
    //     url: queryURL,
    //     method: "GET"
    // }).then(function (response) {
    //     for (var i = 0; i < 20; i++) {
    //         var img = $('<img>').attr('src', response.data[i].images.downsized_medium.url);
    //         $('#gifDisplay').append(img);
    //     }
    // })
    let searchItem = $(this)[0].firstChild.data;
    var xhr = $.get("http://api.giphy.com/v1/gifs/search?q="+searchItem+"&api_key=mD36BJfT1Yf7RVO8Xqfm65rJgtck3eKI&limit=5");
    xhr.done(function (data) {
        console.log("success got data", data);
        for (var i = 0; i < 20; i++) {
            var img = $('<img>').attr('src', data.data[i].images.downsized_medium.url);
            $('#gifDisplay').prepend(img);
        }
    });
};