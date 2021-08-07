let birthdate = document.querySelector("#dob");
let luckyNumber = document.querySelector("#luckyNum");
let output = document.querySelector("#output");
let check = document.querySelector("#check");


check.addEventListener('click', checkDate);
function checkDate() {
    let sum = calculateSum(birthdate.value);
    console.log(sum);
    if (sum % luckyNumber.value == 0) {
        output.innerHTML = "Awww! your birthday is lucky❤️";
        
    } else {
        output.innerHTML= "Ooops! your birthday is not lucky😐";
        
    }
}
function calculateSum() {
    const result = birthdate.value.replaceAll('-', '');
    let s = 0;
    for (let index = 0; index < result.length; index++) {
        
        s = s + Number(result[index]);
        
    }
    return s;
}

