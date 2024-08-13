// Get all elements with the class 'scanme'
var elements = document.querySelectorAll('.scanme');

// Function to download a file
function downloadFile(url, filename) {
    var a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

// Function to trigger downloads with delay
function downloadWithDelay(elements, delay) {
    elements.forEach(function(element, index) {
        setTimeout(function() {
            // Extract the onmouseover attribute value
            var onmouseoverAttr = element.getAttribute('onmouseover');
            
            // Extract the URL of the mp3 file from the onmouseover attribute
            var urlMatch = onmouseoverAttr.match(/playx\("(.*?)"/);
            console.log(urlMatch)
            if (urlMatch && urlMatch[1]) {
                var url = 'Bursts/' + urlMatch[1];
                
                // Extracting the filename and formatting it as Adam-037.mp3
                var parts = urlMatch[1].split('/');
                var filename = parts[0].split('.')[0] + '-' + parts[1]; // Constructing the filename as Adam-037.mp3
                
                // Trigger the download
                downloadFile(url, filename);
            }
        }, index * delay);
    });
}

// Start downloading with a 2-second delay between each request
downloadWithDelay(elements, 2000); // 2000 milliseconds = 2 seconds
