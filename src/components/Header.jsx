import PropTypes from 'prop-types'

function Header(props) { 
    console.log('this is header prop',props )
    const hStyle = {
        color: props.textcolor
    } 
    return (
        <header style={hStyle}>
        <div>
            <h1>{props.text}</h1>
        </div>
        </header>
    )
}
Header.defaultProps = {
    text: 'HeaderdefaultProps',
    textcolor: '#ff6a95'
}
// Header.prototype = {
//     text: PropTypes.string,
// }
export default Header

