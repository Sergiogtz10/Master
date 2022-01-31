function calculateBillTotal(preTaxAndTipAmount) {
    let tax = 0.095
    let tip = 0.15
    let bill = preTaxAndTipAmount+(preTaxAndTipAmount*tax)+(preTaxAndTipAmount*tip)  
    return bill
}
var output = calculateBillTotal(20);
console.log(output); // --> 24.9