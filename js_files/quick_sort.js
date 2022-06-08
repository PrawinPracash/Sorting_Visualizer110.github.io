










async function partition(eles,low,high){

	let pivot=eles[high];
	pivot.style.background='blue';
	let i=low-1;
	for(let j=low;j<=high-1;j++){

		await waitforme(delay);

		if(parseInt(eles[j].style.height)<parseInt(pivot.style.height)){
			i++;
			
			swap(eles[i],eles[j]);
			eles[i].style.background='yellow';
			eles[j].style.background='yellow';
			await waitforme(delay);
		}else{
			eles[j].style.background='red';
		}
		
	}
	
	await waitforme(delay);
	swap(eles[i+1],eles[high]);
	eles[i+1].style.background='green';
	eles[high].style.background='red';

	await waitforme(delay);
	for(let k=0;k<eles.length;k++){
		if(eles[k].style.background!='green') {eles[k].style.background='cyan'};
	}
	return i+1;



}



async function quick_sort(eles,l,r){


	if(l<r){

		let p= await partition(eles,l,r);
		await quick_sort(eles,l,p-1);
		await quick_sort(eles,p+1,r);

	}else if(l >= 0 && r >= 0 && l <eles.length && r <eles.length){
		console.log(l,r);

            eles[r].style.background = 'green';
            eles[l].style.background = 'green';
        }
	



}




async function quick_sort_run(){


	let eles=document.querySelectorAll('.bar');
	await quick_sort(eles,0,eles.length-1);
	eles[eles.length-1].style.background='green';
	


}









let quick_sort_ele=document.getElementById('quick_sort');
quick_sort_ele.addEventListener('click',async function(){

	disable_sorting_btns();
	disable_size_slider();
	await quick_sort_run();
	enable_sorting_btns();
	enable_size_slider();


});




