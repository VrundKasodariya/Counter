let count = 0;

function inc(){
    count = count + 1;
 
    document.getElementById("count").innerText = count;
}
document.querySelector(".known").style.display = "none";
function dec(){
    count  = count - 1;
 
    document.getElementById("count").innerText = count;
}
let entries = [];
function save() {
    console.log(count);
    entries.push(count);
    document.getElementById("prev").innerText = entries.join(" - ");
    
    document.querySelector(".known").style.display = "block";
    document.getElementById("prev").style.color = "#ffe600";
    document.getElementById("prev").style.display = "block";
}

function resetRecords(){
    entries = [];
    document.querySelector(".known").style.display = "none";
    document.getElementById("prev").style.display = "none";
}
function reset(){
    count = 0;
    document.getElementById("count").innerText = count;
}