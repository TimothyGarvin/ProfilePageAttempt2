var jane = document.querySelector("#jane");
var philReq = document.querySelector("#philReq");
var toddReq = document.querySelector("#toddReq");
var count = 2
var countElement = document.querySelector("#count")


function changeName(element) {
    jane.innerText = "John Smith"
}

function remove1(element) {
    philReq.remove()
    count--
    countElement.innerText = count;

}

function remove2(element) {
    toddReq.remove()
    count--
    countElement.innerText = count;
}