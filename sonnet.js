console.log("JAVA TEST");


var sonnet = document.getElementById("sonnet").innerText
var orphanIndex = sonnet.indexOf("orphans");
console.log(orphanIndex);

var orphanLastIndex = sonnet.lastIndexOf(".");
console.log(orphanLastIndex);

document.getElementById("sonnet").innerHTML = document.getElementById("sonnet").innerHTML.replace("winter", "yuletide");
document.getElementById("sonnet").innerHTML = document.getElementById("sonnet").innerHTML.replace(/the/gi, "a large");