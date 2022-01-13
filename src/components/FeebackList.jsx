import FeebackItem from "./FeebackItem"
function FeebackList(props) {
    console.log('feebacklist prop ',props)
    const data = props.data
    console.log('feeback data', data)
    if(!data) { return <h2> no data here</h2>}
    return (
        <div>
           {data.map((item) => (
               <FeebackItem handleDelete = {props.handleDelete}
             key={item.id} item={item} />
               ))}
        </div>
    )
}

export default FeebackList
