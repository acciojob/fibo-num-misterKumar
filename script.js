function isFibonacci(num) {
			let prev = 0, next = 1;
			while (next <= num) {
				if (next === num) {
					return true;
				}
				let newNext = prev + next;
				prev = next;
				next = newNext;
			}
			return false;
		}
		
		const input = parseInt(prompt("Enter a number"));
		
		alert(isFibonacci(input)); //"8" - true