const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const throttle = require('lodash.throttle');

player.on('play', function () {});

player.on(
    'timeupdate',
    throttle(function (data) {
        localStorage.setItem('videoplayer-current-time', Math.floor(data.seconds));
    }, 1000),
);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time')).catch(function (error) {
    switch (error.name) {
        default:
            break;
    }
});
