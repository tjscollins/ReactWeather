/*var names = ['Tyler', 'Ria Rose', 'Jim', 'Gerard'];
 */
/*names.forEach(function(name) {
  console.log('forEach', name);
});*/

/*names.forEach((name) => {
  console.log('arrowFunc', name);
});*/

/*names.forEach((name) => console.log('arrowFunc', name));
 */
/*var returnMe = (name) => name + '!';
console.log(returnMe('Tyler'));*/

/*var person = {
  name: 'Tyler',
  greet: function() {
    names.forEach((name) => {
      console.log(this.name + ' says hi to ' + name);
    })
  }
}

person.greet();*/

function add(a, b) {
  return a + b;
}


//addStatement
var addStatement = (a, b) => {
  return a + b
};

//addExpression
var addExpression = (a, b) => a + b;

console.log(addStatement(4, 7));
console.log(addExpression(4, 7)) ;
