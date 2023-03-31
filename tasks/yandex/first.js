class Queue {
	constructor() {
		this.queue = []
		this.maxVal = 0
		this.minVal = Infinity
	}
	push(x) {
		this.queue.push(x)
		if (x > this.maxVal) {
			this.maxVal = x
		}
		if (x < this.minVal) {
			this.minVal = x
		}
	}
	shift() {
		this.queue.shift()
		return 0
	}
	max() {
		return this.maxVal
	}
	min() {
		return this.minVal
	}
}

// export default Queue
module.exports = Queue
