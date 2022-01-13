function Card(props) {
    console.log('this is card children','this is card props' , props)
    // reverse ? console.log('thisis reverse' , reverse): console.log('thisis reverse' , reverse)
    const cardStyle = {
        backgroundColor: props.reverse ? 'rgba(0,0,0,0.4)' : '#fff',
        color: props.reverse ? '#fff' : '#000'
        }
    return (
        <div className="card " style={cardStyle}>
            {props.children}
        </div>
    )
}
Card.defaultProps = {
    text: 'HeaderdefaultProps',
    textcolor: '#ff6a95',
    reverse: true,
}

export default Card
