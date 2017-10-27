<!DOCTYPE html>

<html lang="fr">

<head>
	<meta charset="UTF-8"/>

	<title>Mémoire en cache test</title>
	<link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css">
	<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.3.0/css/datepicker.min.css" />
	<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.3.0/css/datepicker3.min.css" />
	
	<!-- FormValidation CSS file -->
	<link rel="stylesheet" href="https://raw.githubusercontent.com/formvalidation/formvalidation.io/master/vendor/formvalidation/css/formValidation.min.css">

	<link rel="stylesheet" href="vex-3.0.0/dist/css/vex.css"/>
	<link rel="stylesheet" href="vex-3.0.0/dist/css/vex-theme-os.css"/>
	<link rel="stylesheet" href="css/main.css"/>


	<link rel="stylesheet" href="css/style.css"/>
</head>

<body class="fluid-container">
	<header>
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<img id="logo" src="assets/image/saingo.png" class="img-fluid" alt="Responsive image">
		</nav>
	</header>

	<div class="container">
		<form method="post" action="evenement.html" class="form-horizontal" id="eventForm" onsubmit="return Validate()" name="newform">
			
			<!--<div class="form-group">
				<label class="col-xs-3 control-label">Evènement</label>
				<div class="col-xs-6">
					<input type="text" class="form-control" name="name"/>
				</div>
			</div>-->
			<div class="font-input">Evènement
				<label class="col-xs-4 control-label"></label>
				<input type="text" name="manif" id="nom">
			</div><br>

			<div class="form-group">
				<!--<label class="col-xs-1 control-label">Date du</label>-->
				<label class="col-xs-3 control-label"></label>
				<div class="col-xs-3 date">
					<div class="input-group input-append date" id="datePicker">Date du
						<input type="text" class="form-control" name="date"/>
						<span class="input-group-addon add-on"><span class="glyphicon glyphicon-calendar"></span></span>
					</div>
				</div>
				<!--<label class="col-xs-2 control-label">au</label>-->
				<div class="col-xs-3 date">
					<div class="input-group input-append date" id="datePickers">au
						<input type="text" class="form-control" name="date_fin"/>
						<span class="input-group-addon add-on"><span class="glyphicon glyphicon-calendar"></span></span>
					</div>
				</div>
			</div> 



			<!--<div class="form-group">
				<label class="col-xs-3 control-label">Lieux</label>
				<div class="col-xs-6">
					<input type="text" class="form-control" name="name"/>
				</div>
			</div><br>-->
			<div class="font-input">Lieux
				<label class="col-xs-4 control-label"></label>
				<input type="text" name="ou" id="nom">
			</div><br>

			<div class="form-group">
				<label class="col-xs-4 control-label"></label>
				<div class="col-xs-5">
					<label for="exampleTextarea">Description</label>
					<textarea class="form-control" id="exampleTextarea" name="resume" rows="3"></textarea>
				</div>
			</div>

			<div class="form-group">
				<label class="col-xs-5 control-label"></label>
				<div class="col-xs-5 col-xs-offset-3">
					<button type="submit" class="btn btn-default">Valider</button>
				</div>
			</div>


		</form>
	</div><br><br> 

	<div class="menu">
		<button type="button" class="btn btn-secondary dropdown-toggle btn-block" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Catégories
			<span class="caret"></span>
		</button> 
		<ul class="dropdown-menu">
			<li><a href="index.html">Accueil</a></li>
			<li><a href="evenement.html">Evènements</a></li>
			<li><a href="territoire.html">Carte territoire</a></li>
			<li><a href="manger.html">Où manger - Où dormir</a></li>
			<li><a href="infos.html">Infos pratiques</a></li>
			<li><a href="admin.php">Admin</a></li>
		</ul>

	</div>  
	
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js" async></script>
	<script src="https://raw.githubusercontent.com/formvalidation/formvalidation.io/master/vendor/formvalidation/js/formValidation.min.js" async></script>

	<script src="js/formevents2.php" async></script>


	<script src="https://npmcdn.com/tether@1.2.4/dist/js/tether.min.js" async></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous" async></script>

	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous" async></script>
	<script src="//cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.3.0/js/bootstrap-datepicker.min.js" async></script>     


</body>

</html>



