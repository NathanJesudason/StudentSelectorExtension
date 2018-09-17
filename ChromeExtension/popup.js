document.addEventListener('DOMContentLoaded', function() {
chrome.storage.sync.get(['key'], function(result) {
document.getElementById('Students').value = result.key;
names = result.key.split('\n');
});
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function() {
    var text1 = document.getElementById('Students').value;
    names = text1.split('\n');
     chrome.storage.sync.set({key: text1}, function() {
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
}, false);
