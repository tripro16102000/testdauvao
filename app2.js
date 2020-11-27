//bai1
let n = Number(prompt("Enter your number n"))
let inputNumber = Number(prompt("Enter your input number"))
function findOppositeNumber(n,inputNumber){
    if( n<4 || n%2!=0 || n>20 || parseInt(n)!= n ){
        console.log("Your number is not available") 
    }

    else{
        if(inputNumber > n){
            console.log("Input Number cant be equal to or bigger than n ") 
        }
        else{
            if(inputNumber >= n/2){
                console.log(inputNumber-n/2) 
            }
            else
                console.log(n/2+inputNumber) 
        }
    }
}

findOppositeNumber(n,inputNumber)
//bai2
function merge2String (string1,string2){

    string1 = string1.split("")

    string2=string2.split("")

        let mark = true
        let length=string1.length
        let merge=""
        let i

        if(string1.length>=string2.length){
            length=string2.length
            mark=false
        }
        for(i=0 ;i<length ; i++){
            merge=merge+string1[i]+string2[i]
        }
        if(flag){
            for(i=length;i<string2.length;i++){
             merge=merge+string2[i]
            }
        }
        else{ for(i=length;i<string1.length;i++){
            merge=merge+string1[i]
        }}
        return merge
    }

console.log(merge2String("abc","123"))
console.log(merge2String("abc", "0123") )
console.log(merge2String("abcd", "123"))
