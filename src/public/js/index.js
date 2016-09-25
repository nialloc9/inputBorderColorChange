$(document).ready(function(){

    //cache DOM
    var $wrapper = $('#wrapper'),
        $green = $wrapper.find('#green'),
        $red = $wrapper.find('#red'),
        $remove = $wrapper.find('#remove');

    //events
    $green.on('click', greenClick);
    $red.on('click', redClick);
    $remove.on('click', removeClick);

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

    function removeClick() {
        addColorInputBox.remove('box', 'input-success', 'input-error')
    }

});
