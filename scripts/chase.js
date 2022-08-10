<<<<<<< HEAD
<<<<<<< HEAD
 
=======
=======

>>>>>>> 738fae4f70aa7285cb2970e8c45396c1c06d646b
const tables = [
   {
    id: 1, 
    table: 7,
    reservation: false,
    Time: "12:00pm",
    menuType: "Lunch",
    totalGuestAmount: 4,
    highChairs: true,
    serverName: "Chase",
    soupOrSalad: true,
    entree: ["Fish", "Chicken", "Beef", "Vegetarian"],
    beef: "Med-Rare",
    drinkFromBar: false,
    water: "Sparkling",
    desert: null,
    orderStatus: "In-Progress"
   },
   {
    id: 2, 
    table: 8,
    reservation: true,
    Time: "7:00pm",
    menuType: "Dinner",
    totalGuestAmount: 2,
    highChairs: false,
    serverName: "Chase",
    soupOrSalad: true,
    entree: ["Fish", "Chicken"],
    beef: null,
    drinkFromBar: true,
    water: "Still",
    desert: "Creme brulee",
    orderStatus: "Completed"
   },
   {
    id: 3, 
    table: 9,
    reservation: false,
    Time: "8:00pm",
    menuType: "Dinner",
    totalGuestAmount: 4,
    highChairs: false,
    serverName: "Chase",
    soupOrSalad: false,
    entree: ["Beef", "Beef", "Beef", "Beef"],
    beef: ["Rare", "Med-Rare", "Well", "Rare"],
    drinkFromBar: true,
    water: "Sparkling",
    desert: ["Cheesecake", "Choco-Molton Cake", "Creme brulee", "Ice Cream"],
    orderStatus: "Completed"
   }
]

let chase = '';
for (const table of tables) {
    chase += '\n<section>\n\t<ul>'
    for (const info in table) {
        chase += `\n\t\t<li>${info}: ${table[info]}</li>`
    }
    chase += '\n\t</ul>\n</section>'
}

document.getElementById('chase').innerHTML = chase;









<<<<<<< HEAD
>>>>>>> c35dcfbc1c54c6a38ddcd588825d0760d06582fa
=======

>>>>>>> 738fae4f70aa7285cb2970e8c45396c1c06d646b
