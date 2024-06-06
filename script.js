const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let l=arr.length;let sum=0
	let ans = []
	let subarr = [];
	for(let i=0;i<l;i++)
	{
		for (let j = i; j < l; j++)
		{
		sum=sum+arr[j]
			if(sum<=n){
			 subarr.push(arr[j])
			ans.push(subarr);
				return ans;
			}
		} 
	}
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
