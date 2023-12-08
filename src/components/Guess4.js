export default function Guess4({isGuessed, guess, word4}){
    return (
        <div className="board">
            {new Array(5).fill(0).map((_, i)=>{
                const bgColor = !isGuessed
                ? 'black'
                : guess[i] === word4[i]
                ? 'green'
                : word4.includes(guess[i])
                ? 'yellow'
                : 'black'
            
            return (<div className={bgColor}  >{guess[i]}</div>)
                
            })}
        </div>
    )
}