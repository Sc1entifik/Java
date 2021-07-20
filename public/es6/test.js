'use strict';
// es6 feature: block-scoped "let" delaration
const sentences = [
	{subject: 'JavaScript', verb: 'is', object: 'great'},
	{subject: 'Elephants', verb: 'are', object: 'large'},
];
	// es6 feature: object destructuring
function say({subject, verb, object}) {
	// es6 feature: template strings
	//note that quotes below are bakticks(`) , not single quotes(')
	console.log(`${subject} ${verb} ${object}`);
}
// es6 feature: for..of
for(let s of sentences) {
	say(s);
}
