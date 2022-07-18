function checkSubjectParameters(theSubject) {
	let subjectSet = new Set(theSubject);
	
	if subjectSet.length > 1 {
		return true;
	}
	else {
		return false;
	}
	
	console.log(subjectSet);
}

function kaprekarConstant() {
	let theSubject = '1111';
	
	checkSubjectParameters(theSubject);
	
	let subjectSmall = theSubject.split('');
	let subjectlarge = Array.from(subjectSmall);
	subjectSmall.sort();
	subjectlarge.reverse();
	
	console.log(theSubject);
	console.log(subjectSmall);
	console.log(subjectlarge);
}

kaprekarConstant();