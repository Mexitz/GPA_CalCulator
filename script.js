// select elements
const addBtn = document.getElementById("AddHolder");
const calculateBtn = document.getElementById("Calculate");
const subDivs = document.querySelectorAll('[id^="Sub"]');
const title = document.getElementById("Title");

// set initial state
let subCount = 0;

// add event listeners
addBtn.addEventListener("click", addSub);
calculateBtn.addEventListener("click", calculateGPA);

// function to add a new sub
function addSub() {
  if (subCount < 9) {
    subCount++;
    const sub = document.getElementById(`Sub${subCount}`);
    sub.style.display = "grid";
    if (subCount === 9) {
      addBtn.disabled = false;
      addBtn.style.opacity = "0.5";
    }
  } else {
    alert("You can't add more than 9 subjects.");
  }

  document.getElementById("MainD").classList.add("show");


  
  switch (subCount) {
    case 1:
      
      document.getElementById("MainD").style.height = "18%";

      break;
    case 2:
      document.getElementById("MainD").style.height = "28%";

      break;
    case 3:
      document.getElementById("MainD").style.height = "35%";
      break;
    case 4:
      document.getElementById("MainD").style.height = "41%";
      break;
    case 5:
      document.getElementById("MainD").style.height = "50%";
      break;
    case 6:
      document.getElementById("MainD").style.height = "58%";
      break;
    case 7:
      document.getElementById("MainD").style.height = "64%";
      break;
    case 8:
      document.getElementById("MainD").style.height = "71%";
      break;
    case 9:
      document.getElementById("MainD").style.height = "78%";
      break;
}

      switch(subCount) {
        case 1:
          document.getElementById("Calculations").style.top = "-40%";
          
          
          break;
        case 2:
          document.getElementById("Calculations").style.top = "-30%";
          
          break;
        case 3:
          document.getElementById("Calculations").style.top = "-20%";
          break;
        case 4:
          document.getElementById("Calculations").style.top = "-10%";
          break;
        case 5:
          document.getElementById("Calculations").style.top = "0%";
          break;
        case 6:
          document.getElementById("Calculations").style.top = "6%";
          break;
        case 7:
          document.getElementById("Calculations").style.top = "16%";
          break;
        case 8:
          document.getElementById("Calculations").style.top = "23%";
          break;
        case 9:
          document.getElementById("Calculations").style.top = "27%";
          break;

}

document.getElementById("Calculations").classList.add("transition-button");
}
// -----------------------------------------------------------------------

// Get references to the HTML elements
const Title = document.getElementById('Title');

const grade1 = document.getElementById('Grade');
const hours1 = document.getElementById('Hours');

const grade2 = document.getElementById('Grade2');
const hours2 = document.getElementById('Hours2');

const grade3 = document.getElementById('Grade3');
const hours3 = document.getElementById('Hours3');

const grade4 = document.getElementById('Grade4');
const hours4 = document.getElementById('Hours4');

const grade5 = document.getElementById('Grade5');
const hours5 = document.getElementById('Hours5');

const grade6 = document.getElementById('Grade6');
const hours6 = document.getElementById('Hours6');

const grade7 = document.getElementById('Grade7');
const hours7 = document.getElementById('Hours7');

const grade8 = document.getElementById('Grade8');
const hours8 = document.getElementById('Hours8');

const grade9 = document.getElementById('Grade9');
const hours9 = document.getElementById('Hours9');

// Add event listeners to the select elements
grade1.addEventListener('change', calculateGPA);
grade2.addEventListener('change', calculateGPA);
grade3.addEventListener('change', calculateGPA);
grade4.addEventListener('change', calculateGPA);
grade5.addEventListener('change', calculateGPA);
grade6.addEventListener('change', calculateGPA);
grade7.addEventListener('change', calculateGPA);
grade8.addEventListener('change', calculateGPA);
grade9.addEventListener('change', calculateGPA);

// Function to calculate the GPA
function calculateGPA() {
  // Get the values of the input fields
  var grade1 = parseFloat(document.getElementById("Grade").value) || 0;
  var grade2 = parseFloat(document.getElementById("Grade2").value) || 0;
  var grade3 = parseFloat(document.getElementById("Grade3").value) || 0;
  var grade4 = parseFloat(document.getElementById("Grade4").value) || 0;
  var grade5 = parseFloat(document.getElementById("Grade5").value) || 0;
  var grade6 = parseFloat(document.getElementById("Grade6").value) || 0;
  var grade7 = parseFloat(document.getElementById("Grade7").value) || 0;
  var grade8 = parseFloat(document.getElementById("Grade8").value) || 0;
  var grade9 = parseFloat(document.getElementById("Grade9").value) || 0;
  //-----------------------------------------------------------------------
  var hours1 = parseFloat(document.getElementById("Hours").value) || 0;
  var hours2 = parseFloat(document.getElementById("Hours2").value) || 0;
  var hours3 = parseFloat(document.getElementById("Hours3").value) || 0;
  var hours4 = parseFloat(document.getElementById("Hours4").value) || 0;
  var hours5 = parseFloat(document.getElementById("Hours5").value) || 0;
  var hours6 = parseFloat(document.getElementById("Hours6").value) || 0;
  var hours7 = parseFloat(document.getElementById("Hours7").value) || 0;
  var hours8 = parseFloat(document.getElementById("Hours8").value) || 0;
  var hours9 = parseFloat(document.getElementById("Hours9").value) || 0;

  // Calculate total grade points
  var totalGradePoints = grade1 * hours1 + grade2 * hours2 + grade3 * hours3 + grade4 * hours4 + grade5 * hours5 + grade6 * hours6 + grade7 * hours7 + grade8 * hours8 + grade9 * hours9;

  // Calculate total credit hours
  var totalCreditHours = hours1 + hours2 + hours3 + hours4 + hours5 + hours6 + hours7 + hours8 + hours9;

  // Calculate GPA
  var gpa = totalGradePoints / totalCreditHours;

  if (hours1 > 12 || hours2 > 12 || hours3 > 12 || hours4 > 12 || hours5 > 12 || hours6 > 12 || hours7 > 12 || hours8 > 12 || hours9 > 12 || hours1 < 0 || hours2 < 0 || hours3 < 0 || hours4 < 0 || hours5 < 0 || hours6 < 0 || hours7 < 0 || hours8 < 0 || hours9 < 0) {
    alert("لا يمكن إدخال أكثر من 12 ساعة لكل مقرر");
  } else {
    document.getElementById("Title").innerHTML = "معدلك الفصلي هو : " + gpa.toFixed(2);
  }

}