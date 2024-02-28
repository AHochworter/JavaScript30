const sayHello = () => {
  console.log('You Got This!');
};

sayHello();

/*Play sound associated with that key and pops the button up and flashes the yellow border.
    Add a class of "playing" to our key class in css
        keycode.info -> website will show you the keycodes that are associated with each key
    Data attribute in html - so that people didn't have to make up their own attributes. data-"attribute you want".
            for this exercise data-key
*/

//first let's listen for a key-up event

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  //shift option, down arrow copies the line you're on
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!audio) return; //stop the function if no audio associated

  audio.currentTime = 0;
  audio.play();
  console.log(key);
  key.classList.add('playing');
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
