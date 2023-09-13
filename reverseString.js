function reverseString(str) {
    let newString = "";
    for (var i = str.length-1; i >= 0; i--) {
        newString += str[i];
    }
    console.log(newString)
}
reverseString("Pallavi"); 
reverseString("Manisha");
reverseString("Simran");