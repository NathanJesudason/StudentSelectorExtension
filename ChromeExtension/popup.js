
document.addEventListener('DOMContentLoaded', function() {
    chrome.runtime.onInstalled.addListener(function() {
        selectClass();    
    });
	var saveListButton = document.getElementById('saveList');
	saveListButton.addEventListener('click', function() {
		var text1 = document.getElementById('Students').value;
		names = text1.split('\n');
        alert(text1);
        saveClass(text1);
		
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
        selectClass();
	}, false);
    
function saveClass(classList){
	Class = document.getElementById('list').value;
	switch(Class){
		case 1:
            chrome.storage.sync.set({Period1: classList}, function() {
			alert('Value is set to ' + classList);
            });
		break;
		
		case 2:
			chrome.storage.sync.set({Period2: classList}, function() {
			alert('Value is set to ' + classList);
            });
		break;
		case 3:
			chrome.storage.sync.set({Period3: classList}, function() {
			alert('Value is set to ' + classList);
            });
		break;
		case 4:
			chrome.storage.sync.set({Period4: classList}, function() {
			alert('Value is set to ' + classList);
            });
		break;
		case 5:
			chrome.storage.sync.set({Period5: classList}, function() {
			alert('Value is set to ' + classList);
            });
		break;
		case 6:
			chrome.storage.sync.set({Period6: classList}, function() {
			alert('Value is set to ' + classList);
            });
		break;
		case 7:
			chrome.storage.sync.set({Period7: classList}, function() {
			alert('Value is set to ' + classList);
            });
		break;
		case 8:
			chrome.storage.sync.set({Period8: classList}, function() {
			alert('Value is set to ' + classList);
            });
		break;
	}
};
	
function selectClass(){
	Class = document.getElementById('list').value;
    alert(Class);
	switch(Class){
		case 1:
            chrome.storage.local.get(['Period1'], function(result){
            document.getElementById('Students').value = result.Period1;
 ///           names = result.key.split('\n');
            alert('successful load');
            });
		break;
		
		case 2:
			chrome.storage.local.get(['Period2'], function(result){
            document.getElementById('Students').value = result.Period2;
            names = result.key.split('\n');
            alert('successful load');
            });
		break;
		case 3:
			chrome.storage.local.get(['Period3'], function(result){
            document.getElementById('Students').value = result.key;
            names = result.key.split('\n');
            alert('successful load');
            });
		break;
		case 4:
			chrome.storage.local.get(['Period4'], function(result){
            document.getElementById('Students').value = result.key;
            names = result.key.split('\n');
            alert('successful load');
            });
		break;
		case 5:
			chrome.storage.local.get(['Period5'], function(result){
            document.getElementById('Students').value = result.key;
            names = result.key.split('\n');
            alert('successful load');
            });
		break;
		case 6:
			chrome.storage.local.get(['Period6'], function(result){
            document.getElementById('Students').value = result.key;
            names = result.key.split('\n');
            alert('successful load');
            });
		break;
		case 7:
			chrome.storage.local.get(['Period7'], function(result){
            document.getElementById('Students').value = result.key;
            names = result.key.split('\n');
            alert('successful load');
            });
		break;
		case 8:
			chrome.storage.local.get(['Period8'], function(result){
            document.getElementById('Students').value = result.key;
            names = result.key.split('\n');
            alert('successful load');
            });
		break;
}
};    
}, false);






