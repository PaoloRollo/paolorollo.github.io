import constants from '../constants';

const Contacts = () => {
    return (
        <section id="contacts" style={{paddingBottom: 50}}>
            <h1 style={{ fontSize: 50, width: '100%' }}>
                reach
                <span className="primary"> me</span>
            </h1>
            <p>{constants.loremIpsum}</p>
        </section>
    )
}

export default Contacts;