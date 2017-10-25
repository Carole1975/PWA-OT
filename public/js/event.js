(function(){
	console.log("map2");

	function check(form){
		if(form.nom.value == "carole" && form.mdp.value == "123456"){
			window.open("public/event.html")
		}
		else{
			alert("Vous n'avez pas accés à cette page")
		}
	}
})