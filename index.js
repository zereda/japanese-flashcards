var flashcard = document.getElementById ("flashcard");
var kanjidiv= document.getElementById("kanji");
var worddiv = document.getElementById("word");
var meaningdiv= document.getElementById("meaning");
var button= document.getElementById ("btn1");
var backbutton = document.getElementById ("btn2");
var nextbutton = document.getElementById ("btn3");

var i = 0;
var IdInterval = null;

showkanjicard();

button.addEventListener( "click", () => {

	if (IdInterval === null){

		IdInterval = setInterval(function(){
			i = (i + 1) % kanjicards.length;
			showkanjicard();
			
		}, 3000);
		btn1.textContent = "Pause";
	}
	else{
		stopAuto();
	}
});

function stopAuto() {
	clearInterval(IdInterval);
	IdInterval= null;
	btn1.textContent = "Start";
}

backbutton.addEventListener("click",()=>{
	stopAuto();
	
	if( i == 0) {
		return;
	}

	i = (i - 1) % kanjicards.length;
	showkanjicard();
});

function showkanjicard(){
	kanjidiv.textContent = kanjicards[i].kanji; 
	worddiv.textContent = kanjicards[i].word;
	meaningdiv.textContent = kanjicards[i].meaning;
}

nextbutton.addEventListener("click",() => {
	i = (i + 1) % kanjicards.length;
	showkanjicard();
	
});