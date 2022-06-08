

async function insertion_sort_run(){

	let eles=document.querySelectorAll(".bar");
	console.log(eles);
	let n=eles.length;
	eles[0].style.background='green';
	for(let i=1;i<n;i++){
		let key=eles[i].style.height;
		let j=i-1;
		eles[i].style.background='blue';

		await waitforme(delay);

		while(j>=0 && parseInt(eles[j].style.height)>parseInt(key)){
			eles[j].style.background='blue';
			eles[j+1].style.height=eles[j].style.height;
			eles[j+1].style.background='green';
			j--;
			await waitforme(delay);
			for(let x=i;x>=0;x--){
				eles[x].style.background='green';
			} 
			


		}
		eles[j+1].style.height=key;
		eles[i].style.background='green';

	}


}












let insertion_sort=document.getElementById('insertion_sort');

insertion_sort.addEventListener('click', async function(){
	console.log("insertion_sort");
	disable_sorting_btns();
	disable_size_slider();
	await insertion_sort_run();
	enable_sorting_btns();
	enable_size_slider();



});






