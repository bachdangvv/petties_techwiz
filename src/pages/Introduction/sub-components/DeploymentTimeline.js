import timelineData from '../data/timeline-data.json';

const TimelineYearPlacement = () => {
    timelineData.map((data) => {
        if(data.id % 2 !== 0) {
        return (
            <div className='timeline-year-container'>
                <h4 className='timeline-title'>{data.title}</h4>
                <span className='timeline-year'>{data.year}</span>
            </div>
        )
        } else {
            return (
                <div className='timeline-year-container'>
                    <span className='timeline-year'>{data.year}</span>
                    <h4 className='timeline-title'>{data.title}</h4>
                </div>
            )
        }
    })
};

const TimelineItem = ({data}) => (
    <div className='timeline-item'>
        <div className='timeline-dot'></div>
        <div className='timeline-content'>
            {/* <div className='timeline-year-container'>
                <span className='timeline-year'>{data.year}</span>
                <h4 className='timeline-title'>{data.title}</h4>
            </div> */}
            <TimelineYearPlacement />
            <p className='content-description'>{data.description}</p>
        </div>
    </div>
);

export default function DeploymentTimeline() {
    return (
        <div className='deployment-journey-timeline-container'>
            {timelineData.map((data, index) => (
                <TimelineItem data={data} key={index} />
            ))}
        </div>
    )
};