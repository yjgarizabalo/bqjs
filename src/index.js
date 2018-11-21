import { Header, Hero, Members, Loader } from "./modules/index.js";

const template = `
<div>
	${Loader}
    ${Header}
    ${Hero}
    ${Members}
</div>
`;

document.getElementById("main").innerHTML = template;

var iniciar = document.getElementById('init');

setTimeout(function() {
    iniciar.classList.add('cerrar');
}, 3000)