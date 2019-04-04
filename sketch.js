


	var count = 0;

function setup() {
//	createCanvas(windowWidth, windowHeight);

	questionAsked = select("#question");
	answerGiven = select("#answer");

	submitEntry = select("#submitEntry");
	createQuiz = select("#createQuiz");
	//createQuiz.hide();

	takeQuiz = select("#takeQuiz");
	refreshPage = select("#refreshPage");


	//takeQuiz = createButton('NEXT...');
//	takeQuiz.hide();

	takeQuiz.mousePressed(fanyaMambo);
	refreshPage.mousePressed(pageReload)

	loadQuestion();
	newQuiz();
}

function draw() {

	//background(205,200,205);

}

function newQuestion() {

	var key = questionAsked.value();
	var value = answerGiven.value();

	localStorage.setItem(key, value);

	questionAsked.value('');
	answerGiven.value('');

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
} else {
  txt = "You pressed Cancel!";
}
//	localStorage.clear();
}

function fanyaMambo() {

		var going = true;


	if (going && count < localStorage.length) {

						var kurasa = createP(localStorage.key(count));

						createInput("Jibu swali");

						createButton('ANSWER');

						count++;

		} else {
						createP("QUIZ OVER");
						takeQuiz.hide();
						//button3.hide();
						//button4.hide();
		}

}

function pageReload() {

	location.reload();

}
