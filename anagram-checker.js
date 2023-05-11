module.exports = function (string1, string2) {
  // write your code here
  function removeNonAlpha(string){
    const replaced = string.replace(/[^a-z0-9]/gi, '');
    return replaced.toLowerCase();
  }
  
  let str1 = removeNonAlpha(string1);
  let str2 = removeNonAlpha(string2);
  console.log(str1, str2)
  let res = false;

  if (str1.length !== str2.length) return res;

  while (str1.length > 0) {
    let index = str2.indexOf(str1[0]);
    
    if (index < 0 ){
      res = false;
      break;
    }
    else {
      str1 = str1.slice(1);
      str2 = str2.slice(0, index) + str2.slice(index+1);
      
      console.log(str1, str2);
      res = true;
    }
  }
  
  console.log(res);
  return res;

}
