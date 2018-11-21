export const Loader = `

<style>
	body {
	    margin: 0;
	}
	.init
	{
	    position: absolute;
	    background: #1c1c1c;
	    color: #fff;
	    width: 100%;
	    min-height: 100vh;

	    display: flex; 
	}

	.loader
	{
	    margin: auto;
	    
	    width: 350px;
	    height: 30px;
	    border-radius: 100px;
	    background: slategrey;
	  
	    position: relative;
	}

	.loader:before
	{
	    content: "";
	    position: absolute;
	    background: yellow;
	    border-radius: 100px;
	    width: 0%;
	    height: 30px;

	    animation: loader 3s infinite;
	}

	.loader img {
	    margin: 0;
	    line-height: 30px;
	    padding: 3px;
	    height: 25px;


	    position: absolute;
	    left: 50%;
	    transform: translateX(-50%);
	}

	.cerrar {
	    transform: translateY(-100%);
	    transition: all 0.5s;
	}

	@keyframes loader {
	    90% {
	        width: 100%;
	        opacity: 10;
	    }
	    100% {
	        width: 100%;
	        opacity: 0;
	    }
	}
</style>

<div class="init" id="init">
 <div class="loader" id="loader"></div>
</div>

`