//screen handling
$(document).ready(function() {
    $('#enableMic').hide();
    $('#lyrics').hide();
    $('#third').hide();
    $('#fourth').hide();
    $('#fifth').hide();
    $('#sixth').hide();
    $('#soundcount').html(soundcount);

    var timer = 0; //timer starters when songs starts - a way to track lyrics, "human" is 3:42 or 222 seconds
    
    /* lyric handling
    */

    function lyricTimer(tag) {
        if (tag === "stop") {
            timer = 0;
            $("#elapsed").remove();
        }
        else {
            clocktime = timer.toString();
            console.log('time is ' + clocktime.toHHMMSS());
            $("#time").html(clocktime.toHHMMSS());
            checkTime(timer);
            timer++;
            //console.log('new time ' + timer);
            setTimeout(function(){ lyricTimer(); }, 1000);
        }
    };

    function checkTime(time) {
        /*first verse*/
        if (time === 14) {
            $('#line1').html("I wanna " + "spoil my stomach");
            $('#line2').html("I want " + "advice so bad");
        }
        if (time === 21) {
            $('#line1').html("I wanna " + "know what's coming");
            $('#line2').html("I wanna " + "know, and I wanna react");
        }
        if (time === 29) {
            $('#line1').html("I wanna " + randomLine());
            $('#line2').html("I wanna " + randomLine());
        }
        if (time === 36) {
            $('#line1').html("I wanna " + randomLine());
            $('#line2').html("I wanna " + randomLine());
        }
        if (time === 44) {
            $('#line1').html("I wanna " + randomLine());
            $('#line2').html("I wanna " + randomLine());
        }
        if (time === 51) {
            $('#line1').html("I wanna " + randomLine());
            $('#line2').html("I wanna " + randomLine());
        }
        if (time === 59) {
            $('#line1').html("I wanna " + randomLine());
            $('#line2').html("I wanna " + randomLine());
        }
        if (time === 66) {
            $('#line1').html("I wanna " + randomLine());
            $('#line2').html("AND I DON'T WANNA BE A HUMAN ANYMORE");
        }
        /*first chorus*/
        if (time === 79) {
            $('#line1').html("GUITAR SOLO");
            $('#line2').html("")
        }

        /*second verse*/
        if (time === 93) {
            $('#line1').html("I wanna " + randomLine());
            $('#line2').html("I want " + randomLine());
        }
        if (time === 100) {
            $('#line1').html("I wanna " + randomLine());
            $('#line2').html("I wanna " + randomLine());
        }
        if (time === 108) {
            $('#line1').html("I wanna " + randomLine());
            $('#line2').html("I wanna " + randomLine());
        }
        if (time === 115) {
            $('#line1').html("I wanna " + randomLine());
            $('#line2').html("I wanna " + randomLine());
        }
        if (time === 123) {
            $('#line1').html("I wanna " + randomLine());
            $('#line2').html("I wanna " + randomLine());
        }
        if (time === 131) {
            $('#line1').html("I wanna " + randomLine());
            $('#line2').html("I wanna " + randomLine());
        }
        if (time === 138) {
            $('#line1').html("I wanna " + randomLine());
            $('#line2').html("I wanna " + randomLine());
        }
        if (time === 146) {
            $('#line1').html("I wanna " + randomLine());
            $('#line2').html("AND I DON'T WANNA BE A HUMAN ANYMORE");
        }

        /*second chorus*/
        /*guitar solo*/
        if (time === 158) {
            $('#line1').html("GUITAR SOLO");
            $('#line2').html("");
        };

        /*third verse */
        if (time === 188) {
            $('#line1').html("I WANNA SEE ALL MY FRIENDS AT ONCE");
            $('#line2').html("I WANNA SEE ALL MY FRIENDS AT ONCE");
        };

        /* end */
        if (time === 202) {
            $('#line1').html("");
            $('#line2').html("");
        };
    };

    function randomLine() {
        random = Math.floor(Math.random() * lines.length);
        //console.log(random);
        return lines[random];
    };


    /* click events
    */
    $('#firstclick').click(function() {
        $('#first').hide();
        $('#second').show();
    });

    $('#enableMic').click(function() {
        voice.play();
        $('#second').hide();
        $('#third').show();
    });

    $('#recordStart').click(function() {
        console.log('recording started');
        // plays and records at same start
        backingTrack.play();
        mixerTrack.rec.record();
        $('#third').hide()
        $('#lyrics').show();
        lyricTimer();
    });

    $('#recordStop').click(function() {
        console.log('recording stopped');
        $('#lyrics').hide();
        $('#fourth').show();
        backingTrack.stop();
        voice.stop();
        mixerTrack.rec.stop();
        //download recording — e is the array blob passed in
        mixerTrack.rec.exportAudio(function(e){
            //var url = (window.URL || window.webkitURL).createObjectURL(e);
            //console.log(url);
            //console.log(e);
            upload(e);
            //Recorder.forceDownload(e, "sessionoutput.mp3");
        });
        lyricTimer("stop");
    });

    $('#download').click(function() {
        mixerTrack.rec.exportAudio(function(e) {
            Recorder.forceDownload(e, "yoursimulcast.mp3");
        })
    });
    /* someone else's code that makes play exclusive */
     
    $("audio").on("play", function() {
        $("audio").not(this).each(function(index, audio) {
            audio.pause();
        });
    });

    /*
    someone else's code that adds a prototype to convert a string to an hours/minutes/seconds readout
    i modified it to remove hours
    */

    String.prototype.toHHMMSS = function () {
        var sec_num = parseInt(this, 10); // don't forget the second param
        var minutes = Math.floor((sec_num) / 60);
        var seconds = sec_num - (minutes * 60);

        if (minutes < 10) {minutes = minutes;}
        if (seconds < 10) {seconds = "0"+seconds;}
        var time    = minutes+':'+seconds;
        return time;
    }
});