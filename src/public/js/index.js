$(document).ready(function(){

    //cache DOM
    var $wrapper = $('#wrapper'),
        $green = $wrapper.find('#green'),
        $red = $wrapper.find('#red');

    //events
    $green.on('click', greenClick);
    $red.on('click', redClick);

    //create object
    var addColorInputBox = addInputBoxColor.create();

    //greenClick
    function greenClick() {
        addColorInputBox.add('box', true, 'input-success', 'input-error');
    }

    //redClick
    function redClick() {
        addColorInputBox.add('box', false, 'input-success', 'input-error');
    }

});
