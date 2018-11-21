import { Header, Hero, Members, Loader } from "./modules/index.js";

const template = `
<div>
    ${Header}
    ${Hero}
    ${Members}
</div>
`;


var init = document.getElementById('main');
	init.innerHTML = Loader;

setTimeout(function() {
	init.innerHTML = template;
    init.classList.add('cerrar');
}, 3000)

