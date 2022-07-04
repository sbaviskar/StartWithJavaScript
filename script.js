//Trivial Age Caluculator
alert("Trivial Age Caluculator");

let nameInputFromUser = window.prompt("What is your name?");
let yearInputFromUser = window.prompt("Enter DOB format dd/mm/yyyy (e.g 01/05/1995)").trim();
let parsedInput  = yearInputFromUser.split('/');
const currentDate = new Date();

// console.log(date.getFullYear() - yearInputFromUser);
/*
let isAdult = adultChecker(currentDate.getFullYear(),Number(parsedInput[2]));

function adultChecker( year,  birthYear ){
   // console.log(year - birthYear);
    if((year - birthYear) >= 18){ 
        console.log(year - birthYear);
        return true;
    }else{
        return false;
    } 
}
*/

getZodiacSign(Number(parsedInput[0]),Number(parsedInput[1]));
let age = getAge(Number(parsedInput[2]));
function getAge(birthYear)
{
    return (currentDate.getFullYear() - birthYear );
}

function getZodiacSign(birthDate,birthMonth)
{
    if((birthDate >= 21 && birthMonth == 03) || (birthDate <= 19 && birthMonth == 04))
    {
        alert("Your Zodic Sign is : Aries ");
    }
    else if ((birthDate >= 20 && birthMonth == 04) || (birthDate <= 20 && birthMonth == 05)) {
        alert("Your Zodic Sign is : Taurus ");
    } else if ((birthDate >= 21 && birthMonth == 05) || (birthDate <= 20 && birthMonth == 06)) {
        alert("Your Zodic Sign is : Gemini  ");
    }  else if ((birthDate >= 21 && birthMonth == 06) || (birthDate <= 22 && birthMonth == 07)) {
        alert("Your Zodic Sign is : Cancer   ");
    } else if ((birthDate >= 23 && birthMonth == 07) || (birthDate <= 22 && birthMonth == 08)) {
        alert("Your Zodic Sign is : Leo    ");
    } else if ((birthDate >= 23 && birthMonth == 08) || (birthDate <= 22 && birthMonth == 09)) {
        alert("Your Zodic Sign is : Virgo     ");
    } else if ((birthDate >= 23 && birthMonth == 09) || (birthDate <= 22 && birthMonth == 10)) {
        alert("Your Zodic Sign is : Libra      ");
    } else if ((birthDate >= 23 && birthMonth == 10) || (birthDate <= 21 && birthMonth == 11)) {
        alert("Your Zodic Sign is : Scorpio       ");
    }else if ((birthDate >= 22 && birthMonth == 11) || (birthDate <= 21 && birthMonth == 12)) {
        alert("Your Zodic Sign is : Sagittarius        ");
    }else if ((birthDate >= 22 && birthMonth == 12) || (birthDate <= 19 && birthMonth == 01)) {
        alert("Your Zodic Sign is : Capricorn         ");
    }else if ((birthDate >= 22 && birthMonth == 01) || (birthDate <= 18 && birthMonth == 02)) {
        alert("Your Zodic Sign is : Aquarius        ");
    }else if ((birthDate >= 19 && birthMonth == 02) || (birthDate <= 20 && birthMonth == 03)) {
        alert("Your Zodic Sign is : Pisces         ");
    }

}
alert('Hey ' 
        + nameInputFromUser 
        + "  Your are "
        + age
        +"Year Old"
    );
