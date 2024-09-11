// // find the sum of all elements in an array

// var arr = [2,4,2,5,7,54,3]
// var i,sum=0
// for(i=0;i<arr.length;i++)
// {
//     sum = sum + arr[i]
// }
// document.write("sum:",sum)
// document.write("<br/>")



// // factorial of a given no

// var num = 5,ans=1
// for(let i=num;i>0;i--)
// {
//     ans *=i
// }
// document.write(ans)
// document.write("<br/>")



// find prime no
function isPrime(num)
{
    if(num<=1)
    {
        return false
    }
    else if(num===2)
    {
        return true
    }
    else if (num % 2 === 0) {
        return false; 
    }
    for(let i=3;i<=Math.sqrt(num);i=i+2)
    {
        if(num%i===0)
        {
            return false
        }
    }
    return true
}

var arr = [2,4,2,5,7,54,3]
for(let i=0;i<arr.length;i++)
{
   if(isPrime(arr[i]))
   {
    document.write(`${arr[i]} is prime. `)
   }
   else{
    document.write(`${arr[i]} not prime. `)
   }
}


// find vowvels from string

