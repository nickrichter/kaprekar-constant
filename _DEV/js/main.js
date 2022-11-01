let myInput = 4716;
let calculatedValue = myInput;
// This is what the "magic number" is, after which the result will always return 6174.
let kaprekarsConstant = 6174;

// console.log('the input', myInput);



function checkSubjectUniqueDigits(theSubject) {
	let subjectSet = new Set(theSubject.toString());
	let setTestResult;
	
	console.log(subjectSet);
	
	if (subjectSet.size > 1) {
		// console.log('pass');
		setTestResult = 'pass';
		return setTestResult;
	}
	else {
		// console.log('false');
		setTestResult = 'fail';
		return setTestResult;
	}
}




function kaprekarCalculation(myNumber) {
	let theSubject = myNumber;
	// let subjectCheckResult;
	
	// subjectCheckResult = checkSubjectUniqueDigits(theSubject);
	
	// console.log('check result', subjectCheckResult);
	
	let subjectSmallArr = theSubject.toString().split('').sort();
	let subjectLargeArr = Array.from(subjectSmallArr).reverse();
	// subjectSmallArr.sort();
	// subjectLargeArr.reverse();
	
	let subjectSmall = subjectSmallArr.join('');
	let subjectLarge = subjectLargeArr.join('');
	let newSubject = subjectLarge - subjectSmall;
	
	console.log('the subject', theSubject);
	console.log('subject small', subjectSmall);
	console.log('subject large', subjectLarge);
	// console.log(newSubject);
	
	return newSubject;
}




function crunchNumber(calculatedValue) {
	while(calculatedValue != kaprekarsConstant) {
		if (checkSubjectUniqueDigits(calculatedValue) == 'pass') {
			calculatedValue = kaprekarCalculation(calculatedValue);
		}
		else {
			console.log('Input does not pass unique digits check');
			break;
		}
		
		console.log('new value', calculatedValue);
	}
}




document.addEventListener('DOMContentLoaded', function() {
	runCalculationButton = document.getElementById('button--start-calculation');
	
	runCalculationButton.addEventListener('click', function() {
		// userMenuFlyout.classList.add('active');
		
		crunchNumber(1234);
	}, false);
});