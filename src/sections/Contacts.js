const Contacts = () => {
    return (
        <section id="contacts" style={{paddingBottom: 50}}>
            <h1 style={{ fontSize: 50, width: '100%' }}>
                reach
                <span className="primary"> me</span>
            </h1>
            <dl>
                <dt>Email addresses</dt>
                <dd>
                    <a href="mailto:paolo.rollo1997@gmail.com">Personal</a>
                </dd>
                <dd>
                    <a href="mailto:paolo.rollo@cidaro.com">Work (CIDARO)</a>
                </dd>
                <dt>Socials</dt>
                <dd>
                    <a href="https://github.com/PaoloRollo">Github</a>
                </dd>
                <dd>
                    <a href="https://paolorollo.medium.com/">Medium</a>
                </dd>
            </dl>
        </section>
    )
}

export default Contacts;