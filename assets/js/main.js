// navbar
const menus = document.querySelector('.menus');
const a = document.querySelectorAll('.nav-link');

a.forEach(event => {
	event.addEventListener("click", ()=> {
		menus.querySelector('.active_nav').classList.remove('active_nav');

		event.classList.add('active_nav')
	})
})
