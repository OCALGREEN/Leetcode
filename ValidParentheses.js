// "()"
// "()[]{}"
// "(]" 
// "(){}}{" "

let case1 = "()"; 
let case2 = "()[]{}"; 
let case3 = "(]"; 
let case4 = "(){}}{"; 

var isValid1 = function(s) {

    let check1 = false; 
    let check2 = false; 
    let check3 = false; 

    for(let i = 0; i < s.length; i++) {
        if(s[i] == "(" && s[i+1] == ")"){
            check1 = true; 
        }
        if(s[i] == "[" && s[i+1] == "]"){
            check2 = true; 
        }
        if(s[i] == "{" && s[i+1] == "}"){
            check3 = true; 
        }
    }

    if(check1 == true && check2 == true && check3 == true) {
        return true; 
    }
    else{
        return false; 
    }
}

console.log(isValid(case1)); 
console.log(isValid(case2));
console.log(isValid(case3));
console.log(isValid(case4));