function saveOptions() {
  var host = document.getElementById('host').value;
  chrome.storage.sync.set({'mantisSlack.mantisHost': host}, function() {
    alert('Options saved.');
  });
}

function loadOptions() {
  chrome.storage.sync.get({'mantisSlack.mantisHost': 'http://mantis.localhost'}, function(host) {
    document.getElementById('host').value = host['mantisSlack.mantisHost'];
  })
}

document.addEventListener('DOMContentLoaded', loadOptions);
document.getElementById('save').addEventListener('click', saveOptions);
