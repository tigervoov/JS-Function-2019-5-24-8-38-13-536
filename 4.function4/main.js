function countWords(message){
    // wirte your code here
    let strArray=message.split(" ")
    return strArray.length
  }
  countWords('Good morning, I love JavaScript.'); // should return 5