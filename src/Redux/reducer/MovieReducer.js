

export const movieReducer = (state={movies:[],pageCount :0},action)=>{
    switch(action.type){
        case "ALLMOVIES" :
            return {movies: action.movies, pageCount: action.pageCount}
        default : 
            return state    
    }
}

