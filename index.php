<!DOCTYPE HTML5>
<head>
    <html lang="en">
    <meta charset="utf-8">
    <title>Simulcast - I Don't Wanna Be A Human Anymore</title>
    <meta name="description" content="">
    <meta name="author" content="tristan">
    <meta name=viewport content="width=device-width, initial-scale=1">
    <link rel='shortcut icon' href='favicon.ico' type='image/x-icon'/ >
    <link rel="stylesheet" href="css/style.css">
    <!-- modernizr -->
    <script language="javascript" src="js/modernizr.js"></script>
    <script language="javascript" src="js/modernizr-rules.js"></script>
    <!-- jquery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script language="javascript" src="js/wad.js"></script>
    <script language="javascript" src="js/Recorderjs/recorder.js"></script>
    <script language="javascript" type="text/javascript" src="js/dom.js"></script>
</head>
<body>
    <div id = "container">
        <div id="title">
        <img width = "15%" src="img/logo.svg"></img><img width = "50%" src="img/logotype.svg"></img>
        </div>
        <div id="dashboard-right">
            ARTIST: SIMULCAST<br>
            SONG: I DON'T WANNA BE<br> A HUMAN ANYMORE<br>
            TIME ELAPSED: <span id="time">0:00</span> of 3:42
        </div>
        <div id="midbar">
            <div id="first" class ="screen">
                I wanna spoil my stomach<br>
                I want advice so bad<br>
                I wanna know what's coming<br>
                I wanna know, and I wanna react<br>
                What do you want?<br>
                <br>
                I want to...
                <br>
                <form action="php/upload_text.php" method="POST">
                    <input name="field1" type="text" />
                    <input type="submit" name="submit" value="SUBMIT">
                </form>
            </div>
        </div>
        <div id="footer">
        </div>
    </div>
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