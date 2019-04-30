
var correctScore = 0;
var wrongScore = 0;

var hakiki;

var count = 0;
var storagee;

var canvas;

function windowResized() {
	resizeCanvas(windowWidth,windowHeight);
}

function setup() {
	canvas = createCanvas(windowWidth,windowHeight);
	canvas.position(0,0);
	canvas.style('z-index', '-1');

	questionAsked = select("#question");
	answerGiven = select("#answer");

	submitEntry = select("#submitEntry");

	createQuiz = select("#createQuiz");
	// createQuiz.hide();

	takeQuiz = select("#takeQuiz");
	// takeQuiz.hide();

	refreshPage = select("#refreshPage");
	// refreshPage.hide();

	takeQuiz.mousePressed(fanyaMambo);
	refreshPage.mousePressed(pageReload);



	loadQuestion();
	newQuiz();

	para = select('#para');
	// para.hide();

	par = select('#par');
	par.hide();

	jibu = select('#jibu');
	jibu.hide();

	pressEnter = select('#pressEnter');
	pressEnter.hide();

	submitNext = select('#submitNext');
	submitNext.hide();

	correct = select('#correct');
	correct.hide();

	incorrect = select('#incorrect');
	incorrect.hide();

	submitNext.mousePressed(fanyaMamboTena);
	// takeQuiz.mousePressed(fanyaMamboTena);

	correctZero = select('#current-0');
	correctZero.hide();

	correctBox = select('#box-one');
	correctBox.hide();

	wrongZero = select('#current-1');
	wrongZero.hide();

	correctBox2 = select('#box-two');
	correctBox2.hide();

	spanCode = select('#span-code');
	spanCode.hide();

	// background(175);


}

function draw() {

	if(mouseIsPressed) {
		line(pmouseX, pmouseY, mouseX, mouseY);
	}

}

function keyPressed() {
	clear();
}

function newQuestion() {

if (questionAsked.value() != "" && answerGiven.value() != "") {

	var key = questionAsked.value();
	var value = answerGiven.value();

	localStorage.setItem(key, value);

	questionAsked.value('');
	answerGiven.value('');

} else if (questionAsked.value() == "" || answerGiven.value() == "") {
		alert ("Waoh! Don't leave any field empty!");
}


}

function loadQuestion() {
	submitEntry.mousePressed(newQuestion);

}

function newQuiz() {
	createQuiz.mousePressed(futaStorage);

}


function futaStorage() {
	// If you press an OK button, your previous Quiz will be permanently deleted!

	if (confirm("Press OK to Create a NEW QUIZ - This will permanently delete your previous quiz! For more info read instructions again!")) {
  txt = "You pressed OK!";
	localStorage.clear();
	location.reload();
	// createQuiz.hide();
} else {
  txt = "You pressed Cancel!";
}

}

function fanyaMambo() {
		var going = true;

		para.html('');
		jibu.value('');

	if (going && count < 1) {
		par.show();
		jibu.show();
		pressEnter.show();
		submitNext.show();
		par.html(localStorage.key(count));

						// par.class('question-paragraph');
						// if (count == 1) {
						// 	createQuiz.show();
						// 	takeQuiz.show();
						// 	refreshPage.show();
						// }

		} else {
					count = 0;
		}
		count++;
		jibu.changed (doSomething);
		takeQuiz.hide();

}


function fanyaMamboTena() {
	// par.show();
	jibu.show();
	pressEnter.show();
		// submitNext.show();


		var going = true;

		para.html('');
		jibu.value('');
		spanCode.hide();
		correct.hide();
		incorrect.hide();
		// jibu.class('jibu-input');
		//
		// check.html('');
		// nextQuestion.show();
		// takeQuiz.hide();


	if (going && count < localStorage.length) {

						par.html(localStorage.key(count));
						// par.class('question-paragraph');
						// if (count == 1) {
						// 	createQuiz.show();
						// 	takeQuiz.show();
						// 	refreshPage.show();
						// }

		} else {

						par.hide();
						jibu.hide();
						takeQuiz.hide();
						// nextQuestion.hide();
						pressEnter.hide();
						submitNext.hide();
						para.hide();
						jibu.hide();
						alert ("Quiz Over! No more questions. Press REFRESH to take the quiz again or Press NEW QUIZ to create a new quiz");

						correctZero.hide();

						correctBox.hide();

						wrongZero.hide();

						correctBox2.hide();

		}

		count++;


		jibu.changed (doSomething);
}

function doSomething() {




	para.html(jibu.value());
	// para.class('jibu-paragraph');


	if (para.html().toUpperCase() == localStorage.getItem(localStorage.key(count-1)).toUpperCase()) {
		console.log ("SUCCESS");
		correct.show();
		correctScore = correctScore + 1;

		correctBox.show();
		correctZero.show();
		correctZero.html(correctScore);

		//
		// correctZero = select('#current-0');
		// correctZero.hide();
		//
		// correctBox = select('#box-one');
		// correctBox.hide();
		//
		// wrongZero = select('#current-1');
		// wrongZero.hide();
		//
		// correctBox2 = select('#box-two');
		// correctBox2.hide();

		// check.html("Correct!");
		// check.class('correct');



	} else {
		incorrect.show();

		wrongScore = wrongScore + 1;

		correctBox2.show();
		wrongZero.show();
		wrongZero.html(wrongScore);

		// spanCode.html("Yeees...")
		spanCode.show();
		spanCode.html("Answer is " + localStorage.getItem(localStorage.key(count-1)));



		// 	check.html("Wrong! " + "Answer is " + localStorage.getItem(localStorage.key(count-1)));
		//
		// check.class('wrong');
		// console.log("WRONG");
		// console.log("Answer is " + localStorage.getItem(localStorage.key(count-1)));

	}

	jibu.value('');

	// jibu.disabled();
	jibu.hide();
	pressEnter.hide();

}


function updateStorageList() {
	par = createP('N');

	for (var i = 0; i < localStorage.length; i++) {
			createP(localStorage.key(i));

			createP(localStorage.getItem(localStorage.key(i)));

	}

		if (par.html() == localStorage.getItem(localStorage.key(0))) {
			console.log ("SUCCESS");
			console.log (localStorage.getItem(localStorage.key(1)));
		} else {
			console.log("WRONG");
			console.log (localStorage.getItem(localStorage.key(1)));
		}

	}



function pageReload() {
	location.reload();
}
