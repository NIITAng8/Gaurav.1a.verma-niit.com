console.log('---------------------------------------------------------------------------------')
console.log('Excercise 1: Just say "Hello, World! ')
let  Message='Hello world';
console.log(Message);
console.log('---------------------------------------------------------------------------------')

console.log('####################################################################################')

console.log('---------------------------------------------------------------------------------')
console.log('Excercise 2: it is a leap year.  ')
let year=2004;
let leap_year;

if(year % 4 == 0){
  leap_year = true;
  if(year % 100 == 0 && year % 400 != 0){
    leap_year = false;
  }
  
}else{
  leap_year = false;
}
if(leap_year){
  console.log(year + ' is a leap year.');
}else{
  console.log(year + ' is not a leap year.');
}
console.log('---------------------------------------------------------------------------------')


console.log('####################################################################################')


console.log('---------------------------------------------------------------------------------')
console.log('Excercise 3: calculate how old someone  ')
let ageMapping = new Map();  
ageMapping.set("Years", 1892160000);  
ageMapping.set("MONTHS", 155520000);  
ageMapping.set("Days", 5184000);  
ageMapping.set("Hours", 216000);  
ageMapping.set("Minutes", 3600);  
ageMapping.set("Seconds", 60);  


var age = function (Iage) {
    console.log('Input seconds are : '+ Iage.toString())
    return Math.floor(Iage / ageMapping.get("Years")) + ' Years ' +
        Math.floor((Iage % ageMapping.get("Years")) / ageMapping.get("MONTHS")) + ' MONTHS ' +
        Math.floor(((Iage % ageMapping.get("Years") % ageMapping.get("MONTHS"))) / ageMapping.get("Days")) + ' Days ' +
        Math.floor((((Iage % ageMapping.get("Years") % ageMapping.get("MONTHS")) % ageMapping.get("Days"))) / ageMapping.get("Hours")) + ' Hours ' +
        Math.floor(((((Iage % ageMapping.get("Years") % ageMapping.get("MONTHS")) % ageMapping.get("Days")) % ageMapping.get("Hours"))) / ageMapping.get("Minutes")) + ' Minutes ' +
        Math.floor((((((Iage % ageMapping.get("Years") % ageMapping.get("MONTHS")) % ageMapping.get("Days")) % ageMapping.get("Hours")) % ageMapping.get("Minutes"))) / ageMapping.get("Seconds")) + ' Seconds ';
};
console.log(age(74992640000)); 
console.log('---------------------------------------------------------------------------------')

console.log('####################################################################################')


console.log('---------------------------------------------------------------------------------')
console.log('Excercise 4: count the occurrences of each word in that phrase  ')
function count(str) {
    var obj = {};
    console.log('Input Sentence is : '+ str)
    str.split(" ").forEach(function(el, i, arr) {
      obj[el] = obj[el] ? ++obj[el] : 1;
    });
    
    return obj;
  }
  
  console.log(count("Welcome to our New Angular 8.0. Welcome"));
  console.log('---------------------------------------------------------------------------------')

  
console.log('####################################################################################')


console.log('---------------------------------------------------------------------------------')
console.log('Excercise 5: Reverse a string ')
let revtexta= (text1)=> { console.log('Input Sentence is : '+ text1) ;return text1.split("").reverse().join(""); }
console.log(revtexta("hello"));
console.log('---------------------------------------------------------------------------------')

  
console.log('####################################################################################')


console.log('---------------------------------------------------------------------------------')
console.log('Excercise 6: triangle is equilateral, isosceles, or scalene')
let triangle_check = (num1: number,num2:number,num3: number):void=>
{
    if((num1==num2)&&(num2==num3)&&(num1==num3))
    {
        console.log("Given Triangle is an Equilateral Traingle");
        console.log(num1,num2,num3);
    }

        else if ((num1 != num2)&&(num2 != num3)&&(num1!=num3))
        {
            console.log("Given Triangle is an Scalene Traingle");
            console.log(num1,num2,num3);
        }
        else 
        {
            console.log("Given Triangle is an Isosceles Traingle");
            console.log(num1,num2,num3);
        }
    }       
triangle_check(7,6,7); 

console.log('---------------------------------------------------------------------------------')

  
console.log('####################################################################################')

console.log('---------------------------------------------------------------------------------')
console.log('Excercise 7: Armstrong number')
let armstr = (armschk:number) =>
{
    console.log(armschk);
return new Promise(function(resolve,reject){

    if(armschk==0)
    {
reject("invalid number.")        ;
    }

    let arm: number=0;
    let a: number=0;
    let temp:number=armschk;
    var check=armschk.toString().length;
    while(temp>0)
        {
            a=temp%10;
            temp=Math.floor(temp/10); 
            arm=arm+Math.pow(a,check);
        }   
    if(arm==armschk)
        {
         
      return  resolve(armschk+ " is Armstrong Number");
        }
    else
        {
            return  resolve(armschk+ " is Not Armstrong Number");
        }
})
}
armstr(1634).then(success,failure);
function success(Smessage)
{
console.log(Smessage);    
}
function failure(Fmessage)
{
console.log(Fmessage);    
}
console.log('---------------------------------------------------------------------------------')