import "./card.css"

export default function card({Title,d}){
    return(
        <div className="cardContainer">
            <p>{Title}</p>
            <p>{d}</p>
        </div>
    )
}