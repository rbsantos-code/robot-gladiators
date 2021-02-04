// Game States
// "WIN" - Player robot has defeated all enemy-robots
//      * Fight all enemy-robots
//      * Defeat each enemy-robots
// "LOSE" - Player robot's health is zero or less

// create function
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this console.log(playName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Andriod", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


var fight = function(enemyName) {
    // fight function statements
    // Alert players that they are starting the round

    while(playerHealth > 0 && enemyHealth > 0) {

        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        // if player choses to fight, then fight
        if (promptFight === "fight" || prompt === "FIGHT") {

            // check enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyName + "has died!");
                break;
            }
            else {
                window.alert(enemyName + "still has" + enemyHealth + "health left.");
            }

            // Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable.
            playerHealth = playerHealth - enemyAttack;

            // Log a resulting message to the console so we know that it worked.
            console.log(
                enemyName + "attacked" + playerName + "." + playerName + "now has" + playerHealth + "Health remaining."
            );

            // put new code under this
            console.log(enemyName + "attacked" + playerName + "." + playerName + "now has" + playerHealth + "health remaining");

            // check player's health
            if (playerHealth <= 0) {
                window.alert(playerName + "has died!");
                break;
                while (enemyHealth > 0 && playerHealth > 0);
            }
        
            else {
                window.alert(playerName + "still has" + playerHealth + "health left.");
            }                   
        }

        // if player choses to "skip" and then stop the loop
        else if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + "has decided to skip this fight. Goodbye!");
                // subtract money from playerMoney from skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
            // if no (false), ask question again by running fight() again
            else {
                fight();
            }

        // Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + "attacked" + enemyName + "." + enemyName + "now has" + enemyHealth + "health remaining"
         );


            window.alert(playerName + "has chosen to skip the fight!");
        }

        else {
            window.alert("You need to choose a valid option. Try again!");
        }
    }
};

// execute function
for(var i = 0; i < enemyNames.length; i++) {
  var pickedEnemyName = enemyNames[i];
  enemyHealth = 50;
  fight(pickedEnemyName);
}