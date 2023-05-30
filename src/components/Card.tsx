interface ICard {
    id:number,
    paragraph: string,
    details: string
}



export const Card = ({id, paragraph, details}: ICard) => {
    console.log(id)
    return(
        <div>
            <h1>Card Loja {id}</h1>
            <img src="#" alt='Card' />
            <p>{paragraph}:</p>
            <p>{details}:</p>
        </div>     
    )
}