const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')

// define more constants and variables here

btn_toggle.onclick = () => {
  calculation.innerHTML = 630610718-length.value
  if(author.style.display === "none")
    {
      author.style.display = "block"
      calculation.style.display = "none"
      btn_toggle.innerHTML = "Display Calculation"
    }
    else
    {
      author.style.display = "none"
      calculation.style.display = "block"
      btn_toggle.innerHTML = "Display Author"
    }
}

// more codes for Search and Reset buttons here
