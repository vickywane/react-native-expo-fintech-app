export const obsfucateCardNumber = cardNumber => {
    if (!cardNumber) {
        console.log(`${cardNumber} card number provided`)
        return
    }

    let cardArr = []
    cardNumber.split(" ").forEach((number, index) => {
        if (index === 1 || index === 2) {
            cardArr.push("*****")

            return
        }

        cardArr.push(number)
    })

    return cardArr.join(" ")
}