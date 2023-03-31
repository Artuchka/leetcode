const firstStart = 8
const firstEnd = 18

const secondStart = 18
const secondEnd = 23

const thirdStart = 23
const thirdEnd = 8

module.exports = function (timesheet, hourRate) {
	let seconds = { first: 0, second: 0, third: 0 }
	for (let i = 0; i < timesheet.length; i += 2) {
		const login = timesheet[i][1]
		const logout = timesheet[i + 1][1]

		const hourStart = new Date(login).getTime()
		const hourEnd = new Date(logout).getHours()
		const isEnd = false

		if (hourStart > firstStart && hourStart < firstEnd) {
			const end = Math.min(firstEnd, hourEnd)
			if (end >= hourEnd) {
				seconds.first += end - login
			}
		}
		console.log({ hourStart })
		console.log({ hourEnd })

		const diff = logout - login

		console.log({ diff })
		seconds += diff
	}
	// console.log({ seconds })
	console.log({ hours: (seconds / 3600_000).toFixed(2) })

	return ((seconds / 3600_000) * hourRate).toFixed(2)
}
