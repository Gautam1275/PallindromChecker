function checkPalindrome(){
    const inputText = document.getElementById("inputText").value.toLowerCase();

    const reversedText = inputText.split("").reverse().join("");

// split function creates a array of given data or string then reverse function reverse the array and join function will create a string again from the array created by split function.

    if(inputText === reversedText){
        document.getElementById("result").innerHTML="YES, it is a Palindrome";
    }else{
        document.getElementById("result").innerHTML="NO, it is not a Palindrome";
    }

}
function reset(){
    const reset = document.getElementById("inputText")
    reset.value = "";
    const result = document.getElementById("result").innerHTML="";
    result.value= "";
}
