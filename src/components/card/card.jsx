import "./card.css"

export default function card({Title,d}){
    return(
        <div className="cardContainer">
            <p className="cardtitle">{Title}</p>
            <p className="carddata">{d}</p>
        </div>
    )
}