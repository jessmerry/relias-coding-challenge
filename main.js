console.log("movie time")
const api_key = 'afec887cbc52a82768be3c313b8f1feb'

let moviePreviewDiv = document.querySelector('moviePreview')

let movieContainer = document.querySelector('#movieDiv')

let formBox = document.querySelector('#search')

formBox.addEventListener ('submit', function(event) {
	event.preventDefault()

	let userInput = document.querySelector('#user-input')
	console.log(userInput.value)


fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${userInput.value}`, {
	method: 'GET',
	headers: { 'Authorization': 'Bearer',
				'Content-Type': 'application/json,charset:utf-8'}
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
	console.log(results)
		for (let result of results) {
			let movieCard = document.createElement('div')
				movieCard.classList.add('movieCard')

			let nameDiv = document.createElement('div')
				nameDiv.classList.add('original_title')
				nameDiv.innerText = result.original_title
				movieCard.appendChild(nameDiv)
			
			let dateDiv = document.createElement('div')
				dateDiv.classList.add('release_date')
				dateDiv.innerText = result.release_date
				movieCard.appendChild(dateDiv)
			
			let overviewDiv = document.createElement('div')
				overviewDiv.classList.add('overview')
				overviewDiv.innerText = result.overview
				movieCard.appendChild(overviewDiv)
			
			// let posterDiv = document.createElement('img')
			// 	posterDiv.classList.add('img')
			// 	posterDiv.src = result.poster_path
			// 	movieCard.appendChild(posterDiv)

			movieContainer.appendChild(movieCard)
		}

})
})