


async function bubble_sort_run(){

	console.log('bubble_sort');
	let eles=document.querySelectorAll(".bar");
	console.log(eles);
	for(let i=0;i<eles.length-1;i++){

		for(let j=0;j<eles.length-i-1;j++){
			console.log(delay);
			eles[j].style.background='blue';
			eles[j+1].style.background='blue';
			
			if(parseInt(eles[j].style.height)>parseInt(eles[j+1].style.height)){
				
				await waitforme(delay);
				swap(eles[j],eles[j+1]);
			}
			eles[j].style.background='cyan';
			eles[j+1].style.background='cyan';
		}
		eles[eles.length-i-1].style.background='green';
	}
	eles[0].style.background='green';
	
		
}




let bubble_sort=document.getElementById('bubble_sort');

bubble_sort.addEventListener('click',async function(){


	disable_sorting_btns();
	disable_size_slider();
	await bubble_sort_run();
	enable_sorting_btns();
	enable_size_slider();


});


