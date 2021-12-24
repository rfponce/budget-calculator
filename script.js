let list = document.querySelector('select');
let daysContainer = document.getElementById("daysContainer");
let title = document.querySelector('h1');
let now = new Date();
const weekday = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];


document.getElementById("now").textContent = now;

// function generateDays()
// {
//   let month = list.value;
//   let days = null;

//   switch (month)
//   {
//     case "January":
//     case "March":
//     case "May":
//     case "July":
//     case "August":
//     case "October":
//     case "December":
//       days = 31;
//       break;
//     case "April":
//     case "June":
//     case "September":
//     case "November":
//       days = 30;
//       break;
//     case "February":
//       days = 28;
//       break;
//   }
  
//   createCalendar(days, month);
// }

function createGrid() 
{
  daysContainer.innerHTML = '';

  for (let i = 1; i <= 7; i++) // Create days of the week
  {
    let dayWeek = document.createElement('div');

    dayWeek.className = "dayWeek";
    dayWeek.innerText = weekday[i - 1];
    daysContainer.appendChild(dayWeek);
  }

  for (let i = 1; i <= 35; i++) // Create days of the month
  {
    let dayMonth = document.createElement('div');

    dayMonth.className = "day";
    dayMonth.innerText = i;
    daysContainer.appendChild(dayMonth);
  }
}

// list.addEventListener("change", generateDays);
createGrid();