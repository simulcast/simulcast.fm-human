//screen handling
$(document).ready(function() {
    $('#lyrics').hide();
    $('#second').hide();
    $('#third').hide();
    $('#fourth').hide();
    $('#fifth').hide();
$('#sixth').hide();
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
    });

    $('#allStart').click(function() {
        backingTrack.play();
        for (var i = 0; i < wads.length; i++) {
            wads[i].play();
        }
    });

    $('#allStop').click(function() {
        for (var i = 0; i < wads.length; i++) {
            wads[i].stop();
        }
        backingTrack.stop();
    });
});