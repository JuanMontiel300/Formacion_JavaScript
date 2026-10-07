/*function moneyBox(coins) {
    let saveCoins = 0
    saveCoins += coins
    console.log(`MoneyBoc $${saveCoins}`)
}

moneyBox(320)
moneyBox(230)*/

function moneyBox() {

    let saveCoins = 0

    function countCoins(coins) {
        saveCoins += coins
        console.log(`MoneyBox: $${saveCoins}`)
    }

    return countCoins
}

const myMoneyBox = moneyBox()
myMoneyBox(5)
myMoneyBox(2)
myMoneyBox(14)

const moneyBoxAna = moneyBox()

moneyBoxAna(120)
moneyBoxAna(20)