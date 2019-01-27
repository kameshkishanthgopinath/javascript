var arrm = [12,5334,66] , arrj = [334333,56,44];
var avgm, avgj;


var sum = (a,b) => a+b;

var addm= arrm.reduce(sum);
var addj= arrj.reduce(sum);

var n = arrm.length;
console.log(n); 
avgm = (addm)/ n ; 
//parseFloat(avgm);
avgj=  (addj) / n;
parseFloat(avgj);
console.log(avgm); 
var diff = avgm -avgj; 

if(avgj >=  avgm )//&& avgj == avgm)

   {
console.log('John is winner with ' +parseInt(avgj)+ ' points'); // parse int t0 take the .3333333
    }

 else
    {
console.log('Mary wins by ' + avgm+ ' points')
}
 console.log(addm,addj);
for(let i=0; i<= arrm.length-1; i++)
{
    var sum =0;
    sum = sum + arrm[i];
    console.log(sum);
}


console.log(sum);