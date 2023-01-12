export function formatDigits(digits: number, value: number) {
    let formatString = ''

    for (let iterator = 0; iterator < digits; iterator++) {
        formatString += '0'
    }

    const valueConcatenatedFormatString = formatString.concat(value.toString())

    return valueConcatenatedFormatString.slice(-digits)
}