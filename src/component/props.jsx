import react from "react";
function Reactprops(props){
    return(

        <div>
            <h2>this house is belongs to {props.owner}</h2>
            <p>Color:{props.Color}</p>
            <p>Rooms:{props.Rooms}</p>
            {/* menu of restuarant */}
            <div>
                <h2>{props.name}</h2>
                <h3>price:{props.price}</h3>
                <h3>{props.description}</h3>

            </div>
        
        </div>
    )


}

export default Reactprops;