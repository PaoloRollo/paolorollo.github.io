import constants from '../constants';
import me from '../assets/me.jpg';

const description = "Welcome to my portfolio, I'm Paolo Rollo, a young software engineer based in Rome, Italy.\
                    I'm interested in all the programming-related stuff, but also in topics like chemistry,\
                    bioinformatics, cybersecurity and the universe. Before starting my university studies in \
                    computer engineering my dream was to become a chemist of some sort, working with the smallest \
                    particle of all - the atom - has always fascinated me: thinking like this, programming is not so \
                    different - I may not be able to tinker with atoms, but I sure can with 0s and 1s."

const About = () => {
    return (
        <section id="about" style={{paddingBottom: 50, borderBottom: "1px solid white"}}>
            <h1 style={{ fontSize: 50, width: '100%' }}>
                about
                <span className="primary"> me</span>
            </h1>
            <div className="row" >
                <div className="image-col">
                    <figure>
                        <img src={me} alt="very elevated picture" title="very elevated picture" />
                        <figcaption>very elevated picture</figcaption>
                    </figure>
                </div>
                <div className="text-col">
                    <p style={{textAlign: 'justify'}}>{description}</p>
                </div>
            </div>
        </section>
    )
}

export default About;