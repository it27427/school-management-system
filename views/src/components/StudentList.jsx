import { NavLink } from 'react-router-dom';

const StudentList = () => {
  const linkclassNames = ({ isActive }) =>
    isActive
      ? 'py-2 px-3 inline-block w-full bg-sky-700 text-white text-sm'
      : 'py-2 px-3 inline-block w-full text-slate-100 text-sm hover:bg-sky-700 text-white';

  return (
    <ul className='flex flex-col gap-0.5'>
      <li>
        <NavLink to='/admin/dashboard' className={linkclassNames}>
          <i className='ri-dashboard-line'></i> Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink to='/admin/classes' className={linkclassNames}>
          <i className='ri-school-line'></i> Classes
        </NavLink>
      </li>
      <li>
        <NavLink to='/admin/students' className={linkclassNames}>
          <i className='ri-team-line'></i> Students
        </NavLink>
      </li>
      <li>
        <NavLink to='/admin/teachers' className={linkclassNames}>
          <i className='ri-group-line'></i> Teachers
        </NavLink>
      </li>
      <li>
        <NavLink to='/admin/assignment' className={linkclassNames}>
          <i className='ri-attachment-line'></i> Assignments
        </NavLink>
      </li>
      <li>
        <NavLink to='/admin/exam' className={linkclassNames}>
          <i className='ri-draft-line'></i> Exam
        </NavLink>
      </li>
      <li>
        <NavLink to='/admin/performance' className={linkclassNames}>
          <i className='ri-line-chart-line'></i> Performance
        </NavLink>
      </li>
      <li>
        <NavLink to='/admin/attendance' className={linkclassNames}>
          <i className='ri-calendar-line'></i> Attendance
        </NavLink>
      </li>
      <li>
        <NavLink to='/admin/library' className={linkclassNames}>
          <i className='ri-building-4-line'></i> Library
        </NavLink>
      </li>
      <li>
        <NavLink to='/admin/announcement' className={linkclassNames}>
          <i className='ri-megaphone-line'></i> Announcement
        </NavLink>
      </li>
      <li>
        <NavLink to='/admin/events' className={linkclassNames}>
          <i className='ri-calendar-event-line'></i> Events and Calendar
        </NavLink>
      </li>
      <li>
        <NavLink to='/admin/settings' className={linkclassNames}>
          <i className='ri-settings-2-line'></i> Settings and Profile
        </NavLink>
      </li>
    </ul>
  );
};

export default StudentList;
