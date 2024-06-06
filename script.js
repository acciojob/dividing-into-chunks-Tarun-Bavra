const arr = [1, 2, 3, 4, 1, 0, 2, 2];
const divide = (arr, n) => {
  // Write your code here
	let l=arr.length;
	let ans = []
	let subarr = [];
	for(let i=0;i<l;i++)
	{
		let sum=0;
		for (let j = i; j < l; j++)
		{
		   sum=sum+arr[j]//1,3,
			if(sum<=n)//n=4
			{
			 subarr=susubarr.push(arr[j])//subarr=[1,2]
			 ans.push(subarr);//ans=[[1],]
			}
		} 
	}
	return ans;
};
const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
