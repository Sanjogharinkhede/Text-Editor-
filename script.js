 let elementOfArea = document.getElementById("count");
        elementOfArea.innerHTML = `The text area contains:  <br> letters: 0 <br> Words : 0`;
        let textOfTextArea;

        function ct() {
            textOfTextArea = document.getElementById('tarea').value;
            elementOfArea.innerHTML = `The text area contains:  <br> Letters: ${textOfTextArea.length + 1} <br> Words : ${textOfTextArea.split(" ").length}`;

        }
        function up() {
            textOfTextArea=document.getElementById('tarea').value;
            tarea.value = textOfTextArea.toUpperCase();
        }
        function lo() {
            textOfTextArea=document.getElementById('tarea').value;
            tarea.value = textOfTextArea.toLowerCase();
        }
        function b() {
            tarea.style.fontWeight = 800;
        }
        function normalText() {
            tarea.style.fontWeight = 100;
            tarea.style.fontStyle = "normal";
        }
        function i() {
            tarea.style.fontStyle = "italic";
        }
        function un(n) {
            if (n == 0) {
                tarea.style.textDecoration = "2px underline black";
            }
            else {
                tarea.style.textDecoration = "none"
            }
        }
        function find()
        {
            let srch=prompt("Enter word to find in text area");
            textOfTextArea=document.getElementById('tarea').value;
            if(textOfTextArea.includes(srch))
            {
                alert(srch +" is present in textarea on index(word no) " + (textOfTextArea.split(" ").indexOf(srch)+1));
            }
            else{
                alert(srch +" is not present in textarea !!");
            }

        }