function saveOptions() {
  var url = document.getElementById('url').value,
    prefix = document.getElementById('prefix').value;
    
  chrome.storage.sync.set({
    'SITP.urlFormat': url,
    'SITP.issuePrefix': prefix
  }, function() {
    alert('Options saved.');
  });
}

function loadOptions() {
  chrome.storage.sync.get({
    'SITP.urlFormat': 'http://myissuetracker.com/issues/view?id=####',
    'SITP.issuePrefix': '#'
  }, function(url) {
    document.getElementById('url').value = url['SITP.urlFormat'];
    document.getElementById('prefix').value = url['SITP.issuePrefix'];
  })
}

document.addEventListener('DOMContentLoaded', loadOptions);
document.getElementById('save').addEventListener('click', saveOptions);
