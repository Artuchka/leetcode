export default function solve(emails) {
	const clearEmails = emails.map((item) => {
		const plusIndex = item.match(/\+/)?.index
		const dogIndex = item.match(/\@/).index
		const clearLocal = item
			.substr(0, plusIndex || dogIndex)
			.replaceAll(".", "")
		const domain = item.substr(dogIndex)
		const clearEmail = clearLocal + domain
		return clearEmail
	})

	const set = new Set(clearEmails)
	// console.log({ set })
	return set.size
}
