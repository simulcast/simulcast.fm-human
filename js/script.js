/*load in sound file
set env.hold to 500 (in seconds) so that the whole song plays
on callback, remove the loading tag
*/

var backingTrack = new Wad({
    source: 'sounds/human-instrumental.mp3',
    loop: false,
    env : {hold: 240,
           attack: 0
          },
    callback: function() {
        console.log('backing track loaded!');
        $('#loading').remove();
        $('#enableMic').show();
    }
});

/*set up microphone
filter out low frequencies
*/
var voice = new Wad({
    source  : 'mic',
    filter  : {
        type      : 'highpass',
        frequency : 200
    },
    callback: function() {console.log('success!')}
});

// You must give your browser permission to use your microphone before calling play().
//voice.play()

//set up mix bus
var mixerTrack = new Wad.Poly({
    recConfig : { // The Recorder configuration object. The only required property is 'workerPath'.
        workerPath : 'js/Recorderjs/recorderWorkerMP3.js' // The path to the Recorder.js web worker script.
    }
});

//add tracks to mix bus — everything added here will go to the recording
mixerTrack.add(backingTrack);
mixerTrack.add(voice);

//jquery, called on DOM load
var wads = [];
$(document).ready(function() {
    /* load events 
    */
    //creates wads for each sound in php folder
    console.log(sounds);
    for (var i = 0; i < sounds.length ; i++) {
        console.log(sounds[i]);
        wads.push(new Wad({
                source: sounds[i],
                loop: false,
                env : {hold: 240,
                       attack: 0
                      },
                callback: function() {
                    console.log(sounds[i] + 'loaded!');
                }
            })
        )
    }
    console.log(wads);
});

function upload(blob) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'php/upload_mp3.php', true);
    xhr.onload = function(e) {
        console.log('xhr established');
    };
    xhr.send(blob);
}