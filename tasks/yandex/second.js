module.exports = function (originalFunction, timeInterval, maxRequests) {
	const done = {}
	return (ip, timestamp, ...args) => {
		const diff = timestamp - done?.[ip]?.lastTime
		console.log(diff)
		if (
			done?.[ip]?.isBanned ||
			(diff < timeInterval && done?.[ip]?.val >= maxRequests)
		) {
			done[ip].isBanned = true
			return false
		}
		if (done[ip]) {
			if (diff >= timeInterval) {
				done[ip].val = 0
			}
			done[ip].val++
			done[ip].lastTime = timestamp
		} else {
			done[ip] = { val: 1, lastTime: timestamp }
		}

		return originalFunction(...args)
	}
}
