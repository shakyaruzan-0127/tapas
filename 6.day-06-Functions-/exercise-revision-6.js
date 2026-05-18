//callack function
function callback(callB) {
    console.log('call');
    callB();
}

callback(function() {
    console.log('back');
})

//real life callback

function pizzaShop(callback) {
    console.log('making pizza');
    callback();
}
pizzaShop(function() {
    console.log('ring the bell');
});