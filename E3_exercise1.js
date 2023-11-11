const array = [1, 2, 5, 0, 'n', true, 12, 0, 13, 'str', 14, 8, 11, 6, 4]
function arrayInfo(array) {
	for (let i = 0; i <= array.length-1; i = i + 1){
		if (i == 0) {evenCou = 0; oddCou = 0; zeroCou = 0}
     		switch (typeof(array[i]))
         			{case 'number':
           	      			if (array[i] == 0)
					{zeroCou += 1;
					console.log(`${array[i]} is zero (num=${zeroCou})`)}
                 			else {
					if (array[i]%2 == 0)
						{evenCou += 1;
						console.log(`${array[i]} is even (num=${evenCou})`)}
					else {oddCou += 1;
						console.log(`${array[i]} is odd (num=${oddCou})`)}
					}
	                 		break
            	 	case 'boolean':
                 			console.log(`${array[i]} is boolean`);
                 			break
             		case 'string':
                 			console.log(`${array[i]} is string`);
                 			break
             		default:
                 			console.log(`${array[i]} is other`)
         			}
    		}
	console.log(array, `Odds= ${oddCou}, evens= ${evenCou}, zeros= ${zeroCou}`)
}
arrayInfo(array)
