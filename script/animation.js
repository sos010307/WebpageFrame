const app = new Application();

const active = new Active();

function Application(){
	this.init = () => {
		this.set();
		this.event();
	}
	this.event = () => {
		document.addEventListener("click", function(e){app.action(e, e.type)});
		document.addEventListener("scroll", function(e){app.action(e, e.type)});
	}
	this.set = () => {

	}
	this.getScroll = () => {
		return window.scrollY;
	}
	this.action = (e, method) => {
		switch(method) {
			case "click":
				console.log(e);
				break;
			case "scroll":
				active.navbar();
				console.log(this.getScroll());
				break;
		}
	}
	this.test = () => {
		console.log(1);
	}
}


function Active() {
	this.navbar = () => {
		var scroll = app.getScroll(); //페이지의 스크롤 값을 받아옴
		if(scroll >= 300) //스크롤이 300 이상일때, 네비게이션의 크기를 줄임
			document.querySelector("header").style.height="auto";
		else
			document.querySelector("header").style.height="100px";
	}
}

window.onload = function(){
	app.init();	
}