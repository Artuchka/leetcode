module.exports = async function (request, showSpinner, hideSpinner) {
	const myPromise = MakeQuerablePromise(request())
	let isShowing = false
	await setTimeout(() => {
		if (myPromise.isPending()) {
			showSpinner()
			isShowing = true
		} else {
			hideSpinner()
		}
	}, 250)
	await setTimeout(() => {
		if (isShowing) {
			hideSpinner()
			isShowing = false
		}
	}, 1500)
}

function MakeQuerablePromise(promise) {
	if (promise.isFulfilled) return promise

	let isPending = true
	let isRejected = false
	let isFulfilled = false

	const result = promise.then(
		function (v) {
			isFulfilled = true
			isPending = false
			return v
		},
		function (e) {
			isRejected = true
			isPending = false
			throw e
		}
	)

	result.isFulfilled = function () {
		return isFulfilled
	}
	result.isPending = function () {
		return isPending
	}
	result.isRejected = function () {
		return isRejected
	}
	return result
}
