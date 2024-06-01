function gameObject() {
    const gameObj = {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['Black', 'White'],
            players: [
                {
                    'Alan Anderson': {
                        number: 0, 
                        shoe: 16, 
                        points: 22, 
                        rebounds: 12, 
                        assists: 12, 
                        steals: 3, 
                        blocks: 1, 
                        slamDunks: 1
                    },
                },
                {
                    'Reggie Evans': {
                        number: 30, 
                        shoe: 14, 
                        points: 12, 
                        rebounds: 12, 
                        assists: 12, 
                        steals: 12, 
                        blocks: 12, 
                        slamDunks: 7
                    },
                },
                {
                    'Brook Lopez': {
                        number: 11, 
                        shoe: 17, 
                        points: 17, 
                        rebounds: 19, 
                        assists: 10, 
                        steals: 3, 
                        blocks: 1, 
                        slamDunks: 15 
                    },
                },
                {
                    'Mason Plumlee': {
                        number: 1, 
                        shoe: 19, 
                        points: 26, 
                        rebounds: 12, 
                        assists: 6, 
                        steals: 3, 
                        blocks: 8, 
                        slamDunks: 5
                    },
                },
                {
                    'Jason Terry': {
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
            ]
        },
  
        away: {
            teamName: 'Charlotte Hornets',
            colors: ['Turquoise', 'Purple'],
            players: [
                {
                    'Jeff Adrien': {
                        number: 4,
                        shoe: 18,
                        points: 10,
                        rebounds: 1,
                        assists: 1,
                        steals: 2,
                        blocks: 7,
                        slamDunks: 2
                    },
                },
                {
                    'Bismak Biyombo': {
                        number: 0,
                        shoe: 16,
                        points: 12,
                        rebounds: 4,
                        assists: 7,
                        steals: 7,
                        blocks: 15,
                        slamDunks: 10
                    },
                },
                {
                    'DeSagna Diop': {
                        number: 2,
                        shoe: 14,
                        points: 24,
                        rebounds: 12,
                        assists: 12,
                        steals: 4,
                        blocks: 5,
                        slamDunks: 5
  
                    },
  
                },
                {
                    'Ben Gordon': {
                        number: 8,
                        shoe: 15,
                        points: 33,
                        rebounds: 3,
                        assists: 2,
                        steals: 1,
                        blocks: 1,
                        slamDunks: 0
                    },
                },
                {
                    'Brendan Haywood': {
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
            ]
  
        }
    }
    return gameObj
  };

  function getAllPlayers() {
    const gameObj = gameObject();
    return [...gameObj.home.players, ...gameObj.away.players];
  
  }
  
 
// numPointsScored

function numPointsScored(playerName) {
    const allPlayers = getAllPlayers()
  
    for (const playerObj of allPlayers) {
        const playerNameKey = Object.keys(playerObj) [0];
   
        if (playerNameKey === playerName) {
            return playerObj[playerNameKey].points;
        }
    }
    
    return 'Player not found.';
  }
  
console.log(numPointsScored('Ben Gordon'));

// shoeSize

function shoeSize(playerName) {
    const allPlayers = getAllPlayers()
  
    for (const playerObjectShoe of allPlayers) {
      const playerNameKey = Object.keys(playerObjectShoe) [0];
      if (playerNameKey === playerName) {
        return playerObjectShoe[playerNameKey].shoe;
      }
    }
    return 'Player not found.';
  }  
console.log(shoeSize('Ben Gordon'));

// teamColors

  function teamColors(team) {
    const gameObj = gameObject();
  
    if (gameObj.home.teamName === team) {
      return gameObj.home.colors;
    } else if (gameObj.away.teamName === team) {
      return gameObj.away.colors;
    }
  
    return 'Team not found.';
  }
console.log(teamColors('Brooklyn Nets'))

// teamNames

function teamNames() {
    const gameObj = gameObject();
    const homeTeamName = gameObj.home.teamName;
    const awayTeamName = gameObj.away.teamName;
  
    return [homeTeamName, awayTeamName];
  }
console.log(teamNames());

// playerNumbers

function playerNumbers(teamName) {
    const gameObj = gameObject();
    let playersArray;
    if (gameObj.home.teamName === teamName) {
      playersArray = gameObj.home.players;
    } else if (gameObj.away.teamName === teamName) {
      playersArray = gameObj.away.players;
    } else {
      return 'Team not found.';
    }
  
    const playerNumbersArray = playersArray.map(playerObj => {
      const playerName = Object.keys(playerObj)[0];
      return playerObj[playerName].number;
    });
  
    return playerNumbersArray;
  }
console.log(playerNumbers('Brooklyn Nets'));

// playerStats

function playerStats(playerName) {
    const gameObj = gameObject();
  
    for (const playerObj of [...gameObj.home.players, ...gameObj.away.players]) {
      const playerNameKey = Object.keys(playerObj)[0];
  
      if (playerNameKey === playerName) {
        return playerObj[playerNameKey];
      }
    }
  
    return 'Player not found.';
  }

console.log(playerStats('Ben Gordon'));

// bigShoeRebounds

function bigShoeRebounds() {
  
    const allPlayers = getAllPlayers()
  
    let largestShoeSize = 0;
    let mostRebounds = 0;
  
    for (let player of allPlayers) {
     const playerName = Object.keys(player)[0];
     const playerStats = player[playerName];
  
     const playerShoeSize = playerStats.shoe;
     const PlayerRebounds = playerStats.rebounds
  
     if (playerShoeSize > largestShoeSize) {
      largestShoeSize = playerShoeSize;
      mostRebounds = PlayerRebounds
     }
    }
    return mostRebounds;
    
  }        

console.log(bigShoeRebounds());

// mostPointsScored

function mostPointsScored() {
    const allPlayers = getAllPlayers()
  
    let playerWithTheMostPoints = '';
    let mostPoints = 0;
    
    for (let player of allPlayers) {
      const playerName = Object.keys(player)[0];
      const playerPoints = player[playerName].points;
  
      if (playerPoints > mostPoints) {
        mostPoints = playerPoints;
        playerWithTheMostPoints = playerName;
      }
  
    }
      return playerWithTheMostPoints;
    
  }
console.log(mostPointsScored());

// winningTeam

function winningTeam() {
    const gameObj = gameObject();
    const homePlayers = gameObj.home.players;
    const awayPlayers = gameObj.away.players;
    let totalPointsHome = 0;
    let totalPointsAway = 0;
  
    for (let player of homePlayers) {
      const playerStats = Object.values(player)[0];
      const points = playerStats.points;
      totalPointsHome += points;
      }
  
    for (let player of awayPlayers) {
      const playerStats = Object.values(player)[0];
      const points = playerStats.points;
      totalPointsAway += points;
      }
  
    if (totalPointsHome > totalPointsAway) {
      return gameObj.home.teamName;
      } else { (totalPointsHome < totalPointsAway) 
      return gameObj.away.teamName;
      }
    
    }
console.log(winningTeam());

// playerWithLongestName

function playerWithLongestName() {
    const allPlayers = getAllPlayers()
    let longestName = '';
  
    for (let player of allPlayers) {
      const playerName = Object.keys(player) [0];
  
      if (playerName.length > longestName.length) {
        longestName = playerName;
      }
    }
    return longestName;
  }
console.log(playerWithLongestName());

// doesLongNameStealATon

function doesLongNameStealATon() {
    const allPlayers = getAllPlayers()
  
    let playerWithTheMostPoints = '';
    let mostPoints = 0;
  
    for (let player of allPlayers) {
      const playerName = Object.keys(player)[0];
      const playerPoints = player[playerName].points;
  
      if (playerPoints > mostPoints) {
        mostPoints = playerPoints;
        playerWithTheMostPoints = playerName;
      }
  
    }
  
    let longestName = '';
  
    for (let player of allPlayers) {
      const playerName = Object.keys(player) [0];
  
      if (playerName.length > longestName.length) {
        longestName = playerName;
      }
    }
  
    if (longestName === playerWithTheMostPoints) {
      return true;
    } else { 
      return false;
    }
  }
  console.log(doesLongNameStealATon());

  