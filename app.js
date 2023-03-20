var num1Element = document.getElementById('num1');
var num2Element = document.getElementById('num2');
var buttonElement = document.querySelector('button');
var numResults = [];
var textResults = [];
function add(num1, num2) {
    if (typeof (num1) === 'number' && typeof (num2) === 'number')
        return num1 + num2;
    else if (typeof (num1) === 'string' && typeof (num2) === 'string')
        return num1 + num2;
    return +num1 + +num2;
}
function printresult(resultObj) {
    console.log(resultObj.val);
}
buttonElement.addEventListener('click', function () {
    var num1 = num1Element.value;
    var num2 = num2Element.value;
    var numresult = add(+num1, +num2);
    numResults.push(numresult);
    var stringresult = add(num1, num2);
    textResults.push(stringresult);
    printresult({ val: numresult, timestamp: new Date() });
    console.log(numResults, textResults);
});
var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("it worked");
    }, 1000);
});
promise.then(function (result) {
    console.log(result.split('w'));
})
    .catch(function (err) {
    console.log(err);
});
