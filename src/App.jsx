import { useEffect, useMemo, useState } from 'react'
import './erp2.css'
import ModulePages from './ModulePages.jsx'

const menuGroups = [
  {
    title: 'Academic',
    items: [
      'Time Table',
      'Course Outline',
      'Attendance Status',
      'Attendance Subject',
      'Assessment Subject',
      'Assessment Marks',
      'Assignment',
      'Assignments',
      'Current Backlog',
      'Exam Result',
      'Leave Application',
      'Mentoring Questions',
      'My Grades',
      'Online Class Record',
      'Online Test',
      'Online Test Portal',
      'Plagiarism Check',
      'Print Exam Form',
      'Registration Form',
      'Special Leave',
      'Student Progress',
      'Subject Choice',
      'Zoom Online Class',
      'Exam Schedule',
    ],
  },
  {
    title: 'Fees',
    items: [
      'Apply Bus Facility',
      'Fees Installment',
      'Fees Receipts',
      'Online Fee Transaction',
      'Other Fee Print',
      'Other Ledger',
      'Pay Fee Bus/Mess',
      'Pay Fee Online',
      'Pay Other Fee',
      'Student Ledger',
      'Verify Transaction',
    ],
  },
  {
    title: 'General',
    items: [
      'ABCID Verification',
      'Academic Calendar',
      'Contact Details',
      'Examination Pattern',
      'Grievance',
      'News/Notices',
      'Online Form Application',
      'Other Service Request',
      'Progression Diary',
      'Progression Index',
      'Question Bank',
      'Question Paper',
      'Submit Documents',
      'Syllabus',
      "Today's Dispatch",
      'Your Profile',
      'Settings',
    ],
  },
  {
    title: 'Placements',
    items: [
      'Career Plan',
      'Internship Permission',
      'Placement News',
      'Placements',
      'Placement Drive',
      'Update Profile 1',
      'Update Profile 2',
      'Update Resume',
      'Upload SIP',
    ],
  },
  {
    title: 'Student Services',
    items: [
      'Hostel Notification',
      'Hostel/Bus Service',
      'Hostel Complaint',
      'Hostel Registration',
      'Apply Bus Stops',
      'Bus Routes',
      'Bus Stops',
      'Circulation Ledger',
      'Ebook Center',
      'Fine Records',
      'Library Rules',
      'OPAC',
    ],
  },
]

const pageData = {
  'Time Table': {
    icon: '📅',
    description: 'View your complete semester timetable, class timings, rooms and faculty details.',
  },
  'Course Outline': {
    icon: '📚',
    description: 'View subject-wise course outline, units, topics and learning objectives.',
  },
  'Attendance Status': {
    icon: '📊',
    description: 'Check your overall attendance percentage and attendance status.',
  },
  'Attendance Subject': {
    icon: '📈',
    description: 'View subject-wise attendance records and attendance percentage.',
  },
  'Assessment Subject': {
    icon: '📝',
    description: 'View internal assessment details for all registered subjects.',
  },
  'Assessment Marks': {
    icon: '🏆',
    description: 'Check your assessment marks and internal examination performance.',
  },
  'Assignment': { icon: '📋', description: 'View pending and upcoming academic assignments.' },
  Assignments: { icon: '📚', description: 'View all assignments submitted and assigned by faculty.' },
  'Current Backlog': { icon: '⚠️', description: 'Check your current backlog subjects and examination status.' },
  'Exam Result': { icon: '🏆', description: 'View semester examination results, SGPA and academic performance.' },
  'Leave Application': {
    icon: '📄',
    description: 'Apply for academic leave and check the status of submitted applications.',
  },
  'Mentoring Questions': { icon: '💬', description: 'View and answer questions related to student mentoring.' },
  'My Grades': { icon: '🎓', description: 'View subject grades and semester-wise academic performance.' },
  'Online Class Record': {
    icon: '💻',
    description: 'View records of your online classes and attendance.',
  },
  'Online Test': { icon: '📝', description: 'View available online tests and test history.' },
  'Online Test Portal': {
    icon: '🌐',
    description: 'Access your online examination and quiz portal.',
  },
  'Plagiarism Check': { icon: '🔍', description: 'Submit academic documents for plagiarism checking.' },
  'Print Exam Form': { icon: '🖨️', description: 'View and print your examination form.' },
  'Registration Form': { icon: '📄', description: 'Complete and manage your semester registration form.' },
  'Special Leave': { icon: '📑', description: 'Apply for special leave according to college rules.' },
  'Student Progress': { icon: '📈', description: 'Track your overall academic progress.' },
  'Subject Choice': { icon: '📚', description: 'Select and manage your available subjects.' },
  'Zoom Online Class': { icon: '🎥', description: 'Join scheduled Zoom online classes.' },
  'Exam Schedule': { icon: '🗓️', description: 'View upcoming university and semester examination schedules.' },
  'Apply Bus Facility': { icon: '🚌', description: 'Apply for college bus and transportation facilities.' },
  'Fees Installment': { icon: '💰', description: 'View installment amounts, due dates and payment status.' },
  'Fees Receipts': { icon: '🧾', description: 'Download and view previous fee payment receipts.' },
  'Online Fee Transaction': { icon: '💳', description: 'View online fee transaction history and payment status.' },
  'Other Fee Print': { icon: '🖨️', description: 'Print receipts for examination, library and other fees.' },
  'Other Ledger': { icon: '📒', description: 'View your additional fee ledger and transactions.' },
  'Pay Fee Bus/Mess': { icon: '🚌', description: 'Pay bus or hostel mess related fees online.' },
  'Pay Fee Online': { icon: '💳', description: 'Pay your tuition or semester fees online.' },
  'Pay Other Fee': { icon: '💰', description: 'Pay examination, workshop, revaluation and other fees.' },
  'Student Ledger': { icon: '📒', description: 'View total fees, paid amount and pending dues.' },
  'Verify Transaction': { icon: '✓', description: 'Verify a payment transaction if money was deducted but receipt was not generated.' },
  'ABCID Verification': { icon: '🪪', description: 'Verify and manage your Academic Bank of Credits ID.' },
  'Academic Calendar': { icon: '🗓️', description: 'View academic events, holidays, examinations and important dates.' },
  'Contact Details': { icon: '📞', description: 'View and update your mobile number, email and address.' },
  'Examination Pattern': { icon: '📝', description: 'View examination pattern, rules and examination information.' },
  Grievance: { icon: '⚠️', description: 'Submit a complaint or grievance to the college administration.' },
  'News/Notices': { icon: '📢', description: 'View latest college news, notices and circulars.' },
  'Online Form Application': {
    icon: '📄',
    description: 'Apply for available online college forms and services.',
  },
  'Other Service Request': { icon: '📑', description: 'Request services such as Bonafide, TC and other documents.' },
  'Progression Diary': { icon: '📔', description: 'View your daily academic progress and activities.' },
  'Progression Index': { icon: '📊', description: 'View semester-wise CGPA and academic progression.' },
  'Question Bank': { icon: '📚', description: 'Access subject-wise and unit-wise question banks.' },
  'Question Paper': { icon: '📄', description: 'Access previous year university and semester question papers.' },
  'Submit Documents': { icon: '📤', description: 'Upload required academic and identity documents.' },
  Syllabus: { icon: '📖', description: 'View and download subject-wise syllabus.' },
  "Today's Dispatch": { icon: '📨', description: "View today's academic dispatch and class-related information." },
  'Your Profile': { icon: '👤', description: 'View your complete student profile and academic details.' },
  'Career Plan': { icon: '🎯', description: 'View career planning and counselling information.' },
  'Internship Permission': { icon: '📄', description: 'Apply for internship permission and NOC.' },
  'Placement News': { icon: '📢', description: 'View placement-related news and notices.' },
  Placements: { icon: '💼', description: 'View placement records and eligible companies.' },
  'Placement Drive': { icon: '🏢', description: 'View upcoming placement drives and apply for available opportunities.' },
  'Update Profile 1': { icon: '👤', description: 'Update the first section of your placement profile.' },
  'Update Profile 2': { icon: '👤', description: 'Update the second section of your placement profile.' },
  'Update Resume': { icon: '📄', description: 'Upload or update your latest resume.' },
  'Upload SIP': { icon: '📤', description: 'Upload SIP and internship-related documents.' },
  'Hostel Notification': { icon: '🏠', description: 'View hostel rules, notices, allotment and notifications.' },
  'Hostel/Bus Service': { icon: '🚌', description: 'Apply for or check hostel and bus service information.' },
  'Hostel Complaint': { icon: '🔧', description: 'Submit complaints related to room, mess and maintenance.' },
  'Hostel Registration': { icon: '🏠', description: 'Register or renew your hostel accommodation.' },
  'Apply Bus Stops': { icon: '🚍', description: 'Apply for a new bus stop or request a bus stop change.' },
  'Bus Routes': { icon: '🗺️', description: 'View available college bus routes.' },
  'Bus Stops': { icon: '🚏', description: 'View bus stops and transportation timings.' },
  'Circulation Ledger': { icon: '📚', description: 'Check issued books, return dates and borrowing history.' },
  'Ebook Center': { icon: '📱', description: 'Access digital books and online study material.' },
  'Fine Records': { icon: '💰', description: 'View library fines and late return records.' },
  'Library Rules': { icon: '📖', description: 'View library rules, conditions and timings.' },
  OPAC: { icon: '🔍', description: 'Search books and resources available in the library.' },
}

const statCards = [
  { icon: '✅', label: 'Total Attendance', value: '82.5%', delta: '+3.5% this term', tone: 'green' },
  { icon: '🎓', label: 'Current CGPA', value: '8.16', delta: 'Top 18% of cohort', tone: 'blue' },
  { icon: '📝', label: 'Pending Assignments', value: '02', delta: '1 due this week', tone: 'orange' },
  { icon: '📅', label: 'Upcoming Exam', value: 'Oct 15', delta: 'Data Structures', tone: 'purple' },
]

const events = [
  { day: '08', month: 'OCT', title: 'Database case study', detail: 'Assignment due · 11:59 PM', badge: 'Due soon', tone: 'warning' },
  { day: '15', month: 'OCT', title: 'Mid-semester examination', detail: 'Data Structures · 9:00 AM', badge: 'Exam', tone: 'blue-badge' },
  { day: '24', month: 'OCT', title: 'Campus placement drive', detail: 'Northbridge auditorium', badge: 'Important', tone: 'danger' },
]

const notices = [
  { title: 'Database Systems assignment posted', detail: 'Normalisation case study · due October 8.', time: '1 hour ago' },
  { title: 'Attendance record updated', detail: 'Computer Networks attendance is now 68%.', time: 'Today' },
  { title: 'Mentor feedback received', detail: 'Dr. Meera Iyer replied to your study plan question.', time: 'Yesterday' },
]

const quickLinks = [
  { icon: '📅', label: 'Time Table' },
  { icon: '📄', label: 'Leave Application' },
  { icon: '📚', label: 'Course Outline' },
  { icon: '🏆', label: 'Exam Result' },
  { icon: '📝', label: 'Assignments' },
  { icon: '💬', label: 'Mentoring Questions' },
]

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('erpTheme')
    return savedTheme === 'dark' ? 'dark' : 'light'
  })
  const [searchValue, setSearchValue] = useState('')
  const [activePage, setActivePage] = useState('dashboard')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [pageDetails, setPageDetails] = useState({
    title: 'Dashboard',
    icon: '📊',
    description: 'View your academic dashboard and latest updates.',
  })
  const [openGroups, setOpenGroups] = useState(() => ({ Academic: true, Fees: false, General: false, Placements: false, 'Student Services': false }))

  useEffect(() => {
    document.body.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('erpTheme', theme)
  }, [theme])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSidebarOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  const filteredGroups = useMemo(() => {
    if (!searchValue.trim()) {
      return menuGroups
    }

    const query = searchValue.toLowerCase().trim()

    return menuGroups
      .map((group) => ({
        ...group,
        items: group.items.filter((item) => item.toLowerCase().includes(query)),
      }))
      .filter((group) => group.items.length > 0)
  }, [searchValue])

  const handleOpenPage = (pageName) => {
    if (pageName === 'dashboard') {
      setActivePage('dashboard')
      setSidebarOpen(false)
      return
    }

    const data = pageData[pageName] || {
      icon: '📋',
      description: 'This ERP module is ready for integration with your backend.',
    }

    setPageDetails({
      title: pageName,
      icon: data.icon,
      description: data.description,
    })
    setActivePage(pageName)
    setSidebarOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleLogout = () => {
    const confirmLogout = window.confirm('Are you sure you want to logout?')
    if (confirmLogout) {
      setActivePage('dashboard')
      window.alert('Logout successful!')
    }
  }

  const handleThemeToggle = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  const toggleGroup = (title) => {
    setOpenGroups((current) => ({
      ...current,
      [title]: !current[title],
    }))
  }

  return (
    <div className="app">
      <aside className={`sidebar ${sidebarOpen ? 'show' : ''}`}>
        <div className="brand">
          <div className="brand-logo">M</div>
          <div>
            <h2>MYERP</h2>
            <span>Student Portal</span>
          </div>
        </div>

        <div className="profile-mini">
          <button type="button" className="avatar" aria-label="Open Ashwin Sharma's profile" onClick={() => handleOpenPage('Your Profile')}>AS<span className="avatar-brand-mark" aria-hidden="true">N</span></button>
          <div>
            <strong>Ashwin Sharma</strong>
            <small>Student ID: 2024-105</small>
          </div>
        </div>

        <nav className="menu">
          {filteredGroups.map((group) => (
            <div key={group.title} className={`menu-group ${openGroups[group.title] || searchValue.trim() ? 'open' : ''}`}>
              <button
                type="button"
                className={`menu-title ${openGroups[group.title] || searchValue.trim() ? 'active' : ''}`}
                onClick={() => toggleGroup(group.title)}
              >
                <span>▣</span>
                <span>{group.title}</span>
                <b>⌄</b>
              </button>

              <div className="submenu">
                {group.items.map((item) => (
                  <a
                    key={item}
                    href="#"
                    onClick={(event) => {
                      event.preventDefault()
                      handleOpenPage(item)
                    }}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <button id="logoutBtn" type="button" onClick={handleLogout}>
            ⎋ Logout
          </button>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <div className="page-heading">
            <div className="small-heading">Overview</div>
            <h1>{activePage === 'dashboard' ? 'Dashboard' : pageDetails.title}</h1>
          </div>

          <div className="top-actions">
            <div className="search-box">
              <span>⌕</span>
              <input
                id="searchInput"
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
                placeholder="Search module"
                aria-label="Search module"
              />
            </div>

            <button type="button" className="icon-btn notification" aria-label="Notifications">
              🔔
              <i>3</i>
            </button>

            <button type="button" id="themeBtn" className="icon-btn" onClick={handleThemeToggle} aria-label="Toggle theme">
              {theme === 'dark' ? '☀' : '☾'}
            </button>

            <div className="top-profile">
              <button type="button" className="avatar small" aria-label="Open Ashwin Sharma's profile" onClick={() => handleOpenPage('Your Profile')}>AS<span className="avatar-brand-mark" aria-hidden="true">N</span></button>
              <div>
                <strong>Ashwin</strong>
                <small>Student</small>
              </div>
            </div>

            <button type="button" className="mobile-menu" onClick={() => setSidebarOpen((value) => !value)} aria-label="Toggle menu">
              ☰
            </button>
          </div>
        </header>

        <div className="content">
          {activePage === 'dashboard' ? (
            <>
              <section className="welcome-card">
                <div>
                  <div className="welcome-label">WELCOME BACK</div>
                  <h2>Good day, Ashwin</h2>
                  <p>
                    Your academic dashboard is up to date. Continue with assignments, attendance, and fee updates before the next cycle starts.
                  </p>
                  <button type="button" className="primary-btn" onClick={() => handleOpenPage('Your Profile')}>
                    View profile
                  </button>
                </div>

                <div className="welcome-art" aria-hidden="true">
                  <div className="cube">▣</div>
                  <div className="orbit" />
                  <div className="orbit orbit2" />
                </div>
              </section>

              <div className="stats-grid">
                {statCards.map((card) => (
                  <div key={card.label} className="stat-card">
                    <div className={`stat-icon ${card.tone}`}>{card.icon}</div>
                    <div>
                      <span>{card.label}</span>
                      <strong>{card.value}</strong>
                      <small>{card.delta}</small>
                    </div>
                  </div>
                ))}
              </div>

              <div className="dashboard-grid">
                <section className="panel">
                  <div className="panel-header">
                    <div>
                      <span>PERFORMANCE</span>
                      <h3>Attendance</h3>
                    </div>
                    <button type="button">This week</button>
                  </div>

                  <div className="attendance-content">
                    <div className="progress-circle">
                      <div>
                        <strong>82%</strong>
                        <span>Present</span>
                      </div>
                    </div>

                    <div className="subject-bars">
                      <div className="bar-item">
                        <div>
                          <span>Computer Science</span>
                          <b>89%</b>
                        </div>
                        <div className="bar"><i style={{ width: '89%' }} /></div>
                      </div>
                      <div className="bar-item">
                        <div>
                          <span>Mathematics</span>
                          <b>84%</b>
                        </div>
                        <div className="bar"><i style={{ width: '84%' }} /></div>
                      </div>
                      <div className="bar-item">
                        <div>
                          <span>Electronics</span>
                          <b>77%</b>
                        </div>
                        <div className="bar"><i style={{ width: '77%' }} /></div>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="panel">
                  <div className="panel-header">
                    <div>
                      <span>CALENDAR</span>
                      <h3>Upcoming Events</h3>
                    </div>
                    <button type="button">View All</button>
                  </div>

                  {events.map((event) => (
                    <div key={`${event.day}-${event.month}`} className="event">
                      <div className="date">
                        <b>{event.day}</b>
                        <small>{event.month}</small>
                      </div>
                      <div>
                        <strong>{event.title}</strong>
                        <span>{event.detail}</span>
                      </div>
                      <i className={`badge ${event.tone}`}>{event.badge}</i>
                    </div>
                  ))}
                </section>
              </div>

              <div className="dashboard-grid" style={{ marginTop: '18px' }}>
                <section className="panel quick-panel">
                  <div className="panel-header">
                    <div>
                      <span>TOOLS</span>
                      <h3>Quick Access</h3>
                    </div>
                    <button type="button">Open</button>
                  </div>

                  <div className="quick-grid">
                    {quickLinks.map((item) => (
                      <button type="button" key={item.label} onClick={() => handleOpenPage(item.label)}>
                        <span>{item.icon}</span>
                        <b>{item.label}</b>
                      </button>
                    ))}
                  </div>
                </section>

                <section className="panel notice-panel">
                  <div className="panel-header">
                    <div>
                      <span>UPDATES</span>
                      <h3>Notice Board</h3>
                    </div>
                    <button type="button">All</button>
                  </div>

                  {notices.map((notice) => (
                    <div key={notice.title} className="notice">
                      <span className="notice-dot" aria-hidden="true" />
                      <div>
                        <strong>{notice.title}</strong>
                        <p>{notice.detail}</p>
                        <small>{notice.time}</small>
                      </div>
                    </div>
                  ))}
                </section>
              </div>
            </>
          ) : (
            <>
              <button type="button" className="back-btn" onClick={() => setActivePage('dashboard')}>
                ← Back to Dashboard
              </button>
              <ModulePages page={activePage} theme={theme} onThemeToggle={handleThemeToggle} />
            </>
          )}
        </div>

        <footer>
          <span>© 2026 MYERP Portal</span>
          <span>Student Information System</span>
        </footer>
      </main>
    </div>
  )
}

export default App
