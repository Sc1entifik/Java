'use strict'; // es6 feature: block-scoped "let" delaration

var sentences = [{
  subject: 'JavaScript',
  verb: 'is',
  object: 'great'
}, {
  subject: 'Elephants',
  verb: 'are',
  object: 'large'
}]; // es6 feature: object destructuring

function say(_ref) {
  var subject = _ref.subject,
      verb = _ref.verb,
      object = _ref.object;
  // es6 feature: template strings
  //note that quotes below are bakticks(`) , not single quotes(')
  console.log("".concat(subject, " ").concat(verb, " ").concat(object));
} // es6 feature: for..of


for (var _i = 0, _sentences = sentences; _i < _sentences.length; _i++) {
  var s = _sentences[_i];
  say(s);
}