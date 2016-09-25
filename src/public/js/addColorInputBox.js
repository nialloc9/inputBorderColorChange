var addInputBoxColor = {

    //create
    create: function (values) {

        //check values
        if(values == null || values == undefined){
            values = {};
        }

        //create object
        var instance = Object.create(this);

        //add new methods and properties
        Object.keys(values).forEach(function (key) {
            instance[key] = values[key];
        });

        //return object
        return instance;
    },

    //add
    add: function (boxId, tOrF, positiveClass, negativeClass) {

        //cache DOM
        var $id = $('#' + boxId);

        //BOOLEAN CHECK
        if(tOrF){
            this._render($id, positiveClass, negativeClass);
        }else{
            this._render($id, negativeClass, positiveClass);
        }
    },

    remove: function (boxId, positiveClass, negativeClass) {
        this.add(boxId, true, '', negativeClass);
        this.add(boxId, false, positiveClass, '')
    },

    //_render
    _render: function ($id,addClassName, removeClassName) {
        //CLASS CHECK 1
        if($id.hasClass(removeClassName)){
            $id.removeClass(removeClassName);
            //CLASS CHECK 2
            if($id.hasClass(addClassName)){
                //DO NOTHING
            }else{ //CLASS CHECK 2 ELSE
                $id.addClass(addClassName);
            }
        }else{ //CLASS CHECK 1 ELSE
            if($id.hasClass(addClassName)){
                //DO NOTHING
            }else{
                $id.addClass(addClassName);
            }
        }
    }
};