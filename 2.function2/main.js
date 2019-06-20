function palindrome(message){
    // wirte your code here
    let a=message.split("").reverse().join("");
    if(a==message){
        return true;
    }else{
        return false;
    }

  }
  palindrome('hello'); // should return false
  palindrome('abcba'); // should return true