let textbox = document.querySelector('#requests');

let wordsminute = document.querySelector('#words');

let settings = document.querySelector('#settings');

let reader = document.querySelector('#reader');

let lineshower = document.querySelector('#lineshower');


let words, speed, current, interval;
let withoutcomma;
let newarray = [''];

let str = "";

let count = 0;
let push = count + 5;

let value = textbox.value.length;

let variable = 0;






let start = function (e) {

    if (e.target.id != 'start') {
        return;
    }

    if (!textbox.value.length) {
        return;
    }





    words = textbox.value.split(' ').filter(function (word) {


        return word;


    })



    console.log(words);







    speed = (60 / parseInt(wordsminute.value)) * 1000;

    current = 0;

    run();


}

let run = function () {

    settings.removeAttribute('open');

    interval = setInterval(function () {





        if (!words[current]) {
            end();
            return;
        }



        for (let i = current; i <= current; i++) {
            str = str + words[current] + " ";
        }

        reader.textContent = str;




        current++;


    }, speed);




}




let end = function () {
    clearInterval(interval);
}


let stop = function (event) {
    if (event.target.id !== 'stop')
        return;

    end();
}


let clickHandler = function (event) {
    start(event);
    stop(event);
}

document.addEventListener('click', clickHandler);