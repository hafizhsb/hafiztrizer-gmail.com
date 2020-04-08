const warriorsGames = [{
  awayTeam: {
    team: 'Golden State',
    points: 119,
    isWinner: true
  },
  homeTeam: {
    team: 'Houston',
    points: 106,
    isWinner: false
  }
},
{
  awayTeam: {
    team: 'Golden State',
    points: 105,
    isWinner: false
  },
  homeTeam: {
    team: 'Houston',
    points: 127,
    isWinner: true
  }
},
{
  homeTeam: {
    team: 'Golden State',
    points: 126,
    isWinner: true
  },
  awayTeam: {
    team: 'Houston',
    points: 85,
    isWinner: false
  }
},
{
  homeTeam: {
    team: 'Golden State',
    points: 92,
    isWinner: false
  },
  awayTeam: {
    team: 'Houston',
    points: 95,
    isWinner: true
  }
},
{
  awayTeam: {
    team: 'Golden State',
    points: 94,
    isWinner: false
  },
  homeTeam: {
    team: 'Houston',
    points: 98,
    isWinner: true
  }
},
{
  homeTeam: {
    team: 'Golden State',
    points: 115,
    isWinner: true
  },
  awayTeam: {
    team: 'Houston',
    points: 86,
    isWinner: false
  }
},
{
  awayTeam: {
    team: 'Golden State',
    points: 101,
    isWinner: true
  },
  homeTeam: {
    team: 'Houston',
    points: 92,
    isWinner: false
  }
}
]

const makeChart = (games, targetTeam) => {
  const ulParent = document.createElement('ul')

  for (let game of games) {
    const gameLi = document.createElement('li')
    gameLi.innerHTML = scoreLine(game, targetTeam)
    gameLi.classList.add(isWinner(game, targetTeam) == true ? 'win' : 'loss')
    ulParent.appendChild(gameLi)
  }

  return ulParent
}

const isWinner = ({homeTeam, awayTeam}, targetTeam) => {
  const target = homeTeam.team == targetTeam ? homeTeam : awayTeam
  return target.isWinner
}

const scoreLine = ({homeTeam, awayTeam}, targetTeam) => {
  const {team:hTeam, points:hPoints} = homeTeam
  const {team:aTeam, points:aPoints} = awayTeam
  const teamName = `${aTeam} @ ${hTeam}`
  const scoreLine = `${aPoints}-${hPoints}`

  return `${teamName} ${scoreLine}`
}

const chartGs = makeChart(warriorsGames, 'Golden State')
const chartHs = makeChart(warriorsGames, 'Houston')

const gsSection = document.querySelector('#gs')
const hrSection = document.querySelector('#hr')

gsSection.appendChild(chartGs)
hrSection.appendChild(chartHs)