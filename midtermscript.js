// JavaScript Document
function check_valid_inputs () {
	const form = document.getElementById('form1');
	let firstname = document.getElementById('firstname').value;
	if (firstname.length == 0) {
		let result2 = "Please enter a first name";
		document.getElementById("errormessage").innerHTML = result2;
		check_valid_inputs();
		
	}
	let lastname = document.getElementById('lastname').value;
	if (lastname.length == 0) {
		let result2 = "Please enter a last name";
		document.getElementById("errormessage").innerHTML = result2;
		check_valid_inputs();
		
	}
	let email = document.getElementById('mail').value;
	if (email.length == 0 || email.indexOf("@") == -1) {
		let result2 = "Please enter a valid email";
		document.getElementById("errormessage").innerHTML = result2;
		check_valid_inputs();
	}
	let phone = document.getElementById('number').value;
	if (phone.length == 0) {
		let result2 = "Please enter a valid phone";
		document.getElementById("errormessage").innerHTML = result2;
		check_valid_inputs();
	}
	let datetime = document.getElementById('meeting-time').value;
	let indexofT = datetime.indexOf("T");
	indexofT = indexofT + 1;
	let substringoftime = datetime.substring(indexofT, indexofT+2);
	let newint = parseInt(substringoftime, 10);
	if (newint > 20 || newint < 9) {
		let result2 = "Please enter a time between 9 am and 8pm";
		document.getElementById("timefailure").innerHTML = result2;
		check_valid_inputs();
	}
	let numppl = document.getElementById('numppl').value;
	let price = validate_boxes(numppl);
	if(price != 0) {
		let result2 = "Dear " + firstname + " " + lastname + ", an email confirmation will be sent to you at " + email + " and you will receive text message updates at " + phone + "." + "<br>" + "Your total is $" + price;
		document.getElementById("Confirmation").innerHTML = result2;
	}
	
}
function validate_boxes (numppl) {
	const checkboxarray = [];
	checkboxarray[0] = document.getElementById('gokarting').checked;
	checkboxarray[1] = document.getElementById('batting12').checked;
	checkboxarray[2] = document.getElementById('trampoline12').checked;
	checkboxarray[3] = document.getElementById('minigolf').checked;
	let value = 0;
	let price = 0;
	for (let i = 0; i < checkboxarray.length; i++ ) {
		if (checkboxarray[i] == true) {
			value = 1;
			if (i == 0) {
				price = price + 20;
			}
			else if (i == 1) {
				price = price + 15;
			}
			else if (i == 2) {
				price = price + 10;
			}
			else if (i == 3) {
				price = price + 25;
			}
		}
	}
	price = price * numppl;
	if (value == 0) {
		let result1 = 'Please, check at least one checkbox!';
		document.getElementById("failure").innerHTML = result1;
	}
	return price;	
}

