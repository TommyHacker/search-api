const darkModeBtn = document.querySelector('#dark-mode');
const body = document.querySelector('body');

console.log('hello');

let state = true;

darkModeBtn.addEventListener('click', () => {
	if (state) {
		state = false;
		body.classList.add('dark');
	} else if (!state) {
		state = true;
		body.classList.remove('dark');
	}
});
