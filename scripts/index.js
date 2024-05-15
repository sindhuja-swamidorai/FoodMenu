let menu = {
       drinks : [
          "Water", "Tea", "Sweet Tea", 
          "Coke", "Dr. Pepper", "Sprite"
        ],
       entrees : [
          "Hamburger w/ Fries", 
          "Grilled Cheese w/ Tater Tots",
          "Grilled Chicken w/ Veggies", 
          "Chicken Fried Steak w/ Mashed Potatoes",
          "Fried Shrimp w/ Coleslaw", 
          "Veggie Plate"
       ],
       desserts: [
          "Cheesecake", "Chocolate Cake", "Snickerdoodle Cookie"
       ]
    };

  // Let the window's onload know there is a function called init
  window.onload = init;    // Do not put () after init!
  // This isn't calling init now -- it 
  // saying call the init function when
  // the window finishes loading
  
  // The init function connect the button to the code that
  // should run when the button is clicked
  function init() {
  
  //Find the SELECT list
  let menuList = document.getElementById("menu");
     
  let unselected = new Option("Select an option", "");
  menuList.appendChild(unselected);
  
  for (let item in menu) {
      let theOption = new Option(item,item)
      menuList.appendChild(theOption);
  }

  menuList.onchange = displaySubMenu;

}

function displaySubMenu() {
    let item = document.getElementById("menu");

    let subMenu = document.getElementById("subMenu");

    selectedItem = item.value;
    
    for (let option in subMenu) {
        subMenu.remove(option.value);
    }

    let unselected = new Option("Select an option", "");
    subMenu.appendChild(unselected);

    for (let subItem of menu[selectedItem]) {
        let theOption = new Option(subItem,subItem)
        subMenu.appendChild(theOption);
    }

}
