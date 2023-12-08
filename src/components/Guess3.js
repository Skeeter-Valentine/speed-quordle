export default function Guess3({isGuessed, guess, word3}){
    return (
        <div className="board">
            {new Array(5).fill(0).map((_, i)=>{
                const bgColor = !isGuessed
                ? 'black'
                : guess[i] === word3[i]
                ? 'green'
                : word3.includes(guess[i])
                ? 'yellow'
                : 'black'
            
            return (<div className={bgColor}  >{guess[i]}</div>)
                
            })}
        </div>
    )
}