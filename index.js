function gameObject() {
  return {
      home: {
          teamName: "Brooklyn Nets",
          colors: ["Black", "White"],
          players: {
              "Alan Anderson": {
                  number: 0,
                  shoe: 16,
                  points: 22,
                  rebounds: 12,
                  assists: 12,
                  steals: 3,
                  blocks: 1,
                  slamDunks: 1
              },
              "Reggie Evans": {
                  number: 30,
                  shoe: 14,
                  points: 12,
                  rebounds: 12,
                  assists: 12,
                  steals: 12,
                  blocks: 12,
                  slamDunks: 7
              },
              "Brook Lopez": {
                  number: 11,
                  shoe: 17,
                  points: 17,
                  rebounds: 19,
                  assists: 10,
                  steals: 3,
                  blocks: 1,
                  slamDunks: 15
              },
              "Mason Plumlee": {
                  number: 1,
                  shoe: 19,
                  points: 26,
                  rebounds: 12,
                  assists: 6,
                  steals: 3,
                  blocks: 8,
                  slamDunks: 5
              },
              "Jason Terry": {
                  number: 31,
                  shoe: 15,
                  points: 19,
                  rebounds: 2,
                  assists: 2,
                  steals: 4,
                  blocks: 11,
                  slamDunks: 1
              }
          }
      },
      away: {
          teamName: "Charlotte Hornets",
          colors: ["Turquoise", "Purple"],
          players: {
              "Jeff Adrien": {
                  number: 4,
                  shoe: 18,
                  points: 10,
                  rebounds: 1,
                  assists: 1,
                  steals: 2,
                  blocks: 7,
                  slamDunks: 2
              },
              "Bismak Biyombo": {
                  number: 0,
                  shoe: 16,
                  points: 12,
                  rebounds: 4,
                  assists: 7,
                  steals: 7,
                  blocks: 15,
                  slamDunks: 10
              },
              "DeSagna Diop": {
                  number: 2,
                  shoe: 14,
                  points: 24,
                  rebounds: 12,
                  assists: 12,
                  steals: 4,
                  blocks: 5,
                  slamDunks: 5
              },
              "Ben Gordon": {
                  number: 8,
                  shoe: 15,
                  points: 33,
                  rebounds: 3,
                  assists: 2,
                  steals: 1,
                  blocks: 1,
                  slamDunks: 0
              },
              "Brendan Haywood": {
                  number: 33,
                  shoe: 15,
                  points: 6,
                  rebounds: 12,
                  assists: 12,
                  steals: 22,
                  blocks: 5,
                  slamDunks: 12
              }
          }
      }
  };
}

console.log(gameObject());
function numPointsScored(playerName) {
  const game = gameObject();
  
  for (const team in game) {
      const players = game[team].players;
      
      if (players[playerName]) {
          return players[playerName].points;
      }
  }
}

console.log(numPointsScored("Alan Anderson")); // Should return 22
function shoeSize(playerName) {
  const game = gameObject();
  
  for (const team in game) {
      const players = game[team].players;
      
      if (players[playerName]) {
          return players[playerName].shoe;
      }
  }
}

console.log(shoeSize("Bismak Biyombo")); // Should return 16
function teamColors(teamName) {
  const game = gameObject();
  
  for (const team in game) {
      if (game[team].teamName === teamName) {
          return game[team].colors;
      }
  }
}

console.log(teamColors("Charlotte Hornets")); // Should return ['Turquoise', 'Purple']
function teamNames() {
  const game = gameObject();
  return [game.home.teamName, game.away.teamName];
}

console.log(teamNames()); // Should return ['Brooklyn Nets', 'Charlotte Hornets']
function playerNumbers(teamName) {
  const game = gameObject();
  
  for (const team in game) {
      if (game[team].teamName === teamName) {
          const players = game[team].players;
          return Object.values(players).map(player => player.number);
      }
  }
}

console.log(playerNumbers("Brooklyn Nets")); // Should return [0, 30, 11, 1, 31]
function playerStats(playerName) {
  const game = gameObject();
  
  for (const team in game) {
      const players = game[team].players;
      
      if (players[playerName]) {
          return players[playerName];
      }
  }
}

console.log(playerStats("Jason Terry"));
function bigShoeRebounds() {
  const game = gameObject();
  let largestShoeSize = 0;
  let playerWithLargestShoe;
  
  for (const team in game) {
      const players = game[team].players;
      
      for (const player in players) {
          if (players[player].shoe > largestShoeSize) {
              largestShoeSize = players[player].shoe;
              playerWithLargestShoe = players[player];
          }
      }
  }
  
  return playerWithLargestShoe.rebounds;
}

console.log(bigShoeRebounds()); // Should return 12
function mostPointsScored() {
  const game = gameObject();
  let mostPoints = 0;
  let topScorer;
  
  for (const team in game) {
      const players = game[team].players;
      
      for (const player in players) {
          if (players[player].points > mostPoints) {
              mostPoints = players[player].points;
              topScorer = player;
          }
      }
  }
  
  return topScorer;
}

console.log(mostPointsScored()); // Should return 'Ben Gordon'
function winningTeam() {
  const game = gameObject();
  let homePoints = 0;
  let awayPoints = 0;
  
  for (const player in game.home.players) {
      homePoints += game.home.players[player].points;
  }
  
  for (const player in game.away.players) {
      awayPoints += game.away.players[player].points;
  }
  
  return homePoints > awayPoints ? game.home.teamName : game.away.teamName;
}

console.log(winningTeam()); // Should return 'Charlotte Hornets'
function playerWithLongestName() {
  const game = gameObject();
  let longestName = "";
  
  for (const team in game) {
      const players = game[team].players;
      
      for (const player in players) {
          if (player.length > longestName.length) {
              longestName = player;
          }
      }
  }
  
  return longestName;
}

console.log(playerWithLongestName()); // Should return 'Brendan Haywood'
function doesLongNameStealATon() {
  const game = gameObject();
  const longestName = playerWithLongestName();
  let mostSteals = 0;
  
  for (const team in game) {
      const players = game[team].players;
      
      for (const player in players) {
          if (players[player].steals > mostSteals) {
              mostSteals = players[player].steals;
          }
      }
  }
  
  return game.home.players[longestName]?.steals === mostSteals || 
         game.away.players[longestName]?.steals === mostSteals;
}

console.log(doesLongNameStealATon()); // Should return true or false
