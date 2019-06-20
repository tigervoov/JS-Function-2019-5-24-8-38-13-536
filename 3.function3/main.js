function alphabetSort(message){
    // wirte your code here
    function sortab(a,b){
        return a - b;
    } 
    let strArray=message.split("").sort().join("");
    return strArray;
  }
  alphabetSort('hello'); // should return 'ehllo'