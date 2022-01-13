import Card from "./Card"
import {Link} from 'react-router-dom'
function AboutPage() {
    return (
        <Card>
            <h2> metahkg</h2>
            <p>version 1</p>
            <Link to="/">back to home</Link>
        </Card>
    )
}

export default AboutPage
