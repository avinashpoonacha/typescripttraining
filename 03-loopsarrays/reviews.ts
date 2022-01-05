let reviews: number[] = [5,5,4,1,3];

let total:number=0;
for(let i=0;i<reviews.length;i++) {
console.log(reviews[i]);
total +=reviews[i];
}

let average:number = total/reviews.length;

console.log("Review Average-> " + average);

let sportsOne:string[] = ["cricket","football","tennis"];

/* for ( let i=0;i<sportsOne.length;i++){
console.log(sportsOne[i]);
} */
for(let tempSport of sportsOne){
if(tempSport=="football") {
console.log(tempSport + " --> Favorite");
} else {
console.log(tempSport); }

}