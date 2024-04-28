
function Tile(props){

    let type = props.type;
    let clsType = (type >= 0) ? "number" : "mine";



    return(
        <>
            <div className={`tile-${clsType}`} style={{
                fontSize : "40px",
                textAlign: "center"
            }}>
                {type != 0 ? type : ""}
            </div>
        </>
    );
}

export default Tile;