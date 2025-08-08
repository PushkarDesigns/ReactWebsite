const Destination = (props) => {
    return (
        <section className="popular-area">
            <div className="popular-container">
                <h2 className="popular-heading">{props.heading}</h2>
                <p className="popular-description">{props.description}</p>
                {/* {
                    props.Destination.src.map((item) => <div><img src="{item.image}" /></div>)
                } */}
            </div>
        </section>
    );
};

export default Destination;
