export default function Guess({isGuessed, guess, word}){
    return (
        <div className="board">
            {new Array(5).fill(0).map((_, i)=>{
                const bgColor = !isGuessed
                ? 'black'
                : guess[i] === word[i]
                ? 'green'
                : word.includes(guess[i])
                ? 'yellow'
                : 'black'
            
            return (<div className={bgColor}  >{guess[i]}</div>)
                
            })}
        </div>
    )
}