

async function merge(eles,l,mid,h){

	let temp=[];
	
	let n1=mid-l+1;
	let n2=h-mid;
	console.log(n2);

	let left=new Array(n1);
	let right=new Array(n2);

	
	for(let i=0;i<n1;i++){
		await waitforme(delay);
		left[i]=eles[l+i].style.height;
		eles[l+i].style.background='yellow';

	}
	
	for(let j=0;j<n2;j++){
		await waitforme(delay);
		right[j]=eles[mid+1+j].style.height;
		eles[j+mid+1].style.background='red';
	}

	let i=0,j=0;
	await waitforme(delay);
	let k=l;
	while(i<n1 && j<n2){

		await waitforme(delay);
		if(parseInt(left[i])<=parseInt(right[j])){
			
			eles[k].style.height=left[i];
			
			if(n1+n2==eles.length) {eles[k].style.background='green';}
			else {eles[k].style.background='lightgreen';}
			k++;i++;
		}else{
			eles[k].style.height=right[j];
			if(n1+n2==eles.length) {eles[k].style.background='green';}
			else {eles[k].style.background='lightgreen';}
			k++;j++;
		}
	}

	while(i<n1){
		await waitforme(delay);
		eles[k].style.height=left[i];
		if(n1+n2==eles.length) eles[k].style.background='green';
			else eles[k].style.background='lightgreen';
		k++;i++;
	}
	while(j<n2){
		await waitforme(delay);
		eles[k].style.height=right[j];
		if(n1+n2==eles.length) eles[k].style.background='green';
			else eles[k].style.background='lightgreen';
		k++;j++;
	}







}


async function merge_sort(eles,l,h){


	if(l==h){
		eles[l].style.background='lightgreen';
		return;
	}
	else if(l<h){

		let mid=l + Math.floor((h - l) / 2);
		await merge_sort(eles,l,mid);
		await merge_sort(eles,mid+1,h);
		await merge(eles,l,mid,h);
	}


}





function merge_sort_run(){



	let eles=document.querySelectorAll('.bar');

	merge_sort(eles,0,parseInt(eles.length-1));





}















let merge_sort_ele=document.getElementById('merge_sort');

merge_sort_ele.addEventListener('click',async function(){

	disable_sorting_btns();
	disable_size_slider();
	await merge_sort_run();
	enable_sorting_btns();
	enable_size_slider();



});


