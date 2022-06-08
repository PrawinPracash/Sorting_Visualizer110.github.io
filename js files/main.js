



function disable_sorting_btns(){

	document.getElementById('bubble_sort').disabled=true;
	document.getElementById('insertion_sort').disabled=true;
	document.getElementById('selection_sort').disabled=true;
	document.getElementById('merge_sort').disabled=true;
	document.getElementById('quick_sort').disabled=true;
	
	document.getElementById('new-array').disabled=true;
}


function enable_sorting_btns(){

	document.getElementById('bubble_sort').disabled=false;
	document.getElementById('insertion_sort').disabled=false;
	document.getElementById('selection_sort').disabled=false;
	document.getElementById('merge_sort').disabled=false;
	document.getElementById('quick_sort').disabled=false;
	
	document.getElementById('new-array').disabled=false;
}

function disable_size_slider(){
	document.getElementById('size_input').disabled=true;
}

function enable_size_slider(){
	document.getElementById('size_input').disabled=false;
}


function enable_speed_slider(){
	document.getElementById('speed_input').disabled=false;
}


function disable_speed_slider(){
	document.getElementById('speed_input').disabled=true;
}


let delay=260;

let delay_element=document.getElementById('speed_input');
delay_element.addEventListener('input',function(){
	console.log(delay);
	delay=320-parseInt(delay_element.value);
});

let array=[]

create_new_array();

function create_new_array(bars_num=60){

	deleteChild();

	array=[];

	for(let i=0;i<bars_num;i++){

		let x=Math.floor(Math.random()*250)+1;
		array.push(x);
		console.log(x);
	}
	console.log(array);

	let bars=document.getElementById('bars');
	for(let i=0;i<bars_num;i++){

		let bar=document.createElement('div');
		bar.style.height=`${array[i]*2}px`;
		bar.classList.add('bar');
		bar.classList.add(`barNo${i}`);
		bar.classList.add('flex-item');
		bars.appendChild(bar);

	}
	console.log(bars);
}

function deleteChild(){
	let bars=document.getElementById('bars');
	bars.textContent="";
}

let array_size=document.getElementById('size_input');


array_size.addEventListener('input',function(){

	create_new_array(array_size.value);

});

let new_array=document.getElementById('new-array');
new_array.addEventListener('click',function(){
	
	create_new_array(array_size.value);
});


function swap(x,y){

	let temp=x.style.height;
	x.style.height=y.style.height;
	y.style.height=temp;
}

function waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}









