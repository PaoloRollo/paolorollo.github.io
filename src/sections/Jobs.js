import JobsTimeline from '../components/JobsTimeline';

const Jobs = () => {
    return (
        <section id="jobs" style={{margin: "50px 0", paddingBottom: 50, borderBottom: "1px solid white"}}>
            <h1 style={{ fontSize: 50, width: '100%' }}>
                jobs
                <span className="primary"> timeline</span>
            </h1>
            <JobsTimeline />
        </section>
    )
}

export default Jobs;