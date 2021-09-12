window.addEventListener('scroll',function() {
	var header = document.querySelector('header');
	header.classList.toggle('sticky',scrollY > 50);
})

$(window).scroll(function(){
	if ($(window).scrollTop() > 500) {
		$('.scrollup').show();
	}
	else{
		$('.scrollup').hide();
	}
})
$('.scrollup').click(function(){
	$('html').animate({scrollTop:0},1000);
})



document.addEventListener("DOMContentLoaded", function(event) {
 

function OTPInput() {
    
const inputs = document.querySelectorAll('.inputs input');
for (let i = 0; i < inputs.length; i++) { 
  inputs[i].addEventListener('keydown', function(event) { 
    if (event.key==="Backspace" ) {
     inputs[i].value='' ; 
     if (i !==0) inputs[i - 1].focus(); 
    } else { 
      if (i===inputs.length - 1 && inputs[i].value !=='' ) {
       return true;
        } else if (event.keyCode >= 96 && event.keyCode <= 105) { 
          inputs[i].value=event.key;
           if (i !==inputs.length - 1) inputs[i + 1].focus();
            event.preventDefault(); 
          } else if (event.keyCode >= 48 && event.keyCode <= 57) {
           inputs[i].value=String.fromCharCode(event.keyCode); 
           if (i !==inputs.length - 1) inputs[i + 1].focus();
            event.preventDefault();
            } 
          } 
        });
         }
          } 
          function OTPInputs() {
    
const inputs = document.querySelectorAll('.input_ input');
for (let i = 0; i < inputs.length; i++) { 
  inputs[i].addEventListener('keydown', function(event) { 
    if (event.key==="Backspace" ) {
     inputs[i].value='' ; 
     if (i !==0) inputs[i - 1].focus(); 
    } else { 
      if (i===inputs.length - 1 && inputs[i].value !=='' ) {
       return true;
        } else if (event.keyCode >= 96 && event.keyCode <= 105) { 
          inputs[i].value=event.key;
           if (i !==inputs.length - 1) inputs[i + 1].focus();
            event.preventDefault(); 
          } else if (event.keyCode >= 48 && event.keyCode <= 57) {
           inputs[i].value=String.fromCharCode(event.keyCode); 
           if (i !==inputs.length - 1) inputs[i + 1].focus();
            event.preventDefault();
            } 
          } 
        });
         }
          }
          OTPInputs(); 
          OTPInput();
      });