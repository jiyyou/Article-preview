let button = document.querySelector('.card__button');
let footer = document.querySelector('.card__footer');
let shareBox = document.querySelector('.card__sharebox');
let userBox = document.querySelector('.card__userbox');

const toggleShare = () => {
	button.addEventListener('click', e => {
		e.preventDefault();
		if (shareBox.classList.contains('card__sharebox--active')) {
			shareBox.classList.remove('card__sharebox--active');
			footer.classList.remove('card__footer--active');
			button.classList.remove('card__button--active');
			userBox.classList.remove('card__userbox--active');
		}
		else {
			shareBox.classList.add('card__sharebox--active');
			footer.classList.add('card__footer--active');
			button.classList.add('card__button--active');			
			userBox.classList.add('card__userbox--active');
		}
	});
}

toggleShare();