
const About = () => {
    return (
        <>
        <div className="about">
            <h3>What is this?</h3>
            <p>This is a simple application that shows the top mentioned stocks on reddit in the last 24 hours.</p>
            <p>This application currently scans the following subreddits: </p>
            <ul>
                <li><a href="https://www.reddit.com/r/wallstreetbets/">r/wallstreetbets</a></li>
                <li><a href="https://www.reddit.com/r/investing/">r/investing</a></li>
                <li><a href="https://www.reddit.com/r/stocks/">r/stocks</a></li>
                <li><a href="https://www.reddit.com/r/pennystocks/">r/pennystocks</a></li>
            </ul>
            <h3>How are you finding "sentiment"?</h3>
            <p>Sentiment is found by analyzing the post title using the VADER (Valence Aware Dictionary and sEntiment Reasoner) library in the scraper used to get the data for the site. 
                It's fickle, but can give us a <i>rough</i> estimate of how users generally feel about the stock when they talk about it across reddit.
            </p>
        </div>
        </>
    )
}

export default About;