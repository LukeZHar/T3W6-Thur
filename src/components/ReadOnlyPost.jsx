export default function ReadOnlyPost(props) {
    return (
        <div className="ReadOnlyPost">
            <h1>{props.author}</h1>
            <h6>Created On: {props.dateCreated}</h6>
            {
                props.lastUpdated !== props.dateCreated ?
                <h6>Last edited on: {props.lastUpdated}</h6>:
                null
            }
            <h3>{props.location}</h3>
            <p>{props.content}</p>
        </div>
    )
}