const Guide = (props) => {
    return (
        <>
        <div className="area">
            <div className="container">
                <img src={props.image.src} alt={props.image.src} />
                <h3 className="heading">{props.heading}</h3>
                <p className="paragraph">{props.paragraph}</p>
            </div>
        </div>
        </>
    )
}

export default Guide;