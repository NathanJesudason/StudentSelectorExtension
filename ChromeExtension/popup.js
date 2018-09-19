chrome.browserAction.onClicked.addListener(function() { 
	Class = 1;
	chrome.storage.sync.get([Class], function(result) {
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
		Class = document.getElementById('list').value;
		chrome.storage.sync.set({Class: text1}, function() {
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
		Class = document.getElementById('list').value;
		alert(Class);
		chrome.storage.sync.get([Class], function(result) {
			document.getElementById('Students').value = result.Class;
			names = result.key.split('\n');
			alert('Class list has been changed.');
		});
		alert('An attempt was made to change class list'); 
	}, false);
}, false);




