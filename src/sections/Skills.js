const skills = [
    {
        name: 'Programming languages',
        data: [
            { 
                name: 'python',
                percentage: '100%',
            },
            {
                name: 'golang',
                percentage: '90%'
            },
            {
                name: 'javascript/typescript',
                percentage: '95%'
            },
            {
                name: 'java',
                percentage: '80%'
            },
            {
                name: 'rust',
                extra: '(studying it)',
                percentage: '50%'
            },
            {
                name: 'haskell',
                extra: '(studying it)',
                percentage: '30%'
            },
            {
                name: 'php',
                extra: '(for real?)',
                percentage: '0%'
            }
        ]
    },
    {
        name: 'Not programming languages but still',
        data: [
            { 
                name: 'nosql databases',
                percentage: '100%',
            },
            { 
                name: 'sql databases',
                percentage: '95%',
            },
            { 
                name: 'docker',
                percentage: '100%',
            },
            { 
                name: 'REST',
                percentage: '100%',
            },
            { 
                name: 'gRPC',
                percentage: '90%',
            },
            {
                name: 'ci/cd',
                percentage: '90%',
            },
        ]
    },
    {
        name: 'Soft skills',
        data: [
            {
                name: 'Flexibility',
                percentage: '90%',
            },
            {
                name: 'Communication',
                percentage: '85%',
            },
            {
                name: 'Teamwork',
                percentage: '100%',
            },
            {
                name: 'Listening',
                percentage: '85%',
            },
            {
                name: 'Self-management',
                percentage: '80%',
            },
            {
                name: 'Divergent thinking',
                percentage: '100%',
            }
        ]
    }
];

const Skills = () => {
    return (
        <section id="skills" style={{margin: "50px 0", paddingBottom: 50, borderBottom: "1px solid white"}}>
            <h1 style={{ fontSize: 50, width: '100%' }}>
                personal
                <span className="primary"> skills</span>
            </h1>
            {
                skills.map((skill, i) => {
                    return (
                        <div key={i} style={{borderBottom: `${i === skills.length - 1 ? "" : '1px dashed white'}`, marginBottom: 20}}>
                            <h2>{skill.name}</h2>
                            { skill.data.map((item, j) => {
                                return (
                                    <div key={j + 100}>
                                    <p style={{marginBottom: 0, marginTop: 25}}>{item.name}{item.extra ? <span style={{float: 'right'}}>{item.extra}</span> : <></>}</p>
                                    <div className={`progress-bar ${item.name === 'php' ? "progress-bar-no-arrow" : "progress-bar-show-percent"}`}>
                                        <div className="progress-bar-filled" style={{width: item.percentage}} data-filled={item.name !== 'php' ? item.percentage : ''}></div>
                                    </div>
                                    </div>
                                )
                            })}
                            <br/>
                        </div>
                    )
                })
            }
            
        </section>
    )
}

export default Skills;