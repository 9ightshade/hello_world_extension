document.getElementById('saveButton').addEventListener('click', function() {
    let value = document.getElementById('inputValue').value;
    chrome.storage.sync.set({ 'storedValue': value }, function() {
        document.getElementById('status').innerText = 'Value saved: ' + value;
    });
});

document.getElementById('getButton').addEventListener('click', function() {
    chrome.storage.sync.get('storedValue', function(result) {
        document.getElementById('status').innerText = 'Stored value: ' + (result.storedValue || 'Not set');
    });
});
