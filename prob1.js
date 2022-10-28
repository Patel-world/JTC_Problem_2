 function solution(arr){
    var a=[]
    arr.sort((a,b)=>b-a)
    while(arr.length>0){
        console.log(arr,a)
        if(arr.length>1){
            a.push(arr[0])
            a.push(arr[arr.length-1])
        }
        else{
            a.push(arr[0])
        }
        arr.splice(0,1)
        arr.splice(arr.length-1,1)
        
    }
        
    return a
 }

console.log(solution([2,4,6,8,10]))