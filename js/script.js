let x = document.querySelector(".x");
let o = document.querySelector(".o");
let box = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let messageContainer = document.querySelector('#message');
let messageText = document.querySelector('#message p');
let secondPlayer;

// contador de jogadas
let player1 = 0;
let player2 = 0;

// Adicionando o evento de click aos boxes
for(let i = 0; i < box.length; i++) {
	box[i].addEventListener("click", function() {

		let el = checkEl(player1, player2);



		// verifica se já tem x ou o

		if(this.childNodes.length == 0) {
			let cloneEl = el.cloneNode(true);

			this.appendChild(cloneEl);

			// computar jogadas

			if(player1 == player2) {
				player1++;
			}else {
				player2++;
			}

			// checa quem venceu
			checkWinCondition();

		}
	});
}

// vê quem vai jogar
function checkEl(player1, player2) {
	if(player1 == player2) {
		// x
		el = x;
	}else {
		// o
		el = o;
	}

	return el;
}


// vê quem ganhou

function checkWinCondition() {
    let b1 = document.getElementById("block_1");
    let b2 = document.getElementById("block_2");
    let b3 = document.getElementById("block_3");
    let b4 = document.getElementById("block_4");
    let b5 = document.getElementById("block_5");
    let b6 = document.getElementById("block_6");
    let b7 = document.getElementById("block_7");
    let b8 = document.getElementById("block_8");
    let b9 = document.getElementById("block_9");


    // horizontal
    if (b1.childNodes.length > 0 && b2 childNodes.length > 0 &&b3.childNodes.length > 0) {

        let b1Child = b1.childNodes
    }
}
