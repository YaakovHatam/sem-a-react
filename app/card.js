export default function Card(props) {
    return (
        <div>
            <h2>Words card</h2>
            <ul>
                {props.words.map((w, i) => <li key={i}>{w}</li>)}
            </ul>
        </div >
    )
}
