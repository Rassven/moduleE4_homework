function serialOut(start = 5, finish = 15) {
	let counter = start;
	let timerId = setInterval(function(){
		console.log(counter);
        	if (counter == finish)
			{clearInterval(timerId)}
		counter++;
		}, 1000)
	return 'Start!'
}
serialOut()
