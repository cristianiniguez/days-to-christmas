const MILISECONDS_PER_DAY = 1000 * 60 * 60 * 24

const daysToChristmas = () => {
    let today = new Date()
    today = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    const YEAR = today.getFullYear()

    let nextChristmas = new Date(YEAR, 11, 25)
    let timeLeft = nextChristmas.getTime() - today.getTime()
    if (timeLeft < 0) {
        nextChristmas = new Date(YEAR + 1, 11, 25)
        timeLeft = nextChristmas.getTime() - today.getTime()
    }
    console.log(timeLeft / MILISECONDS_PER_DAY)
}

module.exports = { daysToChristmas }