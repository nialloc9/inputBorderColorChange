# inputBorderColorChange
This is a prototypal inheritance(object composition) project that changes the input border color green or blue depending on the boolean value passed. This was made with re-usability at it's core and can be used as a stand alone object or if the developer wants other objects can 'inherit' from it.

## Getting Started

1. add jQuery to your project.

2. Add the file public/src/js/addColorInputBox.js to your project

3. Add css that has 2 classes. One for positive. One for the negative. (Default styling found at public/src/css/styles.css

4. When you need to add a info message create new instance of the infoMessage object by using the create method.

        var addColorInputBox = addInputBoxColor.create();
        
5. Call the add method to change the color of your input.

        addColorInputBox.add(boxId, tOrF, positiveClass, negativeClass);
  
6. If the developer wants to change the styling to the other class then change the value of tOrF.

7. If you want to remove any colors call the remove method.

        addColorInputBox.remove();
 
### create() Arguements

We can pass an optional object of methods and properties that we want to add to our new object here. This is how 
we use prototypal inheritance(object composition) to create new objects that have the parent addInputBoxColor objects 
methods and properties but also have new ones.

        //parent 
        var parent = addInputBoxColor.create();

        //child
        var child = parent.create({}
                newMethod: function(){},
                newProperty: 'new property'
        );
        
        //alert newProperty
        alert(child.newProperty); //alerts 'new property'
        
        //alert(parent.newProperty); --> This will fail because newProperty is a property of child not parent

### add() Arguements

*boxId:* The id of the input we want to change. e.g 'myInput'

*tOrF:* true or false is do you want it to appear with a class of positiveClass or negativeClass

*positiveClass:* The name of the class you want to style with positive styling . e.g 'myPositiveClass'

*negativeClass:* The name of the class you want to style with negative styling. e.g 'myNegativeClass'

### remove() Arguements

*boxId:* The id of the input we want to remove. e.g 'myInput'

*positiveClass:* The name of the positive styling class . e.g 'myPositiveClass'

*negativeClass:* The name of the negative styling class. e.g 'myNegativeClass'

## Dependencies

jQuery

### Example

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

## Authors

* **Niall O Connor** - [nialloc9](https://github.com/nialloc9)
