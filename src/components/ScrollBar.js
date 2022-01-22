
const ScrollBar = (props) =>{
    return (
        <div style = {{overflowY: 'scroll', height: '500px'}}>
            {props.children}
        </div>
    );
}

export default ScrollBar;