const app = new Application();

const active = new Active();

var sflag, header;

function Application(){
	this.init = () => {
		this.start();
		this.event();
	}
	this.start = () => {
		sflag = false;
		header = document.querySelector("header"); //이벤트 타겟 헤더
		if(active.getScroll() >= 300)
			active.navbar("down");
	}
	this.event = _ => {
		document.addEventListener("click", function(e){app.action(e, e.type)});
		document.addEventListener("scroll", function(e){app.action(e, e.type)});
	}
	this.action = (e, method) => {
		switch(method) {
			case "click":
				console.log(e);
				break;
			case "scroll":
				if(active.getScroll() >= 200 && header.offsetHeight == 100)
					active.navbar("down");
				else if(active.getScroll() < 200 && header.offsetHeight == 60)
					active.navbar("up");
				break;
		}
	}
}

function Active() {
	this.getScroll = _ => {
		return window.scrollY;
	}	
	this.navbar = (size) => {
		if(size == "down"){
			header.style.height="60px";
			header.style.background="rgba(255,255,255,1)";
		}else if(size == "up"){
			header.style.height="100px";
			header.style.background="rgba(255,255,255,0.6)";
		}
	}
}

window.onload = function(){
	app.init();
}