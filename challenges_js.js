    function revName(name,num)
      {
        var name = prompt("What is your name?");
        var number= prompt("Please enter a number between 1 and "+name.length);
        name = name.split('');
        console.log(name);
        name = name.reverse();
        console.log(name);
        name = name.join('');
        console.log(name);
        return name.charAt(number-1);
        }



  function lifetime(age,amount){
    var life= age;
    var days=(90-life)*365;
    return alert("You're lifetime supply is "+(days*amount))
  }

  function reverseCharAt (name, num) {
   var pos = (name.length-1) -num;
   name.charAt(pos);
  }

  userId != password;
  userId.length >= 6 && password.length >= 6;
  !userId.includes("!") && !userId.includes("#") && !userId.includes("$");
  password.includes("!") || password.includes("#") || password.includes("$");
  password != "password"

function checkUserID(userId) {
  alert(userId != "password")
}



  function yourId() {
    var userId = prompt("Enter Id");
    var password = prompt("Enter password");
    // var regularExpression = /[0-9]/
    var Identification = (userId != password  && userId.length >= 6 && (!userId.includes("!") && !userId.includes("#") && !userId.includes("$")));
    var pass = (password != "password")
      && (password.includes("!") || password.includes("#") || password.includes("$"))
      && (password.includes("0") || password.includes("1") || password.includes("2") || password.includes("3") || password.includes("4") || password.includes("5") || password.includes("6") || password.includes("7") || password.includes("8") || password.includes("9"))
      && (password != password.toUpperCase() && password != password.toLowerCase()) ;
    alert("Id is valid: " + (Identification && pass) );
  }

cc("4556737586899855")
var credit card 

  function cc(num){
    var lastNum = num.charAt(15);
    console.log(lastNum);
    var multi1 = (parseInt(num.charAt(14,10))*2)
      multi1=multi1+((multi1>9)*(-9));
    console.log(multi1);
    var multi2 = parseInt(num.charAt(12,10))*2;
    multi2=multi2+((multi2>9)*(-9));
    console.log(multi2);
    var multi3 = parseInt(num.charAt(10,10))*2;
    multi3=multi3+((multi3>9)*(-9));

    console.log(multi3);
    var multi4 = parseInt(num.charAt(8,10))*2;
    multi4=multi4+((multi4>9)*(-9));

    console.log(multi4);
    var multi5 = parseInt(num.charAt(6,10))*2;
    multi5=multi5+((multi5>9)*(-9));

    console.log(multi5);
    var multi6 = parseInt(num.charAt(4,10))*2;
    multi6=multi6+((multi6>9)*(-9));

    console.log(multi6);
    var multi7 = parseInt(num.charAt(2,10))*2;
    multi7=multi7+((multi7>9)*(-9));

    console.log(multi7);
    var multi8 = parseInt(num.charAt(0,10))*2;
    multi8=multi8+((multi8>9)*(-9));

    console.log(multi8);


    var number = multi8 + multi7 + multi6 + multi5+ multi4+ multi3+ multi2+ multi1 + parseInt(num.charAt(1,10))+ parseInt(num.charAt(3,10))+ parseInt(num.charAt(5,10))+ parseInt(num.charAt(7,10))+ parseInt(num.charAt(9,10))+ parseInt(num.charAt(11,10))+ parseInt(num.charAt(13,10));
    console.log(number);


    return number%10 == lastNum;
  }
