document.addEventListener('DOMContentLoaded', function() {
chrome.storage.sync.get(['key'], function(result) {
document.getElementById('Students').value = result.key;
});
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function() {
    var text1 = document.getElementById('Students').value;
     chrome.storage.sync.set({key: text1}, function() {
          console.log('Value is set to ' + text1);
        });
        alert(text1);
  }, false);
}, false);
