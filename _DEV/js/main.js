// let myInput = 4716;
let uniqueDigits;
let myInput = document.getElementById('kapInput');
let calculationSteps = document.getElementById('calculation-steps');
let calculationResultsOutput = '';
// let calculatedValue = myInput;
// This is what the "magic number" is, after which the result will always return 6174.
let kaprekarsConstant = 6174;

// console.log('the input', myInput);



function checkSubjectUniqueDigits(theSubject) {
	let subjectSet = new Set(theSubject.toString());
	let setTestResult;
	
	// console.log(subjectSet);
	calculationResultsOutput += '<div><p><strong>Input:</strong> <span class="numbers">' + theSubject +'</span></p>';
	// subjectSet.forEach(value => uniqueDigits += value);
	uniqueDigits = Array.from(subjectSet).join(',');
	calculationResultsOutput += '<p><strong>Unique digits:</strong> <span class="numbers">' + uniqueDigits + '</span></p>';
	
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
	console.log(typeof myNumber);
	console.log(myNumber);
	
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
	
	calculationResultsOutput += '<div class="arithmatic">';
	calculationResultsOutput += subjectLarge + '<br>- ' + subjectSmall + '<hr>';
	if(newSubject == kaprekarsConstant) { calculationResultsOutput += '<span class="solution">'; }
	calculationResultsOutput += newSubject;
	if(newSubject == kaprekarsConstant) { calculationResultsOutput += '</span>'; }
	calculationResultsOutput += '</div></div>';
	
	// console.log('the subject', theSubject);
	// console.log('subject small', subjectSmall);
	// console.log('subject large', subjectLarge);
	// console.log(newSubject);
	
	return newSubject;
}




function crunchNumber(calculatedValue) {
	if(calculatedValue < 1000) {
		console.log('fail: number less than 1,000');
	}
	
	while(calculatedValue != kaprekarsConstant) {
		// console.log('while');
		if (checkSubjectUniqueDigits(calculatedValue) == 'pass') {
			calculatedValue = kaprekarCalculation(calculatedValue);
		}
		else {
			// console.log('Input does not pass unique digits check');
			break;
		}
		
		// console.log('new value', calculatedValue);
	}
	
	// console.log('end while');
	calculationSteps.innerHTML = calculationResultsOutput;
}




document.addEventListener('DOMContentLoaded', function() {
	runCalculationButton = document.getElementById('button--start-calculation');
	
	runCalculationButton.addEventListener('click', function() {
		// console.log('Submit form');
		// console.log(myInput.value);
		if(myInput.value !== kaprekarsConstant) {
			if(checkSubjectUniqueDigits(myInput.value) == 'pass') {
				calculationResultsOutput = '';
				crunchNumber(myInput.value);
				myInput.value = '';
				uniqueDigits = '';
				document.getElementById('calculation-results').classList.remove('hide');
				document.getElementById('error--unique-digits').classList.add('hide');
				document.getElementById('error--kaprekars-constant').classList.add('hide');
			}else{
				document.getElementById('error--unique-digits').classList.remove('hide');
				document.getElementById('calculation-results').classList.add('hide');
			}
		}else{
			document.getElementById('error--kaprekars-constant').classList.remove('hide');
			document.getElementById('calculation-results').classList.add('hide');
		}
	}, false);
});