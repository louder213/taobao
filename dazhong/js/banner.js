 class FantasyCard {
 	//设置构造方法 参数1:li 参数2:div块
 	constructor(newOli, newOimg) {
 		this.oLi = newOli;
 		this.oImg = newOimg;
 		this.index = 0;
 		this.oLi[this.index].style.background = "white";
 		this.oImg.style.background = "url(img/" + this.index + ".jpg) no-repeat center";
		this.oImg.style.backgroundSize = "cover"
 	} 
 	//设置li此时背景颜色的状态
 	setLiColor() {
 		for (let i = 0; i < this.oLi.length; i++) {
 			if (i == this.index) {
 				this.oLi[i].style.background = "white";
 			} else {
 				this.oLi[i].style.background = "black";
 			}
 		}
 	}		
 	//设置div此时背景的状态
 	setOimgBackGround() {
 		this.oImg.style.background = "url(img/" + this.index + ".jpg) no-repeat center";
		this.oImg.style.backgroundSize = "cover"		
 	}		
 	//点下一个
 	nextImage() {
 		this.index++;
 		if (this.index == this.oLi.length) {
 			this.index = 0;
 		}
 		this.setLiColor();
 		this.setOimgBackGround();
 	}
 	//点上一个
 	previousImage() {
 		this.index--;
 		if (this.index == -1) {
 			this.index = this.oLi.length-1;
 		}
 		this.setLiColor();
 		this.setOimgBackGround();
 	}		
 	//绑定btn的事件
 	eventBindBtn() {
 		let btn1 = document.getElementById("btn1");
 		let btn2 = document.getElementById("btn2");
 		let that = this;
 		btn1.onclick = function() {
 			that.previousImage();
 		}
 		btn2.onclick = function() {
 			that.nextImage();
 		}
 	}
 	//绑定li的事件
 	eventBindLi() {
 		for (let i = 0; i < this.oLi.length; i++) {
 			let that = this;
 			this.oLi[i].onclick = function() {
 				that.index = i;
 				that.setLiColor();
 				that.setOimgBackGround();
 			}
 		}
 	}
 	//自动播放
 	atuoMove(){
 		let that = this;
 		setInterval(function(){
 			that.index++;
 			if(that.index == that.oLi.length){
 				that.index = 0;
 			}
 			that.setLiColor();
 			that.setOimgBackGround();
 		},4000)
 	}
 }
let oli = document.getElementsByClassName("oli");
 let oImg = document.getElementById("oImg");
 	
 let fc = new FantasyCard(oli, oImg);
 
 fc.eventBindBtn();
 fc.eventBindLi();
 fc.atuoMove();