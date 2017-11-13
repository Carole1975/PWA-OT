(function(){
	console.log("map2");

	var username = document.forms["vform"]["username"];
	var email = document.forms["vform"]["email"];
	var password = document.forms["vform"]["password"];
	var password_confirmation = document.forms["vform"]["password_confirmation"];


	var name_error = document.getElementById("name_error");
	var email_error = document.getElementById("email_error");
	var password_error = document.getElementById("password_error");


	username.addEventListener("blur", nameVerify,true);
	email.addEventListener("blur", emailVerify,true);
	password.addEventListener("blur", passwordVerify,true);


	function Validate(){
		if (username.value == ""){
			username.style.border = "1px solid red";
			name_error.textContent = "Le nom d'utilisateur est obligatoire";
			username.focus();
			return false;
		}

		if (email.value == ""){
			email.style.border = "1px solid red";
			email_error.textContent = "L'adresse mail est obligatoire";
			email.focus();
			return false;
		}

		if (password.value == ""){
			password.style.border = "1px solid red";
			password_error.textContent = "Le mot de passe est obligatoire";
			password.focus();
			return false;
		}

		if (password.value != password_confirmation.value){
			password.style.border = "1px solid red";
			password_confirmation.style.border = "1px solid red";
			password_error.innerHTML = "Les mots ne sont pas identiques";
			return false;
		}
	}

	function nameVerify(){
		if (username.value !=""){
			username_error.innerHTML = "";
			return false;
		}
	}

	function emailVerify(){
		if (email.value !=""){
			email_error.innerHTML = "";
			return false;
		}
	}

	function passwordVerify(){
		if (password.value !=""){
			password_error.innerHTML = "";
			return false;
		}
	}

