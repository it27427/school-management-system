import { NavLink } from 'react-router-dom';

const TeacherList = () => {
  const linkclassNames = ({ isActive }) =>
    isActive
      ? 'py-2 px-3 inline-block w-full bg-sky-700 text-white text-sm'
      : 'py-2 px-3 inline-block w-full text-slate-100 text-sm hover:bg-sky-700 text-white';

  return (
    <ul className='flex flex-col gap-0.5'>
      <li className={!isOpen ? 'text-center' : ''}>
        <NavLink to='/teacher/dashboard' className={linkclassNames}>
          <i
            className={
              !isOpen ? 'ri-dashboard-line text-lg' : 'ri-dashboard-line'
            }
          ></i>
          {isOpen && ' Dashboard'}
        </NavLink>
      </li>

      <li className={!isOpen ? 'text-center' : ''}>
        <NavLink to='/teacher/classes' className={linkclassNames}>
          <i
            className={!isOpen ? 'ri-school-line text-lg' : 'ri-school-line'}
          ></i>

          {isOpen && ' Classes'}
        </NavLink>
      </li>

      <li className={!isOpen ? 'text-center' : ''}>
        <NavLink to='/teacher/students' className={linkclassNames}>
          <i className={!isOpen ? 'ri-team-line text-lg' : 'ri-team-line'}></i>
          {isOpen && ' Students'}
        </NavLink>
      </li>

      <li className={!isOpen ? 'text-center' : ''}>
        <NavLink to='/teacher/teachers' className={linkclassNames}>
          <i
            className={!isOpen ? 'ri-group-line text-lg' : 'ri-group-line'}
          ></i>

          {isOpen && ' Teachers'}
        </NavLink>
      </li>

      <li className={!isOpen ? 'text-center' : ''}>
        <NavLink to='/teacher/assignment' className={linkclassNames}>
          <i
            className={
              !isOpen ? 'ri-attachment-line text-lg' : 'ri-attachment-line'
            }
          ></i>

          {isOpen && ' Assignments'}
        </NavLink>
      </li>

      <li className={!isOpen ? 'text-center' : ''}>
        <NavLink to='/teacher/exam' className={linkclassNames}>
          <i
            className={!isOpen ? 'ri-draft-line text-lg' : 'ri-draft-line'}
          ></i>

          {isOpen && ' Exam'}
        </NavLink>
      </li>

      <li className={!isOpen ? 'text-center' : ''}>
        <NavLink to='/teacher/performance' className={linkclassNames}>
          <i
            className={
              !isOpen ? 'ri-line-chart-line text-lg' : 'ri-line-chart-line'
            }
          ></i>
          {isOpen && ' Performance'}
        </NavLink>
      </li>

      <li className={!isOpen ? 'text-center' : ''}>
        <NavLink to='/teacher/attendance' className={linkclassNames}>
          <i
            className={
              !isOpen ? 'ri-calendar-line text-lg' : 'ri-calendar-line'
            }
          ></i>

          {isOpen && ' Attendance'}
        </NavLink>
      </li>

      <li className={!isOpen ? 'text-center' : ''}>
        <NavLink to='/teacher/announcement' className={linkclassNames}>
          <i
            className={
              !isOpen ? 'ri-megaphone-line text-lg' : 'ri-megaphone-line'
            }
          ></i>

          {isOpen && ' Announcement'}
        </NavLink>
      </li>

      <li className={!isOpen ? 'text-center' : ''}>
        <NavLink to='/teacher/events' className={linkclassNames}>
          <i
            className={
              !isOpen
                ? 'ri-calendar-event-line text-lg'
                : 'ri-calendar-event-line'
            }
          ></i>

          {isOpen && ' Events and Calendar'}
        </NavLink>
      </li>

      <li className={!isOpen ? 'text-center' : ''}>
        <NavLink to='/teacher/profile' className={linkclassNames}>
          <i
            className={!isOpen ? 'ri-user-3-line text-lg' : 'ri-user-3-line'}
          ></i>

          {isOpen && ' Profile'}
        </NavLink>
      </li>
    </ul>
  );
};

export default TeacherList;
