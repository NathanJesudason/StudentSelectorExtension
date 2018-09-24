document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function(){
        selectClass();
    }, 20);
	var saveListButton = document.getElementById('saveList');
	saveListButton.addEventListener('click', function() {
		var text1 = document.getElementById('Students').value;
		names = text1.split('\n');
        console.log(text1);
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
    
	/*var SelectClass = document.getElementById('periodSelect');
	SelectClass.addEventListener('onchange', selectClass);*/
	
function saveClass(classList){
	Class = document.getElementById('list').value;
	switch(+Class){
		case 1:
            chrome.storage.sync.set({Period1: classList}, function() {
			console.log('Value is set to ' + classList);
            });
		break;
		
		case 2:
			chrome.storage.sync.set({Period2: classList}, function() {
			console.log('Value is set to ' + classList);
            });
		break;
		case 3:
			chrome.storage.sync.set({Period3: classList}, function() {
			console.log('Value is set to ' + classList);
            });
		break;
		case 4:
			chrome.storage.sync.set({Period4: classList}, function() {
			console.log('Value is set to ' + classList);
            });
		break;
		case 5:
			chrome.storage.sync.set({Period5: classList}, function() {
			console.log('Value is set to ' + classList);
            });
		break;
		case 6:
			chrome.storage.sync.set({Period6: classList}, function() {
			console.log('Value is set to ' + classList);
            });
		break;
		case 7:
			chrome.storage.sync.set({Period7: classList}, function() {
			console.log('Value is set to ' + classList);
            });
		break;
		case 8:
			chrome.storage.sync.set({Period8: classList}, function() {
			console.log('Value is set to ' + classList);
            });
		break;
	}
};
	
function selectClass(){
	Class = document.getElementById('list').value;
    console.log(Class);
	switch(+Class){
		case 1:
            chrome.storage.sync.get(['Period1'], function(result){
            console.log('successful load');
            document.getElementById('Students').value = result.Period1;
            document.getElementById('displayClass').innerHTML = 'Currently Selected Class is Class 1';
            names = result.Period1.split('\n');
            });
		break;
		
		case 2:
			chrome.storage.sync.get(['Period2'], function(result){
            document.getElementById('Students').value = result.Period2;
            document.getElementById('displayClass').innerHTML = 'Currently Selected Class is Class 2';
            names = result.Period2.split('\n');
            console.log('successful load');
            });
		break;
		case 3:
			chrome.storage.sync.get(['Period3'], function(result){
            document.getElementById('Students').value = result.Period3;
            document.getElementById('displayClass').innerHTML = 'Currently Selected Class is Class 3';
            names = result.Period3.split('\n');
            console.log('successful load');
            });
		break;
		case 4:
			chrome.storage.sync.get(['Period4'], function(result){
            document.getElementById('Students').value = result.Period4;
            document.getElementById('displayClass').innerHTML = 'Currently Selected Class is Class 4';
            names = result.Period4.split('\n');
            console.log('successful load');
            });
		break;
		case 5:
			chrome.storage.sync.get(['Period5'], function(result){
            document.getElementById('Students').value = result.Period5;
            document.getElementById('displayClass').innerHTML = 'Currently Selected Class is Class 5';
            names = result.Period5.split('\n');
            console.log('successful load');
            });
		break;
		case 6:
			chrome.storage.sync.get(['Period6'], function(result){
            document.getElementById('Students').value = result.Period6;
            document.getElementById('displayClass').innerHTML = 'Currently Selected Class is Class 6';
            names = result.Period6.split('\n');
            console.log('successful load');
            });
		break;
		case 7:
			chrome.storage.sync.get(['Period7'], function(result){
            document.getElementById('Students').value = result.Period7;
            document.getElementById('displayClass').innerHTML = 'Currently Selected Class is Class 7';
            names = result.Period7.split('\n');
            console.log('successful load');
            });
		break;
		case 8:
			chrome.storage.sync.get(['Period8'], function(result){
            document.getElementById('Students').value = result.Period8;
            document.getElementById('displayClass').innerHTML = 'Currently Selected Class is Class 8';
            names = result.Period8.split('\n');
            console.log('successful load');
            });
		break;
    }
};    
}, false);






