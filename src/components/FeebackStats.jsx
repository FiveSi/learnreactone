function FeebackStats(props) {
    console.log('feeback stats props ',props)
    let avg = props.data.reduce((acc, cur)=> {
        return acc + cur.rating
    }, 0)/props.data.length
    avg = avg.toFixed(1).replace(/.0/, '')
    console.log(avg)
    return (
        <div className="feedback-stats">
        <h4>{props.data.length} Reviews</h4>
        <h4>Average Rating {isNaN(avg) ? 0 : avg}</h4>
        </div>
    )
}

export default FeebackStats
