<!DOCTYPE html>
<html>

    <head>
        <title>Timothy Austen: Front-End Developer</title>
        <meta name=description content="Front-end developer">
        <meta name=keywords content="timothy austen, painting, illustration, web development, front-end developer, graphic design">
        <meta name="revisit after" content="15 days">
        <meta name=ROBOTS content=all>
        <meta name="viewport" content="width=device-width, user-scalable=yes">
        <link rel="stylesheet" type="text/css" href="main.css" />
    </head>

    <body>
        <header>
            <object data="banner.svg" type="image/svg+xml" style="display:inline-block;float:left;white-space:nowrap;width:100%;padding:3% 3% 0 0"></object>
            
            <div style="clear:both;"></div>
            <h2 style="margin-top:0">Front-End Developer</h2>
        </header>

        <div id="galleryId"></div>

        <section>
            <div style="font-size:1em;text-align:center;padding:3% 3% 0 3%">
                <a href="http://www.riikkaausten.com">riikka austen photography</a> |
                <a href="http://www.facebook.com/expatriatetaxation">facebook</a> |
                <a href="/art">painting</a> |
                <a href="/selfemploymenttax">expatriates &amp; the self-employment tax</a> |
                <a href="/timestable">multiplication table</a> |
                <a href="/fuel">eur/liter to usd/gallon conversion</a> |
                <a href="/pizza">pizza real estate calculator</a> |
                <a href="/elvis">elvis</a> |
                <a href="https://www.linkedin.com/in/timothyausten">linkedin</a> |
                <a href="tel:+358 40 569 6281">Telephone: +358 40 569 6281</a> |
                <a href="mailto:info@timothyausten.com">info@timothyausten.com</a>
            </div>
        </section>
        

        <?PHP include 'getfilelist.php'; ?>
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
        <script src="autogallery/autogallery.js"></script>
        <script src="main.js"></script>
    </body>
</html>