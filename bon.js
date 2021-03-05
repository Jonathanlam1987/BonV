
const hamburgerBtn = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');

function toggleButton() {
    navList.classList.toggle('show');
}
hamburgerBtn.addEventListener('click', toggleButton); 





// const dropBtn = document.getElementsByClassName('.dropbtn');
// const dropDownContent = document.getElementsByClassName('.dropdown-content');

// function displayDropDown() {
//     document.body.style.backgroundColor = 'blue'
// }

// document.addEventListener('click', displayDropDown)


function displayDropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  function dropNeighbor() {
    document.getElementById("myNeighborhood").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  // window.onclick = function(event) {
  //   if (!event.target.matches('.dropbtn')) {
  //     var dropdowns = document.getElementsByClassName("dropdown-content");
  //     var i;
  //     for (i = 0; i < dropdowns.length; i++) {
  //       var openDropdown = dropdowns[i];
  //       if (openDropdown.classList.contains('show')) {
  //         openDropdown.classList.remove('show');
  //       }
  //     }
  //   }
  // }