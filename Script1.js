
function getReport(){

            var grade = "";  
            var  result="";  
            var wtMarks = document.getElementById('txtWebtech').value;
            var CMarks = document.getElementById('txtC').value;
            var JMarks = document.getElementById('txtJava').value;
            var PMarks = document.getElementById('txtPython').value;
            
            //calculate the total marks 
             var totalMarks = wtMarks - (- CMarks) - (- JMarks) - (- PMarks);
        
            var averageMarks = totalMarks / 4;                  
                       
            switch(

                    (averageMarks > 60 && averageMarks <= 100) ? 1 : 
                    (averageMarks > 50 && averageMarks < 60) ? 2 : 
                    (averageMarks > 40 && averageMarks < 50) ? 3 : 0 
                  )
                    
                    {
                        case 1 :grade = "A";result="Excellent!";break;
                        case 2 :grade = "B"; result="Very Good!";break;
                        case 3 :grade = "C"; result="Fair Perfomance!";break;
                        case 0 :grade = "D"; result="Better luck next time!";break;
                    }
                    
                
            //display the results   
            document.getElementById('txtStudentName').value = document.getElementById('txtName').value;
            document.getElementById('txtStudentClass').value = document.getElementById('txtClass').value;
            document.getElementById('txtTotalMarks').value = totalMarks;
            document.getElementById('txtGrade').value = grade;
            document.getElementById('txtResult').value = result;

} 