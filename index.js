function convert() {
 var f =  document.getElementById('feren').value
    // var f = 40;
 var c = (f - 32) * 5 / 9;
document.getElementById('ex1').innerHTML = c
}

function big1()
{
    document.getElementById('div1').style.transform = 'scale(0.5)'
    document.getElementById('div2').style.transform = 'scale(1.5)'
    document.getElementById('div1').style.backgroundColor = "white"
}
function big2()
{
    document.getElementById('div2').style.transform = 'scale(0.5)'
    document.getElementById('div1').style.transform = 'scale(1.5)'
    document.getElementById('div2').style.backgroundColor = "white"

}
function circle3()
    {
        document.getElementById('div1').style.backgroundColor = "blue"

    }
    function circle4()
    {
        document.getElementById('div2').style.backgroundColor = "blue"

    }


const stu = {
    id: 1,
    name: 'amaan',
    age: 21,
    by: 2002,
    addr: 'vadodara',
    no: 12345
};

document.getElementById('ex2').innerHTML = "The Student Information is " + stu.id + ", Name: " + stu.name + ", Age: " + stu.age;

function myFunction(){

document.getElementById('demo').innerHTML = "hello " ;
}

let text = "The rain in SPAIN stays mainly in the plain";
const myArr = text.match("ain");
document.getElementById("demo").innerHTML = myArr.length + " " + myArr;

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let size = fruits.length;
// document.getElementById("demo").innerHTML = fruits;
// fruits.sort();
// document.getElementById("demo2").innerHTML = fruits;
// fruits.reverse();
// document.getElementById("demo3").innerHTML = fruits;


// const fruits1 = ["apple","banana","chery","mango","kiwi","orange","watermalen","papaya","grape","apicort"];
// // fruits1.sort();
// document.getElementById('demo4').innerHTML = fruits1 ;
// fruits1.pop();
// document.getElementById('demo5').innerHTML = fruits1 ;
// fruits1.push("avocado");
// document.getElementById('demo6').innerHTML = fruits1 ;


const d = new Date("2002-01-29") ;
document.getElementById('demo2').innerHTML = d.getFullYear();
document.getElementById('demo3').innerHTML = d.getMonth();
document.getElementById('demo4').innerHTML = d.getDay();
document.getElementById('demo5').innerHTML = d.getDate();
document.getElementById('demo6').innerHTML = d.getTime();

function imgchng1(){
    alert("hello");
    document.getElementById('img').src='images/image2.jpg' ;

}


