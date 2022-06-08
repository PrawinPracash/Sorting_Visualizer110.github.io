


async function selection_sort_run(){


	let eles=document.querySelectorAll('.bar');
	for(let i=0;i<eles.length-1;i++){

		eles[i].style.background='blue';
		let mn_ele_ind=i;
		
		await waitforme(delay);
		eles[mn_ele_ind].style.background='yellow';
		for(let x=i+2;x<eles.length;x++){


			
			eles[x].style.background='red';
			await waitforme(delay);
			if(parseInt(eles[x].style.height)<parseInt(eles[mn_ele_ind].style.height)){
				
				eles[mn_ele_ind].style.background='cyan';
				mn_ele_ind=x;
				eles[mn_ele_ind].style.background='yellow';
			}
			else{
				eles[x].style.background='cyan';
			}

		}

		
		await waitforme(delay);
		swap(eles[i],eles[mn_ele_ind]);
		eles[mn_ele_ind].style.background='cyan';
		eles[i].style.background='green';
		



	}
	eles[eles.length-1].style.background='green';



}



let selection_sort=document.getElementById('selection_sort');

selection_sort.addEventListener('click',async function(){

	disable_sorting_btns();
	disable_size_slider();
	await selection_sort_run();
	enable_size_slider();
	enable_sorting_btns();

});



