//https://github.com/jubaerahmedtamim/assignment-javascript

// kilometer to meter 
function kilometerToMeter(n){
    var meter =n * 1000;
    return meter;
}
var result1 = kilometerToMeter(Math.abs(-5));
console.log(result1);

// budget calculator
function budgetCalculator(watch, phone, laptop){
    var watchPrice = Math.abs(watch * 50);
    var phonePrice = Math.abs(phone * 100);
    var laptopPrice = Math.abs(laptop * 500);
    var total = watchPrice + phonePrice + laptopPrice;
    return total;
}
var result2 = budgetCalculator(-5,-3,-2);
console.log(result2);

// hoter cost 
function hotetCost(days){
if(days <= 10){
    var firstPhase = days * 100;
    return firstPhase;
}
else if (days <= 20) {
    var firstPhase = 10*100;
    var remainingDays = days - 10;
    var secondPhase = remainingDays * 80;
    var total1 = firstPhase + secondPhase;
    return total1;
}
else{
    var firstPhase = 10*100;
    var secondPhase = 10*80;
    var remainingDays = days - 20;
    var thirdPhase = remainingDays * 50;
    var total2 = firstPhase + secondPhase + thirdPhase;
    return total2;
}
}
var result3 = hotetCost(Math.abs(-15));
console.log(result3);

// mega Friends

function megaFriend(arrayName){
    var element = 0;
for(var i = 0; i < arrayName.length; i++){
    if (arrayName[i].length > element) {
        element = arrayName[i].length;
        var largestElement = arrayName[i];
    }    
}
return largestElement;
}
var arrayName = ['kamal','Baml', 'Thalam','Mofizzur Rahman'];
var result4 = megaFriend(arrayName);
console.log(result4);
