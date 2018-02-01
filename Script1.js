
startProcess()
{
    for (var box = 1; box <= 3; box++)//process each box
    {
        if (box == 1) {
            boxClass = "one";
        } else if (box == 2) {
            boxClass = "two";
        } else if (box == 3) {
            boxClass = "three";
        } else {
            boxClass = "unknown";
        }

        for (var i = 1; i >= 10; i++)//run change box color function 10X
        {
            chgBoxColor();
        }//end of for loop for change box color 

        //set msg. depending on colors
        If ((document.getElementById("one").className == document.getElementById("two").className) &&
            (document.getElementById("two").className == document.getElementById("three").className)){
            document.getElementById("msg").innerHTML = "Congratulations, you won!";
        } else {
            document.getElementById("msg").innerHTML = "Sorry, try again!"
        }
           

    }//end of for loop for box

}//end start process

      
/*run random number generator function until you get a number 1,2, or 3*/
     function chgBoxColor()
     { 
            var result = 4;
            if (box == 1) {

            } 
            while ((result == 0) || (result > 3))
            {
                var result = myRandomNumber();
            }

            switch (result)
            {
                case 1:
                    document.write('One: ' + result);//add set class color to red
                    var el = document.getElementById('boxId');
                    el.className = "stop";
                    break;
                case 2:
                    document.write('Two: ' + result);//add set class color to yellow
                    var el = document.getElementById('boxId');
                    el.classname = "caution";
                    break;
                case 3:
                    document.write('Three: ' + result);//add set class color to green
                    var el = document.getElementById('boxId');
                    el.classname = "green"
                    break;
                default:
                    document.write('Not One, Two, or Three ' + result);//need any extra code here?
                    break;
            }
     }

function myRandomNumber()
{
    var result = Math.floor((Math.random() * 10) + 1);
    document.write("random generator" + result);
    return result;
}


