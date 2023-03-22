let num=[3,2,3,2,2,2];
let n=num.length;
let medium=n/2;
medium=parseInt(medium);
let Majority= majority();
console.log(Majority);
function majority(){
    let count=0;
 for(let i=0;i<n;i++){
   for(let j=0;j<n;j++){
    if(num[i]===num[j]){
        count++;
    }
   }
     if(medium<count){
       return num[i];
     }
     else{
    count=0;
    } 
 }
}