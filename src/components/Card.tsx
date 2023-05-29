interface ICard {
    id:number
}



export const Card = ({id}: ICard) => {
    console.log(id)
    return(
        <div>
            <h1>Card Loja {id}</h1>
            <img src="#" alt='Card' />
            <p>descripton:</p>
        </div>     
    )
}