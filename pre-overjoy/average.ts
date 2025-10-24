type Review = { rating: number; comment: string };
// write getAverage rounded to 1 decimal

function getAverage(reviews: Review[]): number {
    const total = reviews.reduce((sum, review) => sum + review.rating, 0)

    return Number((total / reviews.length).toFixed(1)) // kinda prefer this one it is easier 2 read, returns new number ref
    //return Math.round((total / reviews.length * 10) / 10)
}