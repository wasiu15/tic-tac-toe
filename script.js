let currentPlayer = 'X', winnerFound = false;
let player1Name,player2Name;
let gotten_names_or_not = false;
let Winner = "";

$(".card-body .col-4").on("click", function() {
	if(!winnerFound && gotten_names_or_not){
		let currentText = $(this).text();
		if(currentText === "") {
			$(this).text(currentPlayer);

			if(currentPlayer === "X"){
				currentPlayer = "O"
				$(this).css("color", "#E98A15");
				$(".btn-p1").css("background-color", "#E98A15");
				$(".btn-p2").css("background-color", "white");
			}else{
				currentPlayer = "X";
				$(this).css("color", "white");
				$(".btn-p1").css("background-color", "#E98A15");
				$(".btn-p2").css("background-color", "white");
			}
			checker();
		}
	} else {
		displayMessage(`Game Over: This round was won by ${Winner}`);
	}
});


function checker(){
	let box_array= [];
	$(".col-4").each(function(index, element){		
		box_array.push($(this).text());
	});

	if(box_array[0] === box_array[1] && box_array[1] ===  box_array[2]){
		if(box_array[0] !== ""){
			displayWon(0,1,2);
		}		
	} if(box_array[0] === box_array[3] && box_array[3] === box_array[6]){
		if(box_array[0] !== ""){
			displayWon(0,3,6);
		}		
	} if(box_array[0] === box_array[4] && box_array[4] === box_array[8]){
		if(box_array[0] !== ""){
			displayWon(0,4,8);
		}		
	} if(box_array[1] === box_array[4] && box_array[4] === box_array[7]){
		if(box_array[1] !== ""){
			displayWon(1,4,7);
		}		
	} if(box_array[2] === box_array[5] && box_array[5] === box_array[8]){
		if(box_array[2] !== ""){
			displayWon(2,5,8);
		}		
	} if(box_array[3] === box_array[4] && box_array[4] === box_array[5]){
		if(box_array[3] !== ""){
			displayWon(3,4,5);
		}		
	} if(box_array[6] === box_array[7] && box_array[7] === box_array[8]){
		if(box_array[6] !== ""){
			displayWon(6,7,8);
		}		
	} if(box_array[2] === box_array[4] && box_array[4] === box_array[6]){
		if(box_array[2] !== ""){
			displayWon(2,4,6);
		}		
	}
}

function displayWon(first, second, third) {
	$(".col-4").each(function(index, element) {
		if(index === first || index === second || index === third) {
			if(currentPlayer === "O"){
				$(this).css("background-color","#E98A15")
				.css("color", "#59114D")
				.fadeOut().fadeIn().fadeOut().fadeIn().fadeOut().fadeIn();
			} else {
				$(this).css("background-color","white")
				.css("color", "#59114D")
				.fadeOut().fadeIn().fadeOut().fadeIn().fadeOut().fadeIn();
			}
		}
	});

	if(currentPlayer === "O"){
		//alert("Player 1 is the Winner");
		Winner = player1Name;
	} else {
		//alert("Player 2 is the Winner");
		Winner = player2Name;
	}
	displayMessage(`Congratulations to ${Winner}... You WON!`);
	winnerFound = true;
}


function getPlayersInfo(){
	player1Name = document.getElementById("txt-p1").value;
	player2Name = document.getElementById("txt-p2").value;

	if(player1Name !== "" && player2Name !== "") {
		if($("select.select-p1").children("option:selected").val() !== "0" && $("select.select-p2").children("option:selected").val() !== "0")
		{
			$(".div-display-players-info").css("display", "inline-flex");
			$(".div-get-players-info").css("display", "none");		
			
			$(".btn-p1").text(player1Name);
			$(".btn-p2").text(player2Name);

			if($("select.select-p1").children("option:selected").val() === "1"){
				$("#img-p1").attr("src","male1.png");
			}else {
				$("#img-p1").attr("src","female1.png");
			}
			if($("select.select-p2").children("option:selected").val() === "1"){
				$("#img-p2").attr("src","male2.png");
			}else {
				$("#img-p2").attr("src","female2.png");
			}

			$(".select-group").css("display","none");
			gotten_names_or_not = true;
		}
	}
}

function reloadPage() {
	location.reload(true);
}

function displayMessage(message) {
	$(".information").text(message).css("display","block").fadeOut().fadeIn(5000).fadeOut();
}