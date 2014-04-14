function saveOptions() {
  var url = document.getElementById('url').value;
  chrome.storage.sync.set({'SITP.urlFormat': url}, function() {
    alert('Options saved.');
  });
}

function loadOptions() {
  chrome.storage.sync.get({'SITP.urlFormat': 'http://myissuetracker.com/issues/view?id=####'}, function(url) {
    document.getElementById('url').value = url['SITP.urlFormat'];
  })
}

document.addEventListener('DOMContentLoaded', loadOptions);
document.getElementById('save').addEventListener('click', saveOptions);
