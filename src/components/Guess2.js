export default function Guess2({isGuessed, guess, word2}){
    return (
        <div className="board">
            {new Array(5).fill(0).map((_, i)=>{
                const bgColor = !isGuessed
                ? 'black'
                : guess[i] === word2[i]
                ? 'green'
                : word2.includes(guess[i])
                ? 'yellow'
                : 'black'
            
            return (<div className={bgColor}  >{guess[i]}</div>)
                
            })}
        </div>
    )
}