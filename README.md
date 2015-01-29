phpgallery
=================

The website of Timothy Austen

## Introduction
Includes an implementation of php that makes a list of images from the contents of a folder.


## Usage
```javascript
var fileListPhp = '<?php $dirlist = getFileList("./images"); print json_encode($dirlist); ?>';
fileListPhp = JSON.parse(fileListPhp);
```

Then autogallery.js will use the variable fileListPhp to produce a slide show.


