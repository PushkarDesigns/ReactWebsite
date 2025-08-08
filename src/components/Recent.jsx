const Recent = (props) => {
    return (
        <div className="area">
            <div className="container">
                {props.title && <h2 className="head">{props.title}</h2>}
                {props.image && (<img src={props.image.src} alt={props.image.alt} />
                )}
                <span className="heading">{props.heading}</span>
                <h3 className="paragraph">{props.paragraph}</h3>
            </div>
        </div>
    )
}

export default Recent;