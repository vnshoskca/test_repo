$(function(){
    if ($("div").hasClass("cart__check")) {
        $(".cart__checkout-button").attr("disabled","disabled");
        $("#cart_check").click(function(){
            if($(this).prop("checked") == false){
                $(".cart__checkout-button").attr("disabled","disabled");
            } else {
                $(".cart__checkout-button").removeAttr("disabled");
            }
        });
    }
});
