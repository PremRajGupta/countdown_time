var dest = new Date("Nov 27, 2023 09:36:00").getTime();

    var x = setInterval(function(){

        var now = new Date().getTime();
        var diff = dest - now;

        var days = Math.floor(diff / (1000 * 60 * 60 * 24));
        var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));  
        var seconds = Math.floor((diff% (1000 * 60)) / 1000);
        
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("mins").innerHTML = minutes;
        document.getElementById("secs").innerHTML = seconds;

        if(diff < 0){
            clearInterval(x);
            document.getElementById("days").innerHTML = "00";
            document.getElementById("hours").innerHTML = "00";
            document.getElementById("mins").innerHTML = "00";
            document.getElementById("secs").innerHTML = "00";
        }

    }, 1000 );

