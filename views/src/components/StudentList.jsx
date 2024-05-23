import { NavLink } from 'react-router-dom';

const StudentList = () => {
  const linkclassNames = ({ isActive }) =>
    isActive
      ? 'py-2 px-3 inline-block w-full bg-sky-700 text-white text-sm'
      : 'py-2 px-3 inline-block w-full text-slate-100 text-sm hover:bg-sky-700 text-white';

  return (
    <ul className='flex flex-col gap-0.5'>
      <li>
        <NavLink to='/student/dashboard' className={linkclassNames}>
          <i className='ri-dashboard-line'></i> Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink to='/student/assignment' className={linkclassNames}>
          <i className='ri-attachment-line'></i> Assignments
        </NavLink>
      </li>
      <li>
        <NavLink to='/student/exam' className={linkclassNames}>
          <i className='ri-draft-line'></i> Exam
        </NavLink>
      </li>
      <li>
        <NavLink to='/student/performance' className={linkclassNames}>
          <i className='ri-line-chart-line'></i> Performance
        </NavLink>
      </li>
      <li>
        <NavLink to='/student/attendance' className={linkclassNames}>
          <i className='ri-calendar-line'></i> Attendance
        </NavLink>
      </li>
      <li>
        <NavLink to='/student/announcement' className={linkclassNames}>
          <i className='ri-megaphone-line'></i> Announcement
        </NavLink>
      </li>
      <li>
        <NavLink to='/student/profile' className={linkclassNames}>
          <i className='ri-user-3-line'></i> Profile
        </NavLink>
      </li>
    </ul>
  );
};

export default StudentList;
