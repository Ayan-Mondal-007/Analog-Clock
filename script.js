

let hour = document.getElementById("hour");

let min = document.getElementById("min");

let sec = document.getElementById("sec");



function displayTime(){



    let date = new Date();

    



    // Getting hour, min, sec from Date..



    // code breakdown in smaller part --- code breakdown in smaller part --- code breakdown in smaller part --- code breakdown in smaller part

        // let hh = date.getHours();

        // let mm = date.getMinutes();

        // let ss = date.getSeconds();

    

        // let hRotation = 30 * hh + mm / 2;

        // let mRotation = 6 * mm;

        // let sRotation = 6 * ss;

    

        // hour.style.transform = `rotate(${hRotation}deg)`;

        // min.style.transform = `rotate(${mRotation}deg)`;

        // sec.style.transform = `rotate(${sRotation}deg)`;



        // shortcut

    hour.style.transform = `rotate(${(date.getHours() * 30) + (date.getMinutes() / 2)}deg)`;

    min.style.transform = `rotate(${date.getMinutes() * 6}deg)`;

    sec.style.transform = `rotate(${date.getSeconds() * 6}deg)`;



    // shortcut

}

setInterval(displayTime,1000);
