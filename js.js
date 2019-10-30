var form = document.getElementsByTagName("form")[0];
var email = document.getElementById("mail");
var error = document.querySelector(".error");	
//Email Validation Code
email.addEventListener(
	"input",
	function(event) {
		
		if (email.validity.valid) {
		
			error.innerHTML = ""; 
			error.className = "error"; 
		}
	},
	false
);
form.addEventListener(
	"submit",
	function(event) {
	
		if (!email.validity.valid) {
			
			error.innerHTML = "Please enter a vailid email";
			error.className = "error active";
			
			event.preventDefault();
		}
	
	},
	false
);
/*Function to print email form to screen*/
function myFunction() {
	document.getElementById("field2").value = document.getElementById("mail").value;
  }
