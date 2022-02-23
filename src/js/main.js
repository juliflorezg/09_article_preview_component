const $shareBtns = document.querySelectorAll('.card__share-icon')
const $shareContainer = document.querySelector('#share-container')

for (let i = 0; i < $shareBtns.length; i++) {
	$shareBtns[i].addEventListener('click', event => {
		console.log(event.target, 'click')

		$shareContainer.classList.toggle('hidden')
	})
}
