const branch = document.getElementById('branch');
const section = document.getElementById('section');
const periods2 = document.getElementById('row1_col2');
const periods1 = document.getElementById('row1_col1');
const periods3 = document.getElementById('row1_col3'); // 4 is same
const periods5 = document.getElementById('row1_col5');
const periods6 = document.getElementById('row1_col6');

// Get the select element
var selectElement = document.getElementById("items");
// Add an event listener to the select element
selectElement.addEventListener("change", function() {
  // Get the selected value
  var selectedValue = this.value;
  if(selectedValue == "Computer Science and Engineering"){
    branch.innerText = "Computer Science and Engineering";
    section.innerText = "A";
    periods1.innerText = "Applied Physics-II (L) Mr.Ganesh Maurya Room No. E-217";
    periods2.innerText = "Applied Mathematics-II (L) Mr.Kapil Sharma Room No. E-217";
    periods3.innerText = "Basic of Electrical and Electronics Engineering (L) Mr.Bhism Room No.E-217";
    periods5.innerText = "Multimedia & Animation (Lab) Mr Praveen Room No.-Computer Lab";
    periods6.innerText = "Concept of Programming Using C (Lab) Ms Jyoti Room No.-Computer Lab"; // row 1 completed

    
  }else if(selectedValue == "Mechanicals Engineering"){
    branch.innerText = "Mechanicals Engineering";
    section.innerText = "B";
    periods1.innerText = "Applied Physics-II (L) Mr.Ganesh Maurya Room No. E-217";
    periods2.innerText = "General Engineering (L) Mr.Bhism sir Room No. E-214";
    periods3.innerText = "Applied Mechanics (L) Mr.Gouarav Kumar Room No. E-214";
    periods5.innerText = "Engineering Drawing-II (P) Mr.Ravi Kalra Room No. Drawing hall";
    periods6.innerText = "Applied Mechanics (L) Mr.Gouarav Kumar Room No. WorkShop Lab"; // row 1 completed


  }else if(selectedValue == "Civil Engineering"){
    branch.innerText = "Civil Engineering";
    section.innerText = "C";
    periods1.innerText = "SCA";
    periods2.innerText = "Basics of Mechanical & E.E (L) Mr.Bhism sir Room No. E-207";
    periods3.innerText = "Applied Mechanics (L) Mr.Satish Room No. E-214";
    periods5.innerText = "Computer Aided Drawing (P) Room No. Drawing hall";
    periods6.innerText = "Applied Mechanics (L) Mr.Satish Room No. WorkShop Lab"; // row 1 completed
   

  }

  branch.innerText = selectedValue;
});

