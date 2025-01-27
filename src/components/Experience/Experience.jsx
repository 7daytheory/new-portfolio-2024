import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {experiences} from "../../content";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Fade } from "react-awesome-reveal";
import PropTypes from 'prop-types';

const ExperienceCard = ({ experience }) => {
  ExperienceCard.propTypes = {
    experience: PropTypes.shape({
      date: PropTypes.string.isRequired,
      iconBg: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      company_name: PropTypes.string.isRequired,
      tasks: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
  };
  
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          {/* Add company logo here*/}
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.tasks.map((task, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'>
            {task}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <div className='flex flex-col bg-slate-800 mt-[50px]'>
        <VerticalTimeline>
        <Fade duration={2500}><h1 className="text-white lg:text-[3em] sm:text-[2.5em] absolute left-[20px] text-[2.3em] lg:top-[-22px] top-[-18px] font-bold" id="experience">{experiences.experiencesHeader} <FontAwesomeIcon icon={faArrowDown} /></h1></Fade>
          {experiences.experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              lineColor={'black'}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Experience;
