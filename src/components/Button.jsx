function Button(props) {
    return (
        <button
        type={props.type}
        className={`btn btn-${props.version}`}
         version={props.version}
        disabled={props.isDisabled}
        >{props.children}</button>    
    )
}
Button.defaultProps = {
    version:'secondary',
    type:'button',
    isDisabled:false
}
export default Button
