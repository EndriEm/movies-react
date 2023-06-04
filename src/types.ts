export type Category ={
    id: number
    name: string
}

export type Movie = {
    id: number
    title: string
    description: string
    categoryId: number
    image: string
    trailer: string
}

export type WatchListItem = {
        "id": number,
        "movieId": number,
        "movie": Movie
}