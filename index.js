function iterativeLog(array) {
  array.forEach((element,index) =>{
    console.log(`${index}: ${element}`)
  });
} 

function iterate(callback){
  var friends = ["Jessica","Jennifer","Khristian"]

  friends.forEach(callback);

   return friends;
}
function doToArray(array,callback){
  array.forEach(callback);
}
