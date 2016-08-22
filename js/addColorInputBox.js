//ADD RED INPUT BOX
function addInputBoxColor(boxId, pOrN, positiveClass, negativeClass){

    //ASSIGN VARIABLES
    var id = '#' + boxId;

    //BOOLEAN CHECK
    if(pOrN){
        //CLASS CHECK 1
        if($(id).hasClass(negativeClass)){
            $(id).removeClass(negativeClass);
            //CLASS CHECK 2
            if($(id).hasClass(positiveClass)){
                //DO NOTHING
            }else{ //CLASS CHECK 2 ELSE
                $(id).addClass(positiveClass);
            }
        }else{ //CLASS CHECK 1 ELSE
            if($(id).hasClass(positiveClass)){
                //DO NOTHING
            }else{
                $(id).addClass(positiveClass);
            }
        }
    }else{ //BOOLEAN CHECK ELSE
        //CLASS CHECK 3
        if($(id).hasClass(positiveClass)){
            $(id).removeClass(positiveClass);
            if($(id).hasClass(negativeClass)){
                //DO NOTHING
            }else{
                $(id).addClass(negativeClass);
            }
        }else{ //CLASS CHECK 3 ELSE
            if($(id).hasClass(negativeClass)){

            }else{
                $(id).addClass(negativeClass);
            }
        }
    }
}