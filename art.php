<!DOCTYPE html>
<html>

    <head>
        <title>Timothy Austen Painting</title>
        <meta name=description content="Timothy Austen Paintings">
        <meta name=keywords content="timothy austen, painting, illustration, web development"> 
        <meta name="revisit after" content="15 days">
        <meta name=ROBOTS content=all>
        <meta name="viewport" content="width=device-width, user-scalable=yes">
        <link rel="stylesheet" type="text/css" href="main.css" />
    </head>

    <body>
        <header>
            <div class="headerTextWidth">
                <h1 class="headerH1">TIMOTHY&nbsp;AUSTE<span class="ls0">N</span></h1>
                <h2 class="headerH2">Painting<span class="ls0">g</span></h2>
            </div>
        </header>

        <div id="galleryId"></div>

        <section>
            <div style="font-size:1em;text-align:center;padding-top:3%">
                <a href="http://www.riikkaausten.com">riikka austen photography</a> | 
                <a href="https://www.facebook.com/timothyausten">facebook</a>
            </div>
        </section>

        <?PHP include 'getfilelist.php'; ?>
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
        <script src="autogallery/autogallery.js"></script>
        <script src="main.js"></script>
    </body>
</html>