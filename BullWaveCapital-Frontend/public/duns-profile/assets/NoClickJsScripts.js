function disableSelection(target) {
    if (typeof target.onselectstart != "undefined") //IE route
        target.onselectstart = function () { return false }
    else if (typeof target.style.MozUserSelect != "undefined") //Firefox route
        target.style.MozUserSelect = "none"
    else //All other route (ie: Opera)
        target.onmousedown = function () { return false }
    target.style.cursor = "default"
 var a = getUrlParameter('Global');

if (a!= null && a!= undefined && a== 1)
{
    var Purchasereportlink= document.getElementById("Purchasereportlink")
    if (Purchasereportlink != undefined) {
document.getElementById('Purchasereportlink').style.display = 'none';
}
var apurchaserpt= document.getElementsByClassName("apurchaserpt")[0]
    if (apurchaserpt != undefined) {

document.getElementsByClassName('apurchaserpt')[0].style.visibility='hidden';
}
}
var TltPageTitle1=document.getElementById("TltPageTitle")
if (TltPageTitle1 != undefined) {
document.getElementById('TltPageTitle').innerText = 'D&B D-U-N-S Registered™';
}

elePhone = document.getElementById("LblPhone");

if(elePhone != null)
{

  var LblPhoneC = document.getElementById("LblPhone").innerText;

    LblPhoneA = LblPhoneC.replace(/\(0\)/g, " ");
    document.getElementById("LblPhone").innerText = LblPhoneA;
    var LblPhoneC = document.getElementById("LblPhone").innerText;
}
eleFax = document.getElementById("LblFax");

if(eleFax != null)
{

var LblFaxC= document.getElementById("LblFax").innerText;
  LblFaxA = LblFaxC.replace(/\(0\)/g, " ");
    document.getElementById("LblFax").innerText = LblFaxA;
    var LblFaxC = document.getElementById("LblFax").innerText;

  }
  
   

  


}
//Sample usages
//disableSelection(document.body) //Disable text selection on entire body
//disableSelection(document.getElementById("mydiv")) //Disable text selection on element with id="mydiv"

function getUrlParameter(name) {

    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');

    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');

    var results = regex.exec(location.search);

    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));

};

 

 

setTimeout(purchaserpt, 1000);

function purchaserpt() {

   var a = getUrlParameter('Global');

    if (a != null && a != undefined && a == 1)
{
var Purchasereportlink= document.getElementById("Purchasereportlink")
    if (Purchasereportlink != undefined) {
        document.getElementById('Purchasereportlink').style.display = 'none';
}
var apurchaserpt= document.getElementsByClassName("apurchaserpt")[0]
    if (apurchaserpt != undefined) {

document.getElementsByClassName('apurchaserpt')[0].style.visibility='hidden';
}
}
}
var message = "";
///////////////////////////////////
function clickIE() { if (document.all) { (message); return false; } }
function clickNS(e) {
    if
(document.layers || (document.getElementById && !document.all)) {
        if (e.which == 2 || e.which == 3) { (message); return false; } 
    } 
}
if (document.layers)
{ document.captureEvents(Event.MOUSEDOWN); document.onmousedown = clickNS; }
else { document.onmouseup = clickNS; document.oncontextmenu = clickIE; }



