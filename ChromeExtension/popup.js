chrome.browserAction.onClicked.addListener(function() { 
	chrome.storage.sync.get([selectClass(classNum)], function(result) {
		document.getElementById('Students').value = result.Class;
		names = result.key.split('\n');
		alert('successful load');
	});
});
document.addEventListener('DOMContentLoaded', function() {

	var saveListButton = document.getElementById('saveList');
	saveListButton.addEventListener('click', function() {
		var text1 = document.getElementById('Students').value;
		names = text1.split('\n');
		chrome.storage.sync.set({selectClass(classNum): text1}, function() {
			alert('Value is set to ' + text1);
		});
		alert(text1);
	}, false);
	  
	var checkRanButton = document.getElementById('randomize');
	checkRanButton.addEventListener('click', function() {
		var namesAsString = names.join(', ');
		document.getElementById("namelist").innerHTML = "Names: " + namesAsString;
		var num = Math.floor(Math.random() * names.length);
		document.getElementById("demo").innerHTML = names[num];
	}, false);
	  
	var SelectClassButton = document.getElementById('ClassSelect');
	SelectClassButton.addEventListener('click', function() {
		chrome.storage.sync.get([selectClass(classNum)], function(result) {
			document.getElementById('Students').value = result.Class;
			names = result.key.split('\n');
			alert('Class list has been changed.');
		});
		alert('An attempt was made to change class list'); 
	}, false);
}, false);

function SelectClass(classNum){
	Class = document.getElementById('list').value;
	switch(Class){
		case 1:
			return classNum = "Period1";
		break;
		
		case 2:
			return classNum = "Period2";
		break;
		case 3:
			return classNum = "Period3";
		break;
		case 4:
			return classNum = "Period4";
		break;
		case 5:
			return classNum = "Period5";
		break;
		case 6:
			return classNum = "Period6";
		break;
		case 7:
			return classNum = "Period7";
		break;
		case 8:
			return classNum = "Period8";
		break;
	}
	
	
}




