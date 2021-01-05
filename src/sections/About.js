import constants from '../constants';

const About = () => {
    return (
        <section id="about" style={{margin: "50px 0", paddingBottom: 50, borderBottom: "1px solid white"}}>
            <h1 style={{ fontSize: 50, width: '100%' }}>
                about
                <span className="primary"> me</span>
            </h1>
            <p>{constants.loremIpsum}</p>
        </section>
    )
}

export default About;