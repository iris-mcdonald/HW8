function startProcess() {
    var length = 5;
    var width = 6;
    var height = 7;
    var myVolume = getVolume(length, width, height);
    document.write('volume is ' + myVolume);
}


function myFunction() {
    var result = Math.floor((Math.random() * 10) + 1);
    document.write("random generator" + result);
}

<script>
    function startProcess(){
            var length = 5;
            var width = 6;
            var height = 7;
            var myVolume=getVolume(length, width, height);
            document.write('volume is ' + myVolume);
        }

        function getVolume(length, width, height) {
            var result = length * width * height;
            return result;

        }
        startProcess();

    </script>