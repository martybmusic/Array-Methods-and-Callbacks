import { fifaData } from './fifa.js';

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/

//(a) Home Team name for 2014 world cup final

const finalGame2014 = fifaData.filter((data) => {
    return data.Year == 2014 && data.Stage === "Final";
 })

let homeTeam = finalGame2014[0]["Home Team Name"];
console.log("The 2014 World Cup Home Team: " + homeTeam);

//(b) Away Team name for 2014 world cup final

let awayTeam = finalGame2014[0]["Away Team Name"];
console.log("The 2014 World Cup Away Team: " + awayTeam);

//(c) Home Team goals for 2014 world cup final

let homeGoals = finalGame2014[0]["Home Team Goals"];
console.log("The 2014 World Cup Home Team's Goals: " + homeGoals);


//(d) Away Team goals for 2014 world cup final

let awayGoals = finalGame2014[0]["Away Team Goals"];
console.log("The 2014 World Cup Away Team's Goals: " + awayGoals);

//(e) Winner of 2014 world cup final */

function gameWinner() {
    if (homeGoals > awayGoals) {
        return homeTeam;
    }
    else {
        return awayTeam;
    }
}

let victor = gameWinner();
console.log("The 2014 World Cup winner: " + victor);


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive data as a parameter
2. Return an array of objects with the data of the teams that made it to the final stage

hint - you should be looking at the stage key inside of the objects
*/

function getFinals(data) {
   let finalStage = fifaData.filter(data => data.Stage === "Final");
   return finalStage;
}

getFinals();
// console.log(getFinals());

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array
2. Receive a callback function getFinals from task 2 
3. Return an array called years containing all of the years in the getFinals data set*/

function getYears(array, callback) {
    let years = callback(array).map(data => data.Year);
    return years;
}

getYears(fifaData, getFinals);

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receives an array
2. Receives the callback function getFinals from task 2 
3. Determines the winner (home or away) of each `finals` game. 
4. Returns the names of all winning countries in an array called `winners` */ 

function getWinners(array, callback) {
    let finalsTeams = callback(array);
    let winner = finalsTeams.map(data => {
        if (data["Home Team Goals"] > data["Away Team Goals"]) {
            return data ['Home Team Name']
        }
        else {
            return data ['Away Team Name']
        }
    });
    return winner;
}



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array
2. Receive a callback function getYears from task 3
3. Receive a callback function getWinners from task 4
4. Return an array of strings that say "In {year}, {country} won the world cup!" 

hint: the strings returned need to exactly match the string in step 4.
 */

function getWinnersByYear(array, CB1, CB2) {
    let cupYear = CB1(array);
    let cupTeam = CB2(array);
    let newData = [];
    for (let i=0; i <cupTeam.length; i++) {
        newData.push("In " + cupYear[i] + ", " + cupTeam[i] + " won the world cup!");
    }
    return newData;
}



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function getAverageGoals to do the following: 
 1. Receive the callback function getFinals from task 2 ensure you pass in the data as an argument
 2. Return the the average number of the total home team goals and away team goals scored per match and round to the second decimal place. 
 
 (Hint: use .reduce and do this in 2 steps) 
 
 Example of invocation: getAverageGoals(getFinals(fifaData));
*/

function getAverageGoals(callback) {
   let average = callback.reduce((score, array) => {
       return score + array['Home Team Goals'] + array['Away Team Goals'];
   }, 0)
   return (average / callback.length).toFixed(2);
}




/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

}



/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

}


/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

}


/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
    console.log('its working');
    return 'bar';
}
export default{
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}
