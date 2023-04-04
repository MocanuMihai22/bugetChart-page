const dropDownMenu= document.querySelector(".dropdown_menu");
const toggleBtn= document.querySelector(".toggle_btn");
const toggleBtnIcon= document.querySelector(".toggle_btn i");

toggleBtn.addEventListener("click", function(){
  dropDownMenu.classList.toggle("open")
})



var budgetInput=document.getElementById("budgetFirebase");
var budgetSpan= document.getElementById("budget");


var expensesInput=document.getElementById("expensesFirebase");
var expensesSpan= document.getElementById("expenses");


var totalSpan= document.getElementById("total");




document.getElementById("form1").addEventListener("submit", (e)=>{
  e.preventDefault(); // PREVENTS PAGE REFRESH when presing submit!!!!
 console.log(budgetInput.value)
 budgetSpan.textContent = parseInt(budgetInput.value)+parseInt(budgetSpan.textContent)

 budgetInput.value = "";
 totalSpan.textContent=  budgetSpan.textContent-expensesSpan.textContent;

 myChart.data.datasets[0].data.splice(0,1,(parseInt(budgetSpan.textContent)))
 myChart.update();
 
 myChart.data.datasets[0].data.splice(2,1,(parseInt(totalSpan.textContent)))
 myChart.update();
})
 
document.getElementById("form2").addEventListener("submit", (e)=>{
  e.preventDefault(); // PREVENTS PAGE REFRESH when presing submit!!!!
 console.log(expensesInput.value)
 expensesSpan.textContent = parseInt(expensesInput.value)+parseInt(expensesSpan.textContent)
 
 expensesInput.value = "";
 totalSpan.textContent=  budgetSpan.textContent-expensesSpan.textContent;

 myChart.data.datasets[0].data.splice(1,1,(parseInt(expensesSpan.textContent)))
 myChart.update();

 myChart.data.datasets[0].data.splice(2,1,(parseInt(totalSpan.textContent)))
 myChart.update();
})



//CHART

const myChart = new Chart("chart", {
    type: 'bar',
    data: {
      labels: ['Budget', 'Expenses', 'Savings'],
      datasets: [{
        label: 'RON',
        data: [0,0,0],
        backgroundColor: [
          'rgba(0, 0, 255, 0.2)',
          'rgba(255, 0, 0, 0.2)',
          'rgba(0, 128, 0, 0.2)'
        ],
        borderColor: [
          'rgb(0, 0, 255)',
          'rgb(255, 0, 0)',
          'rgb(0, 128, 0)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

//TYPING EFFECT

var i = 0;
var j = 0;
var txt = 'Do you know what are you spending your money on?'; /* The text */
var txt2 = 'Me needer';
var speed = 100; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("sentence").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  if(i=== txt.length && i > txt.length){
    i++;
    document.getElementById("sentence").innerHTML += txt2.charAt(j);
    j++;
    setTimeout(typeWriter, speed);
  }
  }
}
typeWriter();
