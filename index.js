function mostPointsScored(players) {
    let maxPoints = 0;
    let playerWithMostPoints = "";
  
    players.forEach(player => {
      if (player.points > maxPoints) {
        maxPoints = player.points;
        playerWithMostPoints = player.name;
      }
    });
  
    return playerWithMostPoints;
  }
  function winningTeam(players) {
    const teamPoints = {};
  
    players.forEach(player => {
      if (!teamPoints[player.team]) {
        teamPoints[player.team] = 0;
      }
      teamPoints[player.team] += player.points;
    });
  
    let maxPoints = 0;
    let teamWithMostPoints = "";
  
    for (let team in teamPoints) {
      if (teamPoints[team] > maxPoints) {
        maxPoints = teamPoints[team];
        teamWithMostPoints = team;
      }
    }
  
    return teamWithMostPoints;
  }
  function playerWithLongestName(players) {
    let longestName = "";
  
    players.forEach(player => {
      if (player.name.length > longestName.length) {
        longestName = player.name;
      }
    });
  
    return longestName;
  }
  function doesLongNameStealATon(players) {
    const longestNamePlayer = playerWithLongestName(players);
  
    let maxSteals = 0;
    let playerWithMostSteals = "";
  
    players.forEach(player => {
      if (player.steals > maxSteals) {
        maxSteals = player.steals;
        playerWithMostSteals = player.name;
      }
    });
  
    return longestNamePlayer === playerWithMostSteals;
  }
  console.log(mostPointsScored(players));          // Returns the player with the most points
  console.log(winningTeam(players));               // Returns the team with the most points
  console.log(playerWithLongestName(players));     // Returns the player with the longest name
  console.log(doesLongNameStealATon(players));     // Returns true if the player with the longest name has the most steals
          