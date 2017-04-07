var x = 0;
var y = 0;
function myFun() {
    var a = parseFloat(document.getElementById('Text1').value);
    x += a;
    y++;
    var z = parseFloat(x / y);
    document.getElementById('avg').innerHTML = z;
    document.getElementById('kamuth').innerHTML = y;

}
function myFun2()
{
    x = 0
    y = 0
    var z = 0
    document.getElementById('avg').innerHTML = z;
    document.getElementById('kamuth').innerHTML = y;
}