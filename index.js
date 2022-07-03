const data = [{ "day": "mon", "amount": 17.45 }, { "day": "tue", "amount": 34.91 }, { "day": "wed", "amount": 52.36 }, { "day": "thu", "amount": 31.07 }, { "day": "fri", "amount": 23.39 }, { "day": "sat", "amount": 43.28 }, { "day": "sun", "amount": 25.48 }];

var txtLength = document.querySelectorAll(".weekDay").length;
var maxAmount = 0;
var maxIndex = null;

function changeHeight() {

    for (let i = 0; i < 7; i++) {
        var height = (240 * data[i].amount) / 100;
        if (maxAmount < height) {
            maxAmount = height;
            maxIndex = i;
        }
        var graph = document.querySelectorAll(".bar");
        graph[i].setAttribute("style", "height:" + height + "px; ");
        graph[i].classList.add("normal");
        var element = document.querySelectorAll('.info');
        element[i].style.setProperty('--content', '"$'+data[i].amount+'"');
    }

    graph[maxIndex].setAttribute("style", "height:" + maxAmount + "px;");
    graph[maxIndex].classList.add("max");
    
    element[maxIndex].style.setProperty('--content', '"$'+data[maxIndex].amount+'"');
}
