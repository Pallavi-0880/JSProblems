function repeatStringNumTimes(str, num) {
  var output = "";
  if (num > 0) {
    for (var i = 0; i < num; i++) {
      output = output + str;
    }
    console.log(output);
  }
  else {
    console.log("ERROR");
  }
}

repeatStringNumTimes("pallavi", 5);
repeatStringNumTimes("Simran", -1);
repeatStringNumTimes("Manisha", 0);


var sum = 0;
var num = 0;
function numAdd(num) {
  for (var i = 0; i <= num; i++) {
    sum = sum + i;
  }
  console.log(num);

}

numAdd(5);

