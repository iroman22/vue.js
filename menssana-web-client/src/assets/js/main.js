// Get all the nav-btns in the page

// Add an event handler for all nav-btns to enable the dropdown functionality
addEventListener('click', function() {
        // Get the dropdown-menu associated with this nav button (insert the id of your menu)
        let dropDown = document.getElementById('dropdown');
        let dropDownMenu = document.getElementById('dropdown-menu');

        // Toggle the nav-btn and the dropdown menu
        dropDown.classList.toggle('active');
        dropDownMenu.classList.toggle('dropdown-shown');

});

// // Get all the nav-btns in the page
// let navBtn = document.querySelector('#header-btn');

// // Add class to the element
// navBtn.addEventListener('click', function() {
//         navBtn.classList.add('.active');
// });


//login

