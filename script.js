<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2575.4">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica}
  </style>
</head>
<body>
<p class="p1">document.getElementById('zipButton').addEventListener('click', function() {</p>
<p class="p1"><span class="Apple-converted-space">    </span>var zip = new JSZip();</p>
<p class="p1"><span class="Apple-converted-space">    </span>var files = document.getElementById('fileInput').files;</p>
<p class="p1"><span class="Apple-converted-space">    </span>for (var i = 0; i &lt; files.length; i++) {</p>
<p class="p1"><span class="Apple-converted-space">        </span>zip.file(files[i].name, files[i]);</p>
<p class="p1"><span class="Apple-converted-space">    </span>}</p>
<p class="p1"><span class="Apple-converted-space">    </span>zip.generateAsync({type:"blob"}).then(function(content) {</p>
<p class="p1"><span class="Apple-converted-space">        </span>var link = document.createElement('a');</p>
<p class="p1"><span class="Apple-converted-space">        </span>link.href = URL.createObjectURL(content);</p>
<p class="p1"><span class="Apple-converted-space">        </span>link.download = 'files.zip';</p>
<p class="p1"><span class="Apple-converted-space">        </span>link.click();</p>
<p class="p1"><span class="Apple-converted-space">    </span>});</p>
<p class="p1">});</p>
</body>
</html>
