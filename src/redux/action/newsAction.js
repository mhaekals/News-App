export const FETCH_ARTICLES = 'FETCH_ARTICLES'
export const TOGGLE_FAVOURITES = 'TOGGLE_FAVOURITES'

export const fetchArticle = () =>{
    return async dispatch => {

        const result = await fetch('http://newsapi.org/v2/everything?q=apple&from=2020-11-22&to=2020-11-22&sortBy=popularity&apiKey=API_KEY') // to get API_KEY go to newsapi.org
        const resultData = await result.json()
        dispatch(
            {
                type: FETCH_ARTICLES,
                payload: resultData
        })

    }
}

export const toggleFav = url => {
    return {
        type: TOGGLE_FAVOURITES,
        payload: url
    }
}