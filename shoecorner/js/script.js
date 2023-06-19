let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let btn_search = document.querySelector('#btn_search');
let search_txt = document.querySelector('#search_txt');
let search_icon = document.querySelector('#search_icon');
let search_box = document.querySelector('.search_box');
let promobanner = document.querySelector('.promobanner');
let main_navbar = document.querySelector('.main-navbar');
let navbar_icon_menu =  document.querySelector('.navbar-icon-menu');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
	// if (navbar.style.display === "none") {
	// 	navbar.style.display = "block";
	//   } else {
	// 	navbar.style.display = "none";
	// }
}

btn_search.onclick = () => {
	search_box.classList.toggle('visible');
	main_navbar.classList.toggle('adjust-height');
	navbar_icon_menu.classList.toggle('adjust-position');
	navbar.classList.toggle('adjust-position');
	btn_search.classList.toggle('active');

}


