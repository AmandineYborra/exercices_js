function Calculer(){
    that = this,
    this.field = "input#nombre",
    this.button = "#touches.buttons",
    this.init = false,

    this.run = function(){
        $(this.button).click(function(){
            var value = $(this).html(); 

            $(that.field).val($(that.fiel).val() + value);
        });
    },

    this.dispatcher = function(value){

    },

    this.operation = function(value, symbol){

    };

}