document.getElementById('zipButton').addEventListener('click', function() {
    var zip = new JSZip();
    var files = document.getElementById('fileInput').files;
    for (var i = 0; i < files.length; i++) {
        zip.file(files[i].name, files[i]);
    }
    zip.generateAsync({type:"blob"}).then(function(content) {
        var link = document.createElement('a');
        link.href = URL.createObjectURL(content);
        link.download = 'files.zip';
        link.click();
    });
});
