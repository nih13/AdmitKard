
$(document).ready(function() {
    $('input#input_text, textarea#textarea2').characterCounter();
    $('.modal').modal();
    $(".slider").slider({ full_width: true});
  });
        
function toggleModal(){
    var instance = M.Modal.getInstance($('#modal3'));
    instance.open();
}




function myFunction() {
    var x, text;
    x = document.getElementById("tocheck").value;
  
    if ( x == 1234) {
      text = "OTP VERIFIED";
    } else {
      text = "WRONG OTP";
    }
    document.getElementById("otp").innerHTML = text;
  }

