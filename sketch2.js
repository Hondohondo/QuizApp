
var jibu;
var hakiki;
var par;
var para;
var check;
var count = 0;
var storagee;

function setup() {
//	createCanvas(windowWidth, windowHeight);
	par = createP('Question');
	jibu = createInput("Answer");
	par.hide();
	jibu.hide();
	para = createP('');
	//count = 0;
	check = createP('');

	questionAsked = select("#question");
	answerGiven = select("#answer");

	submitEntry = select("#submitEntry");
	createQuiz = select("#createQuiz");
	// createQuiz.hide();

	takeQuiz = select("#takeQuiz");
	// takeQuiz.hide();

	refreshPage = select("#refreshPage");
	// refreshPage.hide();

	// nextQuestion = select("#nextQuestion");
	// nextQuestion.hide();

	//createQuiz.hide();
	//takeQuiz.hide();
	//refreshPage.hide();

	//storagee = createButton('STORAGEE...');
//	storagee.mousePressed(updateStorageList);


	//takeQuiz = createButton('NEXT...');
//	takeQuiz.hide();

	takeQuiz.mousePressed(fanyaMambo);
	refreshPage.mousePressed(pageReload);

	nextQuestion.mousePressed(fanyaMambo);

	loadQuestion();
	newQuiz();

}

function draw() {

	//background(205,200,205);

}

function newQuestion() {

if (questionAsked.value() != "" && answerGiven.value() != "") {

	var key = questionAsked.value();
	var value = answerGiven.value();

	localStorage.setItem(key, value);

	questionAsked.value('');
	answerGiven.value('');

	// createQuiz.show();
	// createQuiz.class('batan');
	// createQuiz.parent('container-button');

	// takeQuiz.show();
	// takeQuiz.class('batan');
	// takeQuiz.parent('container-button');

	// refreshPage.show();
	// refreshPage.class('batan');
	// refreshPage.parent('container-button');

} else if (questionAsked.value() == "" || answerGiven.value() == "") {
		alert ("Waoh! Don't leave any field empty!");
}





	//refreshPage.show();

}

function loadQuestion() {
	submitEntry.mousePressed(newQuestion);

}

function newQuiz() {
	createQuiz.mousePressed(futaStorage);

}


function futaStorage() {
	//alert("Warning This Will Delete Your Previous Quiz!");
	if (confirm("If you press an OK button, your previous Quiz will be permanently deleted!")) {
  txt = "You pressed OK!";
	localStorage.clear();
	location.reload();
	createQuiz.hide();
} else {
  txt = "You pressed Cancel!";
}
//	localStorage.clear();
}

function fanyaMambo() {
	par.show();
	jibu.show();

		var going = true;
	//	var count = 0;

		//para = createP('');
		para.html('');
		jibu.value('');
		jibu.class('jibu-input');

		check.html('');
		// takeQuiz.html('Next');
		nextQuestion.show();
		takeQuiz.hide();


	if (going && count < localStorage.length) {
						//var kurasa = createP(localStorage.key(count));
					//	var kurasa2 = createP(localStorage.getItem(key(count));
						par.html(localStorage.key(count));
						par.class('question-paragraph');
						//par.parent('wrapper');

					//	jibu = createInput("Jibu swali");
					//	hakiki = createButton('SUBMITANSWER');
					//	count++;
		} else {
						//pageReload();
						// createP("QUIZ OVER");

						par.hide();
						jibu.hide();
						takeQuiz.hide();
						nextQuestion.hide();
						para.hide();
						jibu.hide();
						alert ("Quiz Over! No more questions. Press RELOAD PAGE to take the quiz again or Press CREATE NEW QUIZ to make a new quiz");
						//button3.hide();
						//button4.hide();
		}

		count++;

	// for (var i= 0; i< localStorage.length; i++) {
	// 					var kurasa = createP(localStorage.key(i));
	// 				//	var kurasa2 = createP(localStorage.getItem(key(count));
	// 					jibu = createInput("Jibu swali");
	// 					hakiki = createButton('SUBMITANSWER');
	// 	}

		jibu.changed (doSomething);
		//jibu.input (doSomething);
}


function doSomething() {
	para.html(jibu.value());
	para.class('jibu-paragraph');


	if (para.html().toUpperCase() == localStorage.getItem(localStorage.key(count-1)).toUpperCase()) {
		console.log ("SUCCESS");
		//var check = createP("Correct!");
		check.html("Correct!");
		check.class('correct');
		//console.log (localStorage.getItem(localStorage.key(1)));
	} else {
		//var check = createP("Wrong!");
			check.html("Wrong! " + "Answer is " + localStorage.getItem(localStorage.key(count-1)));
			// check.html("Wrong!");
		check.class('wrong');
		console.log("WRONG");
		console.log("Answer is " + localStorage.getItem(localStorage.key(count-1)));
		//console.log (localStorage.getItem(localStorage.key(1)));
	}


	jibu.value('');

}


function updateStorageList() {
	par = createP('N');

	for (var i = 0; i < localStorage.length; i++) {
			createP(localStorage.key(i));
			//createP('....');
			createP(localStorage.getItem(localStorage.key(i)));

	}

		// if (localStorage.getItem(localStorage.key(i)) == localStorage.getItem(localStorage.value(i))) {
		//
		// }

		if (par.html() == localStorage.getItem(localStorage.key(0))) {
			console.log ("SUCCESS");
			console.log (localStorage.getItem(localStorage.key(1)));
		} else {
			console.log("WRONG");
			console.log (localStorage.getItem(localStorage.key(1)));
		}

		//console.log(localStorage.getItem(localStorage.key(i)));
	}



function pageReload() {
	location.reload();
}
