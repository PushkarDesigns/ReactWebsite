const NewsLetter = () => {
    return (
        <>
            <div className="container">
                <div className="flex">
                    <div className="cols">
                        <h4>Subscribe Our Newsletter</h4>
                        <p>Subscribe newsletter to get offers and about new places to discover.</p>
                    </div>
                    <div className="cols-2">
                        <form className="newsletter-box">
                            <input type="email" placeholder="Your mail" required />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsLetter