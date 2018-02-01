        function chgBoxColor()
        {
            var result = 0;
            while ((result == 0) || (result > 3)) {//run for each box
                var result = myRandomNumber();
            }
            
            switch (result)
            {
                case 1:
                    /*document.write('Case One: ' + result);*/
                    document.getElementById(boxId).className = "stop";//set box color to red
                    break;
                case 2:
                    /*document.write('Case Two: ' + result);*/
                    document.getElementById(boxId).className = "caution";//set box color to yellow
                    break;
                case 3:
                    /*document.write('Case Three: ' + result);//set box color to green*/
                    document.getElementById(boxId).className = "go";
                    break;
                default:
                    document.write('Case Not One, Two, or Three ' + result);//no color set
                    break;
            }
        }

        function myRandomNumber()
        {
            var result = Math.floor((Math.random() * 10) + 1);
            /*document.write("random generator: " + result);*/
            return result;
        }

        function startProcess()
        {
            for (var box = 1; box <= 3; box++)//process the three text boxes
            {
                if (box == 1) {
                    boxId = "one";
                } else if (box == 2) {
                    boxId = "two";
                } else {
                    boxId = "three";
                }
                
                for ( var i = 1; i <= 10; i++)//run change box color function 10X for each text box
                {
                    chgBoxColor();
                } 
            }//end of process text box loop

            var box1Color = document.getElementById("one").className;
            var box2Color = document.getElementById("two").className;
            var box3Color = document.getElementById("three").className;
            if ((box1Color == box2Color) && (box2Color == box3Color)) {//Set text msg based on box color
                 document.getElementById("msg").innerHTML = "Congratulations, you won!";
            } else {
                 document.getElementById("msg").innerHTML = "Sorry, try again!";
            }
          
        }//end of startProcess

        startProcess();

     

   
