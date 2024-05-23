import { NavLink } from 'react-router-dom';

const TeacherList = () => {
  const linkclassNames = ({ isActive }) =>
    isActive
      ? 'py-2 px-3 inline-block w-full bg-sky-700 text-white text-sm'
      : 'py-2 px-3 inline-block w-full text-slate-100 text-sm hover:bg-sky-700 text-white';

  return (
    <ul className='flex flex-col gap-0.5'>
      <li>
        <NavLink to='/teacher/dashboard' className={linkclassNames}>
          <i className='ri-dashboard-line'></i> Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink to='/teacher/classes' className={linkclassNames}>
          <i className='ri-school-line'></i> Classes
        </NavLink>
      </li>
      <li>
        <NavLink to='/teacher/students' className={linkclassNames}>
          <i className='ri-team-line'></i> Students
        </NavLink>
      </li>
      <li>
        <NavLink to='/teacher/teachers' className={linkclassNames}>
          <i className='ri-group-line'></i> Teachers
        </NavLink>
      </li>
      <li>
        <NavLink to='/teacher/assignment' className={linkclassNames}>
          <i className='ri-attachment-line'></i> Assignments
        </NavLink>
      </li>
      <li>
        <NavLink to='/teacher/exam' className={linkclassNames}>
          <i className='ri-draft-line'></i> Exam
        </NavLink>
      </li>
      <li>
        <NavLink to='/teacher/performance' className={linkclassNames}>
          <i className='ri-line-chart-line'></i> Performance
        </NavLink>
      </li>
      <li>
        <NavLink to='/teacher/attendance' className={linkclassNames}>
          <i className='ri-calendar-line'></i> Attendance
        </NavLink>
      </li>
      <li>
        <NavLink to='/teacher/library' className={linkclassNames}>
          <i className='ri-building-4-line'></i> Library
        </NavLink>
      </li>
      <li>
        <NavLink to='/teacher/announcement' className={linkclassNames}>
          <i className='ri-megaphone-line'></i> Announcement
        </NavLink>
      </li>
      <li>
        <NavLink to='/teacher/events' className={linkclassNames}>
          <i className='ri-calendar-event-line'></i> Events and Calendar
        </NavLink>
      </li>
      <li>
        <NavLink to='/teacher/settings' className={linkclassNames}>
          <i className='ri-settings-2-line'></i> Settings and Profile
        </NavLink>
      </li>
    </ul>
  );
};

export default TeacherList;
