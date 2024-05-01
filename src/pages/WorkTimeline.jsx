import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../styles/WorkTimeline.css'; // Import CSS file for styling


const WorkTimeline = () => {
  return (
    <div className='work-timeline'>
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2020-2021"
        dateClassName="date-class"
      >
        <h3 className="vertical-timeline-element-title">Honda & PT. Danamas Insan Kreasi Andalan</h3>
        <p>
          Marketing
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2021-2022"
        dateClassName="date-class"
      >
        <h3 className="vertical-timeline-element-title">CV. Duta Budi Group</h3>
        <p>
          Admin
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2023"
        dateClassName="date-class"
      >
        <h3 className="vertical-timeline-element-title">Santosa Intercultural School</h3>
        <p>
          Admin
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2023-present"
        dateClassName="date-class"
      >
        <h3 className="vertical-timeline-element-title">CV. Sembilan Sinar Abadi</h3>
        <p>
          Sales Promotion Boy 
        </p>
      </VerticalTimelineElement>
      {/* Add more VerticalTimelineElement components as needed */}
    </VerticalTimeline>
    <p><a href="/">{"< Back"}</a></p>
    </div>
  );
};

export default WorkTimeline;
