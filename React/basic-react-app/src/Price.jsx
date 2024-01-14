export default function Price({oldPrice,newPrice}){
    let oldStyles = {
        textDecoration: "line-through",
    }
    let newStyles = {
        fontWeight: "bold",
    }
    let styles = {
        backgroundColor: '#e0c367',
        height: '30px',
        borderBottomLeftRadius: '13px',
        borderBottomRightRadius: '13px'
    }
    return(
        <div style={styles}>
            <span style={oldStyles}>Old Price: {oldPrice}</span> &nbsp; &nbsp;&nbsp;&nbsp;
            <span style={newStyles}>New Price: {newPrice}</span>
        </div>
    );
}