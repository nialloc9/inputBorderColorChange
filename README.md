# inputBorderColorChange
This changes the input border color green or blue depending on the boolean value passed.
This was made with re-usability at it's core.  It is very useful for form validation..

# Instructions
1. Make sure jQuery is available to use in your project.
2. Include the js/auth/addColorInputBox.js file in your project.
3. Add the file css/styles.css to your project.
4. Give the input to change color a suitable id.
5. When needed call the function 

        addInputBoxColor(boxId, pOrN, positiveClass, negativeClass)
        
Make sure that the boxId, positiveClass, negativeClass all correspond to correct classes/id's.


# Example
        $('#button').click(function(){
                if(//DO SOME CHECK HERE){
                        addInputBoxColor('box', true, 'input-success', 'input-error');
                }else{
                        addInputBoxColor('box', false, 'input-success', 'input-error');
                }
        });
        
# Example
If you wish to change the class names make sure to update the class names in the styles.css file.
