console.log("movie time")
const username = [afec887cbc52a82768be3c313b8f1feb]

let moviePreviewDiv = document.querySelector('moviePreview')

let movieContainer = document.querySelector('#movieDiv')

let formBox = document.querySelector('#search')

formBox.addEventListener ('submit', function(event) {
	event.preventDefault()

	let userInput = document.querySelector('#user-input')
	console.log(userInput.value)


fetch(`https://api.themoviedb.org/3/movie/500`, {
	method: 'GET',
	headers: { 'Authorization': 'Bearer', afec887cbc52a82768be3c313b8f1feb,
				'Content-Type': application/json,charset:utf-8}
})
.then (function (response){
	return response.json()
})
.then (function (data){

	if (data.resultCount === 0) {
		console.log('no results')
		let noResultsDiv = document.createElement('div')
		noResultsDiv.innerText = "No Results"
		noResultsDiv.classList.add('no-results')
		moviePreviewDiv.appendChild(noResultsDiv)
		return;
	}

	let results = data.results
	console.log(data)
		for (let result of results) {
			let movieCard = document.createElement('div')
				movieCard.classList.add('movieCard')

			let nameDiv = document.createElement('div')
				nameDiv.classList.add('original_title')
				nameDiv.innerText = result.original_title
				nameDiv.appendChild(nameDiv)

			movieContainer.appendChild(movieCard)
		}

})
})