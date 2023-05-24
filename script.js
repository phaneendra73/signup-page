var errormessage="";
    var missing="";
    function isEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }
    $("#submitbutton").click(function () {
    if(isEmail($("#Email").val())== false || $("#Email").val()=="" ){
        errormessage+="<p>❌ Email id is not valid</p>"
    }
    if(isNumeric($("#phoneno").val())== false || $("#phoneno").val()==""){
        errormessage+="<p>❌ Phone number is invalid</p>"
    }
    if($("#password").val()!=$("#confirm-password").val()){
        errormessage+="<p>❌ Password doesn't match</p>"
    }
    if(errormessage==""){
        $("#Result").html("✅ you have sucessfully registered");
    }
    else{
        $("#Result").html(errormessage);
    }
    });