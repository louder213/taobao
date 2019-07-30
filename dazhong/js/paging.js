class Paging{
		constructor(newLi){
			this.index = 0;
			this.arrJson = [];
			this.arrOli =  newLi;
		}	
		//获取数据
		getData(){
			let that = this;
			let xhr = new XMLHttpRequest();
			xhr.open("get","list.json",true);
			xhr.onreadystatechange = function(){
				if(xhr.status == 200 && xhr.readyState == 4){
					that.load(xhr.responseText);
				}
			}
			xhr.send();
		}	
		//加载数据
		load(str){
			this.arrJson = JSON.parse(str);
		}		
		//分页赋值
		setPagination(){
			for(let i=this.index*3,j=0; i<this.index*3+3; i++,j++){
				this.arrOli[j].firstElementChild.src = this.arrJson[i].img;
				this.arrOli[j].lastElementChild.innerHTML = this.arrJson[i].info;
			}
		}		
		next(){
			let btnNext = document.getElementById("btn-next");
			let that = this;
			btnNext.onclick = function(){
				that.index++;
				if(that.index == that.arrJson.length/3){
					that.index = 0;
				}
				that.setPagination();
			}
		}		
		previous(){
			let bntPrev = document.getElementById("btn-previous");
			let that = this;
			bntPrev.onclick = function(){
				that.index--;
				if(that.index == -1){
					that.index = that.arrJson.length/3-1;
				}
				that.setPagination();
			}
		}
	}	
	let oLi = document.getElementsByTagName("li");
	let p = new Paging(oLi);
	
	p.getData();
	p.next();
	p.previous();