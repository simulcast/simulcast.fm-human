<!DOCTYPE HTML5>
<head>
    <html lang="en">
    <meta charset="utf-8">
    <title>Simulcast - I Don't Wanna Be A Human Anymore</title>
    <meta name="description" content="">
    <meta name="author" content="tristan">
    <meta name=viewport content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="css/style.css">
    <!-- favicon stuff -->
    <link rel="apple-touch-icon" sizes="57x57" href="favicons/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="favicons/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="favicons/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="favicons/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="favicons/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="favicons/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="favicons/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="favicons/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="favicons/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="favicons/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="favicons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="favicons/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="favicons/favicon-16x16.png">
    <link rel="manifest" href="favicons/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="favicons/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">
</head>
<body>
    <div id = "container">
        <div id="title">
        <img width = "15%" src="img/logo.svg"></img><img width = "50%" src="img/logotype.svg"></img>
        </div>
        <div id="dashboard-right">
            ARTIST: SIMULCAST<br>
            SONG: I DON'T WANNA BE<br> A HUMAN ANYMORE<br>
            <span id="elapsed">TIME ELAPSED: <span id="time">0:00</span> of 3:42</span>
        </div>
        <div id="midbar">
            <div id="second" class ="screen">
                Thank you for letting your desires be known.<br>
                "I Don't Wanna Be A Human Anymore" is a karaoke-style composition.<br>
                You'll have a backing track and a list of lyrics generated as you go.<br>
                There are no rules for melody or rhythm.<br>
                When you're done you can download your version ——<br>
                and versions sung by everyone before you.<br>
                Please proceed only if you're comfortable sending your version to the server.<br>
                You'll need headphones, or else the microphone will feed back.<br>
                Ok?<br>
                <br>
                <span id = "loading">LOADING</span>
                <button id="enableMic" class=".button">I agree. I am ready.</button>
            </div>
            <div id="third" class ="screen">
                Ok, Here we go...<br>
                <br>
                <button id="recordStart">Start!</button>
            </div>
            <div id="lyrics" class = "screen">
                <br>
                <br>
                <br>
                <span id = "line1">intro</span>
                <br>
                <span id = "line2">~noodling~</span>
                <br>
                <br>
                <br>
                <br>
                <button id="recordStop">DONE</button>
            </div>
            <div id="fourth" class ="screen">
                <div id="thanks">
                Thank you for singing<br>
                Here's your version...<br>
                <br>
                <button id="download">DOWNLOAD</button><br>
                </div>
                <div id="playlist">
                And everyone else's...<br>
                <br>
                <?php
                    $dir = "php/*.mp3";
                    $files = glob($dir);
                    rsort($files);
                    //echoes all the files
                    foreach(glob($dir) as $file)
                    {
                        echo '<audio controls><source src="'.$file.'" type=audio/wav></audio><br><br>';
                    }
                ?>
                </div>
            </div>
        </div>

        <div id="footer">
        </div>
    </div>
    <!-- SCRIPTS -->

    <!-- jquery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <!-- modernizr -->
    <script language="javascript" src="js/modernizr.js"></script>
    <script language="javascript" src="js/modernizr-rules.js"></script>
    <script language="javascript" src="js/wad.js"></script>
    <script language="javascript" src="js/Recorderjs/recorder.js"></script>
    <script language="javascript" type="text/javascript" src="js/domTwo.js"></script>
    <script language="javascript" type="text/javascript" src="js/script.js"></script>
    <!--passes .mp3 files in php folder into an array called sounds[] that stores their URLs as strings -->
    <script type="text/javascript">
    var sounds = <?php
            $dir = "php/*.mp3";
            $files = glob($dir);
            rsort($files);
            echo json_encode($files);
        ?>
    ;
    var soundcount = sounds.length;
    </script>
    <!--passes .txt file in php folder into an array called lines[] that stores the user inputted lyrics-->
    <script type="text/javascript">
    <?php
        $lyrics = file('php/lines.txt', FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        $js_array = json_encode($lyrics);
        echo "var lines = ". $js_array . ";\n"
    ?>;
    var linecount = lines.length;
    console.log('lines are ' + lines);
    </script>
</body>