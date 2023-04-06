// Challenge 1: Student Grade Generator
function generateGrade() {
    const marks = document.getElementById("marks").value;
    if (marks >= 0 && marks <= 100) {
      let grade;
      if (marks > 79) {
        grade = "A";
      } else if (marks >= 60 && marks <= 79) {
        grade = "B";
      } else if (marks >= 50 && marks <= 59) {
        grade = "C";
      } else if (marks >= 40 && marks <= 49) {
        grade = "D";
      } else {
        grade = "E";
      }
      document.getElementById("gradeResult").innerHTML = `Grade: ${grade}`;
    } else {
      document.getElementById("gradeResult").innerHTML = "Invalid input";
    }
  }
  
  // Challenge 2: Speed Detector
  function detectSpeed() {
    const speed = document.getElementById("speed").value;
    if (!isNaN(speed)) {
      const demeritPoints = Math.floor((speed - 70) / 5);
      if (demeritPoints > 12) {
        document.getElementById("speedResult").innerHTML = "License suspended";
      } else if (demeritPoints > 0) {
        document.getElementById("speedResult").innerHTML = `Points: ${demeritPoints}`;
      } else {
        document.getElementById("speedResult").innerHTML = "Ok";
      }
    } else {
      document.getElementById("speedResult").innerHTML = "Invalid input";
    }
  }
  
  // Challenge 3: Net Salary Calculator
  // Challenge 3: Net Salary Calculator
function calculateSalary() {
    // Get user input and convert to a number
    let basicSalary = Number(basicSalaryInput.value);
  
    // Calculate Payee Tax, NHIF, and NSSF deductions
    let payeeTax = 0;
    let nhif = 0;
    let nssf = 0;
  
    if (basicSalary > 24000) {
      payeeTax = (basicSalary - 24000) * 0.25;
      nhif = 1700;
      nssf = Math.min(basicSalary * 0.06, 1800);
    } else if (basicSalary > 16400) {
      payeeTax = (basicSalary - 16400) * 0.21;
      nhif = 1100;
      nssf = Math.min(basicSalary * 0.06, 1080);
    } else if (basicSalary > 11180) {
      payeeTax = (basicSalary - 11180) * 0.15;
      nhif = 850;
      nssf = Math.min(basicSalary * 0.06, 540);
    } else if (basicSalary > 9570) {
      payeeTax = (basicSalary - 9570) * 0.11;
      nhif = 600;
      nssf = Math.min(basicSalary * 0.06, 360);
    } else {
      nhif = 500;
      nssf = Math.min(basicSalary * 0.06, 200);
    }
  
    // Calculate gross salary and net salary
    let grossSalary = basicSalary + nssf;
    let deductions = payeeTax + nhif;
    let netSalary = grossSalary - deductions;
  
    // Output net salary
    salaryResult.textContent = `Net Salary: ${netSalary.toFixed(2)}`;
  }
  