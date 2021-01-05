const jobs = [
    {
        title: 'Software Developer Intern (LaserRomae srl) - September 2018',
        description: 'I\'ve started working as an intern @LaserRomae in order to complete my studies; in fact, during this 6 months period I\'ve worked on my thesis in collaboration with the ANAC (National Anti-Corruption Authority) for the \
        re-engineering of the OpenWhistleblowing platform.'
    },
    {
        title: 'Co-Founder (CIDARO srl) - October 2018',
        description: 'In 2018 also I\'ve founded @CIDARO, a consultancy & development company whose main objective is to research and develop Blockchain-based solutions.'
    },
    {
        title: 'Software Analyst & Developer (LaserRomae srl) - February 2019',
        description: 'One month before getting my BSc degree I was recruited full-time as a Software Analyst & Developer by @LaserRomae.'
    },
    {
        title: 'BSc Computer Engineering (Sapienza Università di Roma) - March 2019',
        description: 'My degree thesis, "Reingegnerizzazione del software "Whistleblowing": analisi, sviluppo e rischi imprenditoriali" ("Whistleblowing software re-engineering: analysis, development and business risks")\
        is the foundation of the OpenWhistleblowing2 platform, currently used by "Ferrovie dello Stato Italiane".'
    },
    {
        title: 'Coach (start2impact srl) - November 2020',
        description: 'I\'ve released a course on @start2impact about the Ethereum Blockchain and how to exploit the Solidity language to realize Smart Contracts at the state of art.'
    }
]

const JobsTimeline = () => {
    return (
        <div class="terminal-timeline">
            { jobs.map((job, i) => {
                return (
                    <div class="terminal-card">
                        <header>{job.title}</header>
                        <div>
                            {job.description}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default JobsTimeline;