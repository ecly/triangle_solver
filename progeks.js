// Set up!
var a_canvas = document.getElementById("hello");
var context = a_canvas.getContext("2d");

// Draw the face
context.fillStyle = "yellow";
context.beginPath();
context.arc(95, 60, 40, 0, 2*Math.PI);
context.closePath();
context.fill();
context.lineWidth = 2;
context.stroke();
context.fillStyle = "black";

// Draw the left eye
context.beginPath();
context.arc(75, 50, 5, 0, 2*Math.PI);
context.closePath();
context.fill();

// Draw the right eye
context.beginPath();
context.arc(114, 50, 5, 0, 2*Math.PI);
context.closePath();
context.fill();

// Draw the mouth
context.beginPath();
context.arc(95, 65, 26, Math.PI, 2*Math.PI, true);
context.closePath();
context.fill();

// Write "Hello, World!"
context.font = "30px Garamond";
context.fillText("Triangle Solver!",15,140);

// Retvinklet trekant
var b_canvas = document.getElementById("rettriangle");
var context1 = b_canvas.getContext("2d");

context1.moveTo(25,25);
context1.lineTo(25,175);
context1.lineTo(175,175)
context1.closePath();
context1.lineWidth = 2;
context1.stroke();

context1.font = "20px Garamond";
context1.fillText("Right-Angled",47,220);
context1.fillText("a",93,190);
context1.fillText("b",10,100);
context1.fillText("c",103,100);

context1.fillText("A",15,20);
context1.fillText("B",175,190);
context1.fillText("C",15,190);


// Vilkårlig trekant
var c_canvas = document.getElementById("triangle");
var context2 = c_canvas.getContext("2d");

context2.moveTo(100,25);
context2.lineTo(175,175);
context2.lineTo(25,175);
context2.closePath();
context2.lineWidth = 2;
context2.stroke();

context2.font = "20px Garamond";
context2.fillText("Oblique",65,220);
context2.fillText("a",93,190);
context2.fillText("b",42,100);
context2.fillText("c",143,100);

context2.fillText("A",93,20);
context2.fillText("B",175,190);
context2.fillText("C",15,190);

//----------------------------------------------------------------------------------------------------------------//
function degToRad(angle){
	return ((angle*Math.PI) / 180);
}

function radToDeg(angle){
	return ((angle*180) / Math.PI);
}

function isNumberKey(evt){ // Checking if keypress is number (Input validation)
var charCode = (evt.which) ? evt.which : event.keyCode;
if (charCode == 44)
	alert("Use period instead of comma!");

if (charCode != 46 && charCode > 31
&& (charCode < 48 || charCode > 57))
	return false;

return true;
 }

function int(bool){ // Returns 1 if bool>0

if(bool == true){
	return 1
	}
else{
	return 0
	}
}

function round(number){ // Rounds off numbers to three digits
	return (Math.ceil(number*1000)/1000);
	}

function calc(){ //Right-angled triangle's calculation function
loop = true;
document.getElementById("output").innerHTML = ""
do
{
if (loop == true)
{
var a1 = (document.getElementById('a1'));
var b1 = (document.getElementById('b1'));
var c1 = (document.getElementById('c1'));
var A1 = (document.getElementById('A1'));
var B1 = (document.getElementById('B1'));
var output = document.getElementById('output');
/----- Test -----/
var knownsides = int(a1.value!="")+int(b1.value!="")+int(c1.value!="");
var knownangles = int(A1.value!="")+int(B1.value!="");
var totalangle = parseFloat(A1.value) + parseFloat(B1.value) + parseFloat(C1.value);
/----- Test -----/

//----------Validation start----------//
if(a1.value === "" && b1.value === "" && c1.value === "" && A1.value === "" && B1.value === "")
	{
	alert("You didn't enter anything!")
	loop = false;
	break;
	}

if(knownsides == 0){
	alert("You didn't enter any side lengths!")
	loop = false;
	break;
	}

if(parseFloat(A1.value) + parseFloat(B1.value) + 90 > 180){
	alert("Your triangle is invalid!");
	loop = false;
	break;
	}

if(knownsides + knownangles == 1){
	alert("You must enter atleast 2 values!")
	loop = false;
	break;
	}

if(A1.value != "" && B1.value != "" && C1.value != "" && totalangle < 180){
	alert("Your triangle is invalid!");
	loop = false;
	break;
	}
//----------Validation end----------//

if(a1.value !== "" && b1.value !== "" && c1.value == "")
	{
	document.rettriform.c1.value = round(Math.sqrt(a1.value*a1.value+b1.value*b1.value));
	document.getElementById("output").innerHTML += "c=√(a<sup>2</sup>+b<sup>2</sup>)<br>";
	}

if(a1.value !== "" && c1.value!== "" && b1.value == "")
	{
	document.rettriform.b1.value = round(Math.sqrt(c1.value*c1.value-a1.value*a1.value));
	document.getElementById("output").innerHTML += "b=√(c<sup>2</sup>-a<sup>2</sup>)<br>";
	}

if(b1.value !== "" && c1.value!== "" && a1.value == "")
	{
	document.rettriform.a1.value = round(Math.sqrt(c1.value*c1.value-b1.value*b1.value));
	document.getElementById("output").innerHTML += "a=√(c<sup>2</sup>-b<sup>2</sup>)<br>";
	}

if(c1.value !== "" && A1.value !== "" && a1.value == "")
	{
	document.rettriform.a1.value = round((Math.sin(degToRad(A1.value)))*c1.value);
	document.getElementById("output").innerHTML += "a=sin(B)*c<br>"
	}


if(c1.value !== "" && A1.value !== "" && b1.value == "")
	{
	document.rettriform.b1.value = round((Math.sin(degToRad(A1.value)))*c1.value);
	document.getElementById("output").innerHTML += "b=cos(A)*c<br>"
	}

if(A1.value !== "" && B1.value == "")
	{
	document.rettriform.B1.value = 90-A1.value;
	document.getElementById("output").innerHTML += "B=180°-90°-A<br>"
	}

if(B1.value !== "" && A1.value == "")
	{
	document.rettriform.A1.value = 90-B1.value;
	document.getElementById("output").innerHTML += "A=180°-90°-B<br>"
	}

if(A1.value !== "" && a1.value !== "" && c1.value == "")
	{
	document.rettriform.c1.value = round(a1.value/Math.cos(degToRad(A1.value)));
	document.getElementById("output").innerHTML += "c=a/cos(A)<br>"
	}

if(B1.value !== "" && a1.value !== "" && c1.value == "")
	{
	document.rettriform.c1.value = round(a1.value/Math.cos(degToRad(B1.value)));
	document.getElementById("output").innerHTML += "c=a/cos(B)<br>"
	}

if(A1.value !== "" && b1.value !== "" && c1.value == "")
	{
	document.rettriform.c1.value = round(b1.value/Math.cos(degToRad(A1.value)));
	document.getElementById("output").innerHTML += "c=b/cos(A)<br>"
	}

if(B1.value !== "" && b1.value !== "" && c1.value == "")
	{
	document.rettriform.c1.value = round(b1.value/Math.cos(degToRad(B1.value)));
	document.getElementById("output").innerHTML += "c=b/cos(B)<br>"
	}

if(A1.value == "" && B1.value == "")
	{
	document.rettriform.A1.value = round(radToDeg(Math.acos(b1.value/c1.value)));
	document.getElementById("output").innerHTML += "A=Cos<sup>-1</sup>(b/c)<br>"
	}
}
}
while (a1.value == "" || b1.value == "" || c1.value == "" || A1.value == "" || B1.value == "")
}


function calc1(){ //Oblique triangle's calculation function
loop = true;
document.getElementById("output").innerHTML = ""
do
{
if (loop == true)
{
var a2 = (document.getElementById('a2'));
var b2 = (document.getElementById('b2'));
var c2 = (document.getElementById('c2'));
var A2 = (document.getElementById('A2'));
var B2 = (document.getElementById('B2'));
var C2 = (document.getElementById('C2'));
var output = document.getElementById('output');
/----- Test -----/
var knownsides = int(a2.value!="")+int(b2.value!="")+int(c2.value!="");
var knownangles = int(A2.value!="")+int(B2.value!="")+int(C2.value!="");
var totalangle = parseFloat(A2.value) + parseFloat(B2.value) + parseFloat(C2.value);
/----- Test -----/
//----------Validation start----------//
if(a2.value === "" && b2.value === "" && c2.value === "" && A2.value === "" && B2.value === ""){
	alert("You didn't enter anything!");
	loop = false;
	break;
	}

if(knownsides == 0){
	alert("You didn't enter any side lengths!");
	loop = false;
	break;
	}

if(knownsides + knownangles <= 2 ){
	alert("You must enter atleast 3 values!");
	loop = false;
	break;
	}

if(totalangle > 180){
	alert("Your triangle is invalid!");
	loop = false;
	break;
	}

if(A2.value != "" && B2.value != "" && C2.value != "" && totalangle < 180){
	alert("Your triangle is invalid!");
	loop = false;
	break;
	}

if(A2.value == 90 || B2.value == 90 || C2.value == 90){
	alert("Your triangle is not Oblique!")
	loop = false;
	break;
	}
//----------Validation end----------//

//----------Sinusrelations sides start----------//
if(a2.value == "" && A2.value !== "" && b2.value !== "" && B2.value !== ""){
	document.triform.a2.value = round((b2.value*Math.sin(degToRad(A2.value)))/(Math.sin(degToRad(B2.value))));
	document.getElementById("output").innerHTML += "a=(b*sin(A))/sin(B)<br>"
}
if(a2.value == "" && A2.value !== "" && c2.value !== "" && C2.value !== ""){
	document.triform.a2.value = round((c2.value*Math.sin(degToRad(A2.value)))/(Math.sin(degToRad(C2.value))));
	document.getElementById("output").innerHTML += "a=(c*sin(A))/sin(C)<br>"
}

if(b2.value == "" && B2.value !== "" && a2.value !== "" && A2.value !== ""){
	document.triform.b2.value = round((a2.value*Math.sin(degToRad(B2.value)))/(Math.sin(degToRad(A2.value))));
	document.getElementById("output").innerHTML += "b=(a*sin(B))/sin(A)<br>"
}
if(b2.value == "" && B2.value !== "" && c2.value !== "" && C2.value !== ""){
	document.triform.b2.value = round((c2.value*Math.sin(degToRad(B2.value)))/(Math.sin(degToRad(C2.value))));
	document.getElementById("output").innerHTML += "b=(c*sin(B))/sin(C)<br>"
}

if(c2.value == "" && C2.value !== "" && a2.value !== "" && A2.value !== ""){
	document.triform.c2.value = round((a2.value*Math.sin(degToRad(C2.value)))/(Math.sin(degToRad(A2.value))));
	document.getElementById("output").innerHTML += "c=(a*sin(C))/sin(A)<br>"
}
if(c2.value == "" && C2.value !== "" && b2.value !== "" && B2.value !== ""){
	document.triform.c2.value = round((b2.value*Math.sin(degToRad(C2.value)))/(Math.sin(degToRad(B2.value))));
	document.getElementById("output").innerHTML += "c=(b*sin(C))/sin(B)<br>"
}
//----------Sinusrelations sides end----------//
//----------Sinusrelations angles start----------//
if(A2.value == "" && a2.value !== "" && b2.value !== "" && B2.value !== ""){
	document.triform.A2.value = round(radToDeg(Math.asin(degToRad(a2.value)*Math.sin(degToRad(B2.value))/degToRad(b2.value))));
	document.getElementById("output").innerHTML += "sin(A)=(a*sin(B))/b<br>"
}
if(A2.value == "" && a2.value !== "" && c2.value !== "" && C2.value !== ""){
	document.triform.A2.value = round(radToDeg(Math.asin(degToRad(a2.value)*Math.sin(degToRad(C2.value))/degToRad(c2.value))));
	document.getElementById("output").innerHTML += "sin(A)=(a*sin(C))/c<br>"
}

if(B2.value == "" && b2.value !== "" && c2.value !== "" && C2.value !== ""){
	document.triform.B2.value = round(radToDeg(Math.asin(degToRad(b2.value)*Math.sin(degToRad(C2.value))/degToRad(c2.value))));
	document.getElementById("output").innerHTML += "sin(B)=(b*sin(C))/c<br>"
}
if(B2.value == "" && b2.value !== "" && a2.value !== "" && A2.value !== ""){
	document.triform.B2.value = round(radToDeg(Math.asin(degToRad(b2.value)*Math.sin(degToRad(A2.value))/degToRad(a2.value))));
	document.getElementById("output").innerHTML += "sin(B)=(b*sin(A))/a<br>"
}

if(C2.value == "" && c2.value !== "" && a2.value !== "" && A2.value !== ""){
	document.triform.C2.value = round(radToDeg(Math.asin(degToRad(c2.value)*Math.sin(degToRad(A2.value))/degToRad(a2.value))));
	document.getElementById("output").innerHTML += "sin(C)=(c*sin(A))/a<br>"
}
if(C2.value == "" && c2.value !== "" && b2.value !== "" && B2.value !== ""){
	document.triform.C2.value = round(radToDeg(Math.asin(degToRad(c2.value)*Math.sin(degToRad(B2.value))/degToRad(b2.value))));
	document.getElementById("output").innerHTML += "sin(C)=(c*sin(B))/b<br>"
}
//----------Sinusrelations angles end----------//

//----------Cosinuesrelations angles start----------//
if(A2.value == "" && a2.value !== "" && b2.value !== "" && c2.value !== ""){
	document.triform.A2.value = round(radToDeg(Math.acos((b2.value*b2.value+c2.value*c2.value-a2.value*a2.value)/(2*b2.value*c2.value))));
	document.getElementById("output").innerHTML += "cos(A)=(b<sup>2</sup>+c<sup>2</sup>-a<sup>2</sup>)/(2*b*c)<br>"
}

if(B2.value == "" && a2.value !== "" && b2.value !== "" && c2.value !== ""){
	document.triform.B2.value = round(radToDeg(Math.acos((a2.value*a2.value+c2.value*c2.value-b2.value*b2.value)/(2*a2.value*c2.value))));
	document.getElementById("output").innerHTML += "cos(B)=(a<sup>2</sup>+c<sup>2</sup>-b<sup>2</sup>)/(2*a*c)<br>"
}

if(C2.value == "" && a2.value !== "" && b2.value !== "" && c2.value !== ""){
	document.triform.C2.value = round(radToDeg(Math.acos((a2.value*a2.value+b2.value*b2.value-c2.value*c2.value)/(2*a2.value*b2.value))));
	document.getElementById("output").innerHTML += "cos(C)=(a<sup>2</sup>+b<sup>2</sup>-c<sup>2</sup>)/(2*a*b)<br>"
}
//----------Cosinuesrelations angles end----------//
//----------Cosinuesrelations sides start----------//
if(a2.value == "" && A2.value !== "" && b2.value !== "" && c2.value !== ""){
	document.triform.a2.value = round(Math.sqrt(b2.value*b2.value+c2.value*c2.value-2*b2.value*c2.value*(Math.cos(degToRad(A2.value)))));
	document.getElementById("output").innerHTML += "a<sup>2</sup>=b<sup>2</sup>+c<sup>2</sup>-2*b*c*cos(A)<br>"
}

if(b2.value == "" && B2.value !== "" && a2.value !== "" && c2.value !== ""){
	document.triform.b2.value = round(Math.sqrt(a2.value*a2.value+c2.value*c2.value-2*a2.value*c2.value*(Math.cos(degToRad(B2.value)))));
	document.getElementById("output").innerHTML += "b<sup>2</sup>=a<sup>2</sup>+c<sup>2</sup>-2*a*c*cos(B)<br>"
}

if(c2.value == "" && C2.value !== "" && a2.value !== "" && b2.value !== ""){
	document.triform.c2.value = round(Math.sqrt(a2.value*a2.value+b2.value*b2.value-2*a2.value*b2.value*(Math.cos(degToRad(C2.value)))));
	document.getElementById("output").innerHTML += "c<sup>2</sup>=a<sup>2</sup>+b<sup>2</sup>-2*a*b*cos(C)<br>"
}
//----------Cosinuesrelations sides end----------//
//----------Cosinuesrelations specials start----------//
if(A2.value !== "" && B2.value !== "" && C2.value == ""){
	document.triform.C2.value = round(180-A2.value-B2.value);
	document.getElementById("output").innerHTML += "C=180-A-B<br>"
}

if(C2.value !== "" && B2.value !== "" && A2.value == ""){
	document.triform.A2.value = round(180-C2.value-B2.value);
	document.getElementById("output").innerHTML += "A=180-C-B<br>"
}

if(A2.value !== "" && C2.value !== "" && B2 == ""){
	document.triform.B2.value = round(180-A2.value-C2.value);
	document.getElementById("output").innerHTML += "B=180-A-C<br>"
}
//----------Cosinuesrelations specials end----------//
}
}
while (a2.value == "" || b2.value == "" || c2.value == "" || A2.value == "" || B2.value == "")
}

function clear0()
{
document.getElementById("rettriform").reset();
document.getElementById("output").innerHTML = "";
}

function clear1(){
document.getElementById("triform").reset();
document.getElementById("output").innerHTML = "";
}