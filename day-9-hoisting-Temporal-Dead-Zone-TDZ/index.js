console.log('day-9');
//Hoisting


//Temporal Dead Zone = an area where you cannot access a variable until it is initialized
{
    //TDZ started here for name variable
    console.log(name);// Refrenc error //variable exists but is locked inside TDZ
    //some code
    //some code 
    let name = 'scarlet'; //TDZ ends here for name variable
    //some code
    console.log(name);
}


//Hoisting = creation phase 
chase();
function chase() {
    console.log('tom chase jerry');
    caught();
    //resumes this function after calling the caught function.
}
function caught() {
    console.log('tom caught jerry');
}
/* 
GEC:
    CP: Creation Phase
    chase(): initialize and memory creation
    caught(): initialize and memory creation
    EP: Execution Phase
        FEC for chase() 
            CP:
            EP:
                Tom Chases Jerry
                FEC for caught()
                CP:
                EP:
                Tom Caught Jerry        memory already initialized in creation phase so chase function can be invoked.
         */

test();
var test = function() { //only variable is hoisted. it is a function expression, so function expression doesnt work. 
    console.log('hello');
}


