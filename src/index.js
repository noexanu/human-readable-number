module.exports = function toReadable (number) {
	const numberToString = {
		0 : 'zero',
		1 : 'one',
		2 : 'two',
		3 : 'three',
		4 : 'four',
		5 : 'five',
		6 : 'six',
		7 : 'seven',
		8 : 'eight',
		9 : 'nine',
		10 : 'ten',
		11 : 'eleven',
		12 : 'twelve',
		13 : 'thirteen',
		14 : 'fourteen',
		15 : 'fifteen',
		16 : 'sixteen',
		17 : 'seventeen',
		18 : 'eighteen',
		19 : 'nineteen',
		20 : 'twenty',
		30 : 'thirty',
		40 : 'forty',
		50 : 'fifty',
		60 : 'sixty',
		70 : 'seventy',
		80 : 'eighty',
		90 : 'ninety'
	}
	const convert = (x) => {
		let output = ''
		x = x.toString().split('').reverse().join('')
		if (x[2]) {
			output += numberToString[x[2]] + ' ' + 'hundred' + ' '
		}
		if (x[1] && x[1] != 0) {
			if (x[1] < 2) {
				output += numberToString[x[1] + x[0]] + ' '	
			} else {
				output += numberToString[x[1] * 10] + ' '
			}
		}
		if (x[0] && x[0] != 0) {
			if (!x[1] || x[1] != 1) {
				output += numberToString[x[0]] + ' '
			}
		}
		if (x.length == 1 && x[0] == 0) {
			output += numberToString[x[0]] + ' '
		}
		return output
	}
	return convert(number).slice(0, -1)
}