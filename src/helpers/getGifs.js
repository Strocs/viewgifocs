export const getGifs = async (category) => {
	//transforma los espacios en % para las url
	const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=4XpTMVc2o3FJ8eZvxy4xD7NJyvskJZH9`
	const resp = await fetch(url)
	const { data } = await resp.json()

	//hace que la renderizacion del elemento se ejecute una única vez

	const gifs = await data.map((img) => {
		return {
			id: img.id,
			title: img.title,
			//poner ? en una de las variables. hace que se pregunte que si viene esa variable entonces se utilice
			url: img.images?.downsized_medium.url,
		}
	})

	return gifs
}
