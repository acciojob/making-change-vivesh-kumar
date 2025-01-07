const makeChange = (c) => {
  // your name here
	c =parseInt(c,10);
	 // Coin values in cents
  const coinValues = { q: 25, d: 10, n: 5, p: 1 };
  
  // Object to store the result
  const result = { q: 0, d: 0, n: 0, p: 0 };

  // Calculate the number of coins for each denomination
  for (const coin in coinValues) {
    result[coin] = Math.floor(c / coinValues[coin]); // Calculate the quotient
    c %= coinValues[coin]; // Update the remaining amount
  }
	return result;
	
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
