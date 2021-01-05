import constants from '../constants';

const Skills = () => {
    return (
        <section id="skills" style={{margin: "50px 0", paddingBottom: 50, borderBottom: "1px solid white"}}>
            <h1 style={{ fontSize: 50, width: '100%' }}>
                personal
                <span className="primary"> skills</span>
            </h1>
            <p>{constants.loremIpsum}</p>
        </section>
    )
}

export default Skills;