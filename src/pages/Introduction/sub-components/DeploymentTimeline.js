import timelineData from '../data/timeline-data.json';

const TimelineItem = ({data}) => {
    return (
        <div className='timeline-item'>
            <div className='timeline-dot'></div>
            <div className='timeline-content'>
                <div className='timeline-year-container'>
                    <span className='timeline-year'>{data.year}</span>
                    <h4 className='timeline-title'>{data.title}</h4>
                </div>
                <p className='content-description'>{data.description}</p>
            </div>
        </div>
    )
};

export default function DeploymentTimeline() {
    return (
        <div className='deployment-journey-timeline-container'>
            {timelineData.map((data, index) => (
                <TimelineItem data={data} key={index} />
            ))}
        </div>
    )
};