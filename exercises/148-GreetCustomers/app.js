var customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3
  },
  'Carrie': {
    visits: 4
  }
};

function greetCustomer(firstName) {
  var greeting = '';
	
  // your code here
  if (!Object.keys(customerData).includes(firstName)) {
    greeting = "Welcome! Is this your first time?";
	}
  else if (customerData[firstName].visits == 1) {
    greeting = "Welcome back, Joe! We're glad you liked us the first time!";
  }
  else if (customerData[firstName].visits > 1) {
    greeting = "Welcome back, Carol! So glad to see you again!";
  }
	
  return greeting;
}

let output = greetCustomer('Joe');
console.log(output);