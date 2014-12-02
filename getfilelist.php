<?PHP
// http://www.the-art-of-web.com/php/directory-list-spl/
function getFileList($dir) {
    // array to hold return value
    $retval = array();

    // add trailing slash if missing
    if(substr($dir, -1) != "/") $dir .= "/";

    // open directory for reading
    $d = new DirectoryIterator($dir) or die("getFileList: Failed opening directory $dir for reading");
    foreach($d as $fileinfo) {
        // skip hidden files
        if($fileinfo->isDot()) continue;
        $retval[] = "{$fileinfo}";
    }
    return $retval;
}
?>

<script>
    //<![CDATA[
    //
    var fileListPhp = '<?php $dirlist = getFileList("./paintings/autogallery"); print json_encode($dirlist); ?>';
    fileListPhp = JSON.parse(fileListPhp);

    function txtEl() {
        var txt = '<?php $dirlist = getFileList("./paintings/autogallery"); print json_encode($dirlist); ?>',
            el = document.createElement('p');
        el.innerHTML = txt;
        document.body.appendChild(el);
    }
    //]]>
</script>

