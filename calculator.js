function precendence(operator) {
    if(!isNan(operator))
        return 1;
    if(operator=="+" || operator=="-")
        return 2;
    if(operator=="*" || operator=="/")
        return 3;
    if(operator=="(")
        return 4;
    if(operator==")")
        return 5;
}

function doOperation(a,b,op) {
    switch (op) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
    }
}

function action(arr1,arr2) {
    let op=arr1.pop();
    let a=arr2.pop();
    let b=arr2.pop();
    let result=doOperation(a,b,op);
    arr2.push(result);

}

    function f(expression) {
    var valueStack=[];
    var operatorStack=[];
    for(var i=0;vari<expression.length;++i){
        if(f(expression[i]==1))
            valueStack.push(Number(expression[i]))
       else if(f(expression[i]==4))
            operatorStack.push(expression[i]);
        else if(expression[i]==5){
            while(operatorStack.top()!="("){
                action(operatorStack,valueStack);
            }
            operatorStack.pop();
        }
        else{
            while(precendence(operatorStack.top()) >= precendence(expression[i])) {
                action(operatorStack,valueStack);
            }
            operatorStack.push(expression[i]);
        }
    }
    while (!operatorStack.empty()){
        action(operatorStack,valueStack);
    }
    return valueStack.top();
    }
