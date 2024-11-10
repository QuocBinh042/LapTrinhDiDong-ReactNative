const game = {
    team1: "Bayern Munich",
    team2: "Borussia Dortmund",
    players: [
      [
        "Neuer",
        "Pavard",
        "Martinez",
        "Alaba",
        "Davies",
        "Kimmich",
        "Goretzka",
        "Coman",
        "Muller",
        "Gnabry",
        "Lewandowski",
      ],
      [
        "Burki",
        "Schulz",
        "Hummels",
        "Akanji",
        "Hakimi",
        "Weigl",
        "Witsel",
        "Hazard",
        "Brandt",
        "Sancho",
        "Gotze",
      ],
    ],
    score: "4:0",
    scored: ["Lewandowski", "Gnabry", "Lewandowski", "Hummels"],
    date: "Nov 9th, 2037",
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };
  
  const players1 = game.players[0];
  const players2 = game.players[1];
  

// Goalkeeper from team1
const gk = players1[0];

// Field players from team1 (excluding the goalkeeper)
const fieldPlayers = players1.slice(1); // slice returns a new array without the first element

// All players from both teams combined
const allPlayers = [...players1, ...players2]; // spread all elements from both teams into one array

// Final team1 with additional substitute players
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"]; // spread players1 and add new players

// Destructure odds from the game object
const { team1, x: draw, team2 } = game.odds;

// Function to print goals
const printGoals = (...players) => {
  console.log(`${players.length} goals were scored by: ${players.join(", ")}`);
};

// Test the printGoals function with specific players
printGoals("Davies", "Muller", "Lewandowski", "Kimmich");

// Test the printGoals function with the scored players from the game object
printGoals(...game.scored); // spread the scored array into individual players

// Determine the likely winner based on odds
const likelyWinner = (team1 < team2 && game.team1) || game.team2;
console.log(`${likelyWinner} is more likely to win.`);
