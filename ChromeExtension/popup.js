chrome.browserAction.onClicked.addListener(function(tab) { Class = 1;
chrome.storage.sync.get([Class], function(result) {
document.getElementById('Students').value = result.key;
names = result.key.split('\n');
});
});
document.addEventListener('DOMContentLoaded', function() {

  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function() {
    var text1 = document.getElementById('Students').value;
    names = text1.split('\n');
     chrome.storage.sync.set({Class: Number(document.getElementById("list").value)}, function() {
          console.log('Value is set to ' + text1);
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
 Class = Number(document.getElementById("list").value);
 chrome.storage.sync.get([Class], function(result) {
document.getElementById('Students').value = result.key;
names = result.key.split('\n');
});
  }, false);
  
}, false);




