export const database = [
    { name: '21 Jump Street', imgUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRLCqM8Ispa4waG8tNLPdy6rtiJFOEZUZxdzP-y_BQzfgo953Gb' },
    { name: '22 Jump Street', imgUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQaoamRKQDYxVXvXg6LUl6brQmMdFbpZvOQ2G_nD6u5uq16tiVh' },
    { name: 'Cars', imgUrl: 'https://upload.wikimedia.org/wikipedia/en/3/34/Cars_2006.jpg' },
    { name: 'Cars 2', imgUrl: 'https://upload.wikimedia.org/wikipedia/en/7/7f/Cars_2_Poster.jpg' },
    { name: 'Cars 3', imgUrl: 'https://lumiere-a.akamaihd.net/v1/images/p_cars3_19643_3ab8aca1.jpeg' }
]
export const availibility = {
    '21 Jump Street': [1, 2, 5, 8, 9,19,22,20,11],
    '22 Jump Street': [1, 2, 3, 5, 6,10,11,12,13,14,15,16,17, 24],
    'Cars': [1, 2, 3, 4, 5, 6,15,16,17,18,19,20,21,22,23,24],
    'Cars 2': [4, 6, 8,10,11,12,13,14,15,16],
    'Cars 3': [3, 5, 7, 9,20,21,12,13,19,24]
}
const fetchMovieList = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(database)
        }, 500)
    })
}

const fetchMovieAvailability = async (movieName) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            for (const m in availibility) {
                if (m === movieName) resolve(availibility[m])
            }
            resolve([])
        }, 500)
    })
}

export { fetchMovieList, fetchMovieAvailability }