import {FETCH_ARTICLES, TOGGLE_FAVOURITES} from '../action/newsAction'

const intitialState = {
    articles: [],
    favourites: []
}

export default function newsReducer(state = intitialState, action) {
    switch(action.type){
        case FETCH_ARTICLES:
            return {
                ...state,
                articles: action.payload
            }
        case TOGGLE_FAVOURITES:
            const index = state.favourites.findIndex(article => article.url === action.payload)

            if(index >=0){
            const favourites = [...state.favourites]
            favourites.splice(index, 1)
            return{
                ...state,
                favourites: favourites
            }
        }else{
            const article = state.articles.articles.find(article => article.url === action.payload)
            return {
                ...state,
                favourites: state.favourites.concat(article)
            }
        }
    }
    return state
}