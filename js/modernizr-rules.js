/* modernizr controls for cross-browser good things happen */
console.log(Modernizr);

//what to do if user doesn't support flexbox

if (!Modernizr.flexbox) {
    alert('Please view thisissimulcast.com in a modern browser like Google Chrome');
};

//what to do if user doesn't support html5 audio
if (!Modernizr.audio) {
    alert('Please view thisissimulcast.com in a modern browser like Google Chrome');
};

//what to do if user doesn't support webaudio
if (!Modernizr.webaudio) {
    alert('Please view thisissimulcast.com in a modern browser like Google Chrome');
};

//what to do if user doesn't support gradients
if (!Modernizr.cssgradients) {
    alert('Please view thisissimulcast.com in a modern browser like Google Chrome');
};

//what to do if user doesn't support getusermedia
if (!Modernizr.getusermedia) {
    alert('Uh oh! Looks like your browser does not support mic input. Please view this page in a modern browser like Google Chrome');
};