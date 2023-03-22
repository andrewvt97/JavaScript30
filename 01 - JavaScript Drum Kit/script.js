window.addEventListener('keydown', (e) => {
    // audio[data-key] is an attribute selector that is also used in CSS
    const audio = document.querySelector(`audio[data-key="${e.key.toUpperCase().charCodeAt(0)}"]`);
    // selects class of key that has a data-key attribute that matches the key code of the key that was pressed
    const key = document.querySelector(`.key[data-key="${e.key.toUpperCase().charCodeAt(0)}"]`);
    if (!audio) return; // stop the function
    audio.currentTime = 0; // rewind to the start because the audio is already playing and needs to restart
    audio.play();
    key.classList.add('playing'); // add the class playing to the key that was pressed
    // also.remove and .toggle
    // need to remove after the transition is done
    // should set transition end event. should not hardcode incase css is changed
});

function removeTransition(e){
    if (e.propertyName !== 'transform') return; // skip if it is not a transform

    this.classList.remove('playing'); // this is the key that was pressed because of key.addEventListener
}

const keys = document.querySelectorAll('.key'); // select all keys
keys.forEach(key => key.addEventListener('transitionend', removeTransition)); // for every key, add event listener for transition end and remove