//ADD RED INPUT BOX
function addInputBoxColor(boxId, pOrN){

    //ASSIGN VARIABLES
    var id = '#' + boxId;

    //BOOLEAN CHECK
    if(pOrN){
        //CLASS CHECK 1
        if($(id).hasClass('input-error')){
            $(id).removeClass('input-error');
            //CLASS CHECK 2
            if($(id).hasClass('input-success')){
                //DO NOTHING
            }else{ //CLASS CHECK 2 ELSE
                $(id).addClass('input-success');
            }
        }else{ //CLASS CHECK 1 ELSE
            if($(id).hasClass('input-success')){
                //DO NOTHING
            }else{
                $(id).addClass('input-success');
            }
        }
    }else{ //BOOLEAN CHECK ELSE
        //CLASS CHECK 3
        if($(id).hasClass('input-success')){
            $(id).removeClass('input-success');
            if($(id).hasClass('input-error')){
                //DO NOTHING
            }else{
                $(id).addClass('input-error');
            }
        }else{ //CLASS CHECK 3 ELSE
            if($(id).hasClass('input-error')){

            }else{
                $(id).addClass('input-error');
            }
        }
    }
}