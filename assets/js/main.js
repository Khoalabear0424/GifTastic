
const topicItems = ['Apples', 'Oranges', 'Pears', 'Peaches', 'Watermelon', 'Mangos']
const idButtons = $('#buttons');
const idAddButt = $('#addButt');


for (let i = 0; i < topicItems.length; i++) {
    let $butt = $('<button/>',
        {
            text: topicItems[i],
            class: 'btn btn-success',
            click: alertTest,
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
            click: alertTest,
        });
    idButtons.append($butt);

    alert('Added new button!');
});

