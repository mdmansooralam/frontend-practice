const nums = [1,30,80,60,10,35,26,66,30,3,369,2]
const strNums = nums.map((num)=>num.toString())
// strNums.sort((a,b)=>{
//      console.log((b+a).localeCompare(a+b))
// })
// console.log(strNums)

// console.log("manso".localeCompare('mansoo'))


function getResultByPath(path, obj) {
  //write your implementation here

  return path.split('.').reduce((acc, p) => {
    if(acc === undefined){
        return undefined
    }
    return acc?.[p]
  },obj)

}
const path = "data.results.[0]";
const obj = {
  data: {
    results:
    {
      status: "completed",
      error: "",
    }
  },
}
console.log(getResultByPath(path, obj));
module.exports = getResultByPath;
