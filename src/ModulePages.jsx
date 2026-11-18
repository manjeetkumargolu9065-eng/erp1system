import { useState } from 'react'
import './modulePages.css'
import FeePages from './FeePages.jsx'
import GeneralPages from './GeneralPages.jsx'
import ServicePages from './ServicePages.jsx'
import AcademicPages from './AcademicPages.jsx'

const subjects = [
  { code: 'CS301', name: 'Data Structures', faculty: 'Dr. Meera Iyer', room: 'B-204', attendance: 91 },
  { code: 'CS302', name: 'Database Systems', faculty: 'Prof. Arjun Rao', room: 'C-108', attendance: 84 },
  { code: 'MA203', name: 'Applied Mathematics', faculty: 'Dr. N. Kapoor', room: 'A-312', attendance: 76 },
  { code: 'CS305', name: 'Computer Networks', faculty: 'Prof. Sana Khan', room: 'B-110', attendance: 68 },
]

const assignments = [
  { subject: 'Database Systems', title: 'Normalisation case study', description: 'Model a campus bookstore schema through 3NF and document each dependency.', deadline: 'Oct 08, 2026', priority: 'High', status: 'To Do' },
  { subject: 'Data Structures', title: 'Graph traversal lab', description: 'Implement BFS and DFS with an adjacency-list representation.', deadline: 'Oct 11, 2026', priority: 'Medium', status: 'In Progress' },
  { subject: 'Applied Mathematics', title: 'Fourier series worksheet', description: 'Solve the applied signal analysis problems from unit four.', deadline: 'Oct 14, 2026', priority: 'Low', status: 'Submitted' },
  { subject: 'Computer Networks', title: 'Routing protocol review', description: 'Compare distance-vector and link-state routing in a short report.', deadline: 'Sep 28, 2026', priority: 'High', status: 'Overdue' },
]

function ModuleIntro({ eyebrow, title, detail, action }) {
  return (
    <div className="module-intro">
      <div><span>{eyebrow}</span><h2>{title}</h2><p>{detail}</p></div>
      {action}
    </div>
  )
}

function Tag({ children, tone = '' }) {
  return <span className={`module-tag ${tone}`}>{children}</span>
}

function TimetablePage() {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const slots = [
    { time: '09:00', label: '09:00 – 10:00', classes: ['Data Structures', 'Mathematics', 'Database Systems', 'Computer Networks', 'Data Structures', 'Project Studio'] },
    { time: '10:00', label: '10:00 – 11:00', classes: ['Data Structures', 'Database Systems', 'Database Systems', 'Mathematics', 'Computer Networks', 'Project Studio'] },
    { time: '11:00', label: '11:00 – 11:20', break: true },
    { time: '11:20', label: '11:20 – 12:20', classes: ['Computer Networks', 'Data Structures', 'Mathematics', 'Data Structures', 'Database Systems', '—'] },
    { time: '12:20', label: '12:20 – 13:20', classes: ['Database Systems', 'Computer Networks', 'Data Structures', 'Project Studio', 'Mathematics', '—'] },
    { time: '13:20', label: '13:20 – 14:00', break: true, lunch: true },
    { time: '14:00', label: '14:00 – 15:00', classes: ['Mathematics', 'Project Studio', 'Computer Networks', 'Database Systems', 'Project Studio', '—'] },
  ]
  return (
    <div className="timetable-page">
      <ModuleIntro eyebrow="WEEK 06 · ODD SEMESTER" title="Your week, in focus." detail="Computer Science · Semester 5 · Fall 2026" action={<button className="module-button quiet">‹ &nbsp;Previous week&nbsp;&nbsp; Next week&nbsp; ›</button>} />
      <div className="timetable-legend"><span><i className="legend-dot lecture" /> Lecture</span><span><i className="legend-dot lab" /> Lab / studio</span><span><i className="legend-dot break" /> Break</span><span className="timetable-location">Campus · North block</span></div>
      <div className="timetable-scroll">
        <div className="timetable-grid">
          <div className="timetable-corner">LOCAL TIME</div>
          {days.map((day, index) => <div className={`timetable-day ${index === 2 ? 'today' : ''}`} key={day}><b>{day.slice(0, 3)}</b><small>{index === 2 ? '07' : String(index + 5).padStart(2, '0')} OCT</small></div>)}
          {slots.map((slot) => <div className="timetable-row" key={slot.time}>
            <div className={`timetable-time ${slot.break ? 'break-time' : ''}`}>{slot.label}</div>
            {slot.break ? <div className="timetable-break" style={{ gridColumn: 'span 6' }}>{slot.lunch ? 'LUNCH · CAMPUS CAFETERIA' : 'CAMPUS BREAK'}</div> : slot.classes.map((name, index) => {
              const active = index === 2 && slot.time === '11:20'
              const lab = name === 'Project Studio'
              return <div className={`timetable-slot ${name === '—' ? 'empty' : lab ? 'lab-class' : ''} ${active ? 'current-class' : ''}`} key={`${slot.time}-${days[index]}`}>
                {name !== '—' && <><strong>{name}</strong><span>{lab ? 'Studio 04' : subjects.find((subject) => subject.name === name)?.room}</span><small>{lab ? 'Ms. L. Chen' : subjects.find((subject) => subject.name === name)?.faculty}</small>{active && <i>HAPPENING NOW</i>}</>}
              </div>
            })}
          </div>)}
        </div>
      </div>
      <div className="timetable-foot"><span><b>Next up</b> · Applied Mathematics</span><span>Today, 14:00 · Room A-312</span></div>
    </div>
  )
}

function CourseOutlinePage() {
  const [openUnit, setOpenUnit] = useState(1)
  const units = [
    { title: 'Foundations & complexity', count: '8 topics', done: '8 / 8', progress: 100, topics: ['Algorithm analysis', 'Asymptotic notation', 'Recurrence relations'] },
    { title: 'Linear data structures', count: '10 topics', done: '7 / 10', progress: 70, topics: ['Arrays and linked lists', 'Stacks & queues', 'Circular buffers', 'Applications and analysis'] },
    { title: 'Trees & balanced search', count: '12 topics', done: '2 / 12', progress: 17, topics: ['Binary search trees', 'AVL rotations', 'B-trees', 'Tree traversals'] },
    { title: 'Graphs & optimisation', count: '9 topics', done: '0 / 9', progress: 0, topics: ['Graph representations', 'Shortest paths', 'Minimum spanning trees'] },
  ]
  return <div className="outline-page">
    <ModuleIntro eyebrow="COURSE MAP · CS301" title="Data Structures" detail="Dr. Meera Iyer · 4 credits · 39 topics across 4 units" action={<Tag tone="teal">68% complete</Tag>} />
    <div className="outline-layout"><aside className="outline-summary"><div className="outline-ring"><strong>68%</strong><small>COURSE<br />COMPLETE</small></div><p>You're right on track. Finish two more topics this week to stay ahead of the class pace.</p><div className="outline-key"><span><i className="topic-dot complete" />Completed <b>17</b></span><span><i className="topic-dot current" />In progress <b>1</b></span><span><i className="topic-dot pending" />Up next <b>21</b></span></div></aside>
      <div className="unit-list">{units.map((unit, index) => <section className={`unit-row ${openUnit === index ? 'expanded' : ''}`} key={unit.title}><button className="unit-trigger" onClick={() => setOpenUnit(openUnit === index ? -1 : index)} aria-expanded={openUnit === index}><span className="unit-number">0{index + 1}</span><span className="unit-title"><b>{unit.title}</b><small>{unit.count}</small></span><span className="unit-progress"><i><em style={{ width: `${unit.progress}%` }} /></i><small>{unit.done}</small></span><span className="unit-chevron">{openUnit === index ? '−' : '+'}</span></button>{openUnit === index && <div className="topic-list">{unit.topics.map((topic, topicIndex) => <div className="topic-row" key={topic}><span className={topicIndex < Math.floor(unit.progress / 30) ? 'topic-check done' : 'topic-check'}>{topicIndex < Math.floor(unit.progress / 30) ? '✓' : '·'}</span>{topic}<small>{topicIndex < Math.floor(unit.progress / 30) ? 'COMPLETE' : 'LESSON'}</small></div>)}</div>}</section>)}</div>
    </div>
  </div>
}

function AttendanceStatusPage() {
  return <div className="attendance-page"><ModuleIntro eyebrow="ATTENDANCE · FALL 2026" title="Showing up adds up." detail="Attendance is calculated from 146 scheduled classes this semester." action={<button className="module-button quiet">Download report ↓</button>} />
    <div className="attendance-hero"><div className="attendance-score"><span>OVERALL ATTENDANCE</span><strong>82.5<small>%</small></strong><p>You're above the 75% minimum</p><div className="attendance-meter"><i /></div><small>Target 75% <b>+7.5 pts</b></small></div><div className="attendance-stats"><div><span>Present</span><strong>120</strong><small>of 146 classes</small></div><div><span>Absent</span><strong>20</strong><small>13.7% of classes</small></div><div><span>Late</span><strong>6</strong><small>Marked after bell</small></div></div><div className="attendance-warning"><b>Attendance watch</b><span>Computer Networks is at 68%. Attend the next 4 classes to restore a 75% buffer.</span></div></div>
    <section className="attendance-trend"><div className="attendance-section-title"><div><span>SEMESTER TREND</span><h3>Presence over time</h3></div><span>WEEKLY AVERAGE</span></div><div className="trend-chart" aria-label="Weekly attendance chart">{[72, 79, 76, 88, 83, 91, 86, 82, 94, 80, 89, 84].map((height, index) => <div className="trend-column" key={index}><i style={{ height: `${height}%` }} /><small>W{index + 1}</small></div>)}<div className="trend-target"><span>75% minimum</span></div></div></section>
    <div className="attendance-subject-list">{subjects.map((subject) => <div className="attendance-subject-line" key={subject.code}><span className="subject-code">{subject.code}</span><strong>{subject.name}</strong><div className="subject-attendance-track"><i className={subject.attendance < 75 ? 'low' : ''} style={{ width: `${subject.attendance}%` }} /></div><b className={subject.attendance < 75 ? 'low-text' : ''}>{subject.attendance}%</b><span>{subject.attendance < 75 ? 'Needs attention' : 'On track'}</span></div>)}</div>
  </div>
}

function AttendanceSubjectPage() {
  return <div className="subject-attendance-page"><ModuleIntro eyebrow="ACADEMIC RECORD · 2026" title="Attendance by subject" detail="A class-by-class view of your semester record." action={<select className="module-select" aria-label="Select semester"><option>Semester 5</option><option>Semester 4</option></select>} />
    <div className="subject-table-wrap"><table className="subject-table"><thead><tr><th>SUBJECT</th><th>CLASSES HELD</th><th>PRESENT</th><th>ABSENT</th><th>ATTENDANCE</th><th>STATUS</th></tr></thead><tbody>{subjects.map((subject, index) => { const held = [34, 32, 39, 41][index]; const present = Math.round(held * subject.attendance / 100); return <tr key={subject.code}><td><strong>{subject.name}</strong><small>{subject.code} · {['Dr. Meera Iyer', 'Prof. Arjun Rao', 'Dr. N. Kapoor', 'Prof. Sana Khan'][index]}</small></td><td>{held}</td><td>{present}</td><td>{held - present}</td><td><b>{subject.attendance}%</b><div className="table-progress"><i className={subject.attendance < 75 ? 'low' : ''} style={{ width: `${subject.attendance}%` }} /></div></td><td><Tag tone={subject.attendance < 75 ? 'rose' : 'teal'}>{subject.attendance < 75 ? 'Below threshold' : 'Good standing'}</Tag></td></tr>})}</tbody></table></div>
    <div className="attendance-note"><span>i</span><p><b>Attendance policy</b> A minimum of 75% attendance is required to sit for end-semester examinations.</p><strong>146 total classes</strong></div>
  </div>
}

function AssessmentSubjectPage() {
  const assessments = [
    { subject: 'Data Structures', code: 'CS301', color: 'cyan', total: 3, tests: [{ name: 'Quiz 01 · Complexity', max: 10, score: 9 }, { name: 'Lab evaluation', max: 20, score: 17 }, { name: 'Mid-semester', max: 30, score: 24 }] },
    { subject: 'Database Systems', code: 'CS302', color: 'coral', total: 3, tests: [{ name: 'Quiz 01 · SQL', max: 10, score: 8 }, { name: 'Schema design', max: 20, score: 16 }, { name: 'Mid-semester', max: 30, score: 22 }] },
    { subject: 'Applied Mathematics', code: 'MA203', color: 'lime', total: 3, tests: [{ name: 'Problem set 01', max: 10, score: 10 }, { name: 'Class test', max: 20, score: 14 }, { name: 'Mid-semester', max: 30, score: 21 }] },
  ]
  return <div className="assessment-subject-page"><ModuleIntro eyebrow="CONTINUOUS EVALUATION" title="Assessment tracker" detail="Semester 5 · Internal components count toward 40% of your final grade." action={<span className="assessment-weight">INTERNAL WEIGHT <b>40%</b></span>} />
    <div className="assessment-cards">{assessments.map((item) => <article className={`assessment-card ${item.color}`} key={item.code}><div className="assessment-card-head"><span>{item.code}</span><small>3 COMPONENTS</small></div><h3>{item.subject}</h3><div className="assessment-scoreline"><strong>{item.tests.reduce((sum, test) => sum + test.score, 0)}<small> / {item.tests.reduce((sum, test) => sum + test.max, 0)}</small></strong><span>INTERNAL SCORE</span></div><div className="assessment-tests">{item.tests.map((test) => <div key={test.name}><span>{test.name}</span><b>{test.score}<small> / {test.max}</small></b><i><em style={{ width: `${test.score / test.max * 100}%` }} /></i></div>)}</div><button className="assessment-link">View assessment details ↗</button></article>)}</div>
  </div>
}

function AssessmentMarksPage() {
  const marks = [{ name: 'Data Structures', internal: 24, external: 72 }, { name: 'Database Systems', internal: 22, external: 68 }, { name: 'Applied Mathematics', internal: 21, external: 77 }, { name: 'Computer Networks', internal: 19, external: 64 }]
  return <div className="marks-page"><div className="marks-sheet"><div className="marks-masthead"><div><span>ACADEMIC RECORDS OFFICE</span><h2>Statement of assessment</h2><p>Mid-semester examination · Fall 2026</p></div><div className="marks-seal">N<br /><small>U</small></div></div><div className="student-strip"><span><small>STUDENT</small><b>Ashwin Sharma</b></span><span><small>ROLL NUMBER</small><b>CS24-105</b></span><span><small>PROGRAMME</small><b>B.Tech · Computer Science</b></span><span><small>SEMESTER</small><b>05 / 08</b></span></div><table className="marks-table"><thead><tr><th>SUBJECT / COURSE CODE</th><th>INTERNAL<br />30 MARKS</th><th>EXTERNAL<br />70 MARKS</th><th>TOTAL<br />100 MARKS</th><th>GRADE</th></tr></thead><tbody>{marks.map((mark, index) => <tr key={mark.name}><td><b>{mark.name}</b><small>CS30{index + 1} · 4 credits</small></td><td>{mark.internal}</td><td>{mark.external}</td><td><strong>{mark.internal + mark.external}</strong></td><td><Tag tone={index === 3 ? 'amber' : 'teal'}>{['A', 'A', 'A+', 'B+'][index]}</Tag></td></tr>)}</tbody></table><div className="marks-total"><span>AGGREGATE SCORE <b>282 / 400</b></span><span>Percentage <b>70.5%</b></span><span>Result <b>PASS</b></span></div></div><section className="marks-performance"><div><span>PERFORMANCE PROFILE</span><h3>Strong consistency across core subjects</h3><p>Scores combine internal assessment and end-term examination marks.</p></div><div className="marks-bars">{marks.map((mark) => <div key={mark.name}><span>{mark.name}</span><i><em style={{ width: `${mark.internal + mark.external}%` }} /></i><b>{mark.internal + mark.external}</b></div>)}</div></section></div>
}

function AssignmentPage() {
  const [submitted, setSubmitted] = useState(false)
  return <div className="assignment-page"><ModuleIntro eyebrow="NEXT DEADLINE · OCT 08" title="Make room for good work." detail="One assignment is coming up. Your active coursework is gathered here." action={<Tag tone="amber">1 due this week</Tag>} />
    <article className="assignment-feature"><div className="assignment-feature-top"><Tag tone="rose">HIGH PRIORITY</Tag><span>CS302 · DATABASE SYSTEMS</span></div><div className="assignment-feature-body"><div><h3>Normalisation case study</h3><p>Model a campus bookstore schema through third normal form. Include an ER diagram, functional dependencies, and a short rationale for each decomposition.</p><div className="assignment-meta"><span>◷ &nbsp;Due Oct 08, 2026 · 11:59 PM</span><span>◉ &nbsp;Dr. Meera Iyer</span><span>↗ &nbsp;PDF or repository link</span></div></div><div className="assignment-countdown"><strong>04</strong><span>DAYS LEFT</span></div></div><div className="assignment-feature-bottom"><span>Submission status <b>{submitted ? 'Submitted just now' : 'Not submitted'}</b></span><button className="module-button primary" onClick={() => setSubmitted(true)}>{submitted ? 'Submitted ✓' : 'Submit assignment ↗'}</button></div></article>
    <div className="assignment-lower"><section><div className="assignment-section-head"><h3>Coming up next</h3><button>View all →</button></div>{assignments.slice(1, 3).map((item) => <div className="assignment-compact" key={item.title}><span className="assignment-datebox">{item.deadline.slice(4, 6)}<small>OCT</small></span><div><strong>{item.title}</strong><small>{item.subject} · Due {item.deadline}</small></div><Tag tone={item.status === 'Submitted' ? 'teal' : 'blue'}>{item.status}</Tag></div>)}</section><aside className="assignment-tip"><span>STUDY NOTE · 01</span><h3>Small starts beat last-minute sprints.</h3><p>Open a draft today. Your future self will thank you.</p><div className="tip-mark">✳</div></aside></div>
  </div>
}

function AssignmentsPage() {
  const [query, setQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')
  const columns = ['To Do', 'In Progress', 'Submitted', 'Overdue']
  const filtered = assignments.filter((item) => `${item.title} ${item.subject}`.toLowerCase().includes(query.toLowerCase()) && (statusFilter === 'All' || item.status === statusFilter))
  return <div className="kanban-page"><ModuleIntro eyebrow="COURSEWORK · SEMESTER 5" title="Assignments, at a glance." detail="Four active tasks across your enrolled subjects." action={<span className="kanban-summary">02 OPEN <i /> 01 SUBMITTED</span>} />
    <div className="kanban-tools"><label className="kanban-search">⌕ <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search assignments" /></label><div className="kanban-filters">{['All', ...columns].map((item) => <button className={statusFilter === item ? 'selected' : ''} key={item} onClick={() => setStatusFilter(item)}>{item}</button>)}</div></div>
    <div className="kanban-board">{columns.map((column) => { const items = filtered.filter((item) => item.status === column); return <section className={`kanban-column ${column.toLowerCase().replace(' ', '-')}`} key={column}><header><span className="kanban-status-dot" /><b>{column}</b><small>{items.length}</small></header>{items.length ? items.map((item) => <article className="kanban-card" key={item.title}><div><span>{item.subject}</span><Tag tone={item.priority === 'High' ? 'rose' : item.priority === 'Medium' ? 'amber' : 'teal'}>{item.priority}</Tag></div><h3>{item.title}</h3><p>{item.description}</p><footer><span>◷ {item.deadline}</span><b>AS</b></footer></article>) : <div className="kanban-empty">Nothing here right now</div>}</section>})}</div>
  </div>
}

function BacklogPage() {
  const [requested, setRequested] = useState(false)
  return <div className="backlog-page"><div className="backlog-banner"><div><span>ACADEMIC RECOVERY · 2026</span><h2>A clear path forward.</h2><p>One subject remains. Your next opportunity to clear it is in the winter examination window.</p></div><div className="backlog-count"><strong>01</strong><small>ACTIVE<br />BACKLOG</small></div></div><div className="backlog-subjects"><article className="backlog-card"><div className="backlog-card-top"><Tag tone="rose">REPEAT EXAM</Tag><span>SEMESTER 3</span></div><div className="backlog-code">MA201</div><h3>Discrete Mathematics</h3><p>Department of Applied Sciences</p><div className="backlog-details"><span><small>CREDITS</small><b>4</b></span><span><small>EXAM WINDOW</small><b>Dec 12 – 19</b></span><span><small>REGISTRATION</small><b>Opens Nov 02</b></span></div><div className="backlog-card-foot"><span>Exam centre: Main campus · Block A</span><button className="module-button primary" onClick={() => setRequested(true)}>{requested ? 'Request received ✓' : 'Clear this backlog ↗'}</button></div></article><aside className="backlog-guide"><span>YOUR NEXT STEPS</span><ol><li><b>01</b><div><strong>Review eligibility</strong><small>All fee dues must be cleared</small></div></li><li><b>02</b><div><strong>Register for exam</strong><small>Opens on November 2</small></div></li><li><b>03</b><div><strong>Download hall ticket</strong><small>Available after approval</small></div></li></ol></aside></div><p className="backlog-footnote">For support, contact the Examination Cell · examination@northbridge.edu</p></div>
}

function ExamResultPage() {
  const [semester, setSemester] = useState('Semester 4')
  const resultRows = semester === 'Semester 4' ? [['Data Structures', 'CS301', 'A', '9'], ['Database Systems', 'CS302', 'A', '9'], ['Applied Mathematics', 'MA203', 'B+', '8'], ['Computer Networks', 'CS305', 'A', '9']] : [['Programming I', 'CS101', 'A', '9'], ['Calculus', 'MA101', 'A+', '10'], ['Digital Systems', 'EC102', 'B+', '8'], ['Engineering Design', 'EN103', 'A', '9']]
  return <div className="result-page"><div className="result-heading"><div><span>OFFICE OF THE CONTROLLER OF EXAMINATIONS</span><h2>Semester result</h2><p>Academic year 2025–26 · Provisional statement</p></div><select className="module-select" value={semester} onChange={(event) => setSemester(event.target.value)}><option>Semester 4</option><option>Semester 3</option></select></div><div className="result-summary"><div><small>SGPA</small><strong>8.42</strong><span>↑ 0.36 from last term</span></div><div><small>CGPA</small><strong>8.16</strong><span>Across 4 semesters</span></div><div><small>CREDITS EARNED</small><strong>22 <i>/ 22</i></strong><span>All credits completed</span></div><div className="result-stamp">PASSED<br /><small>FIRST CLASS</small></div></div><div className="result-table-wrap"><table className="result-table"><thead><tr><th>COURSE TITLE</th><th>COURSE CODE</th><th>CREDITS</th><th>GRADE</th><th>GRADE POINT</th><th>RESULT</th></tr></thead><tbody>{resultRows.map((row, index) => <tr key={row[1]}><td><b>{row[0]}</b></td><td>{row[1]}</td><td>{[4, 4, 3, 4][index]}</td><td><strong>{row[2]}</strong></td><td>{row[3]}</td><td><span className="result-pass">PASS</span></td></tr>)}</tbody></table></div><div className="result-footer"><span>Published: May 28, 2026 · Controller of Examinations</span><button className="module-button quiet">Print statement ⎙</button></div></div>
}

function LeaveApplicationPage() {
  const [history, setHistory] = useState([{ dates: 'Sep 18 – 19, 2026', type: 'Medical leave', status: 'Approved', note: 'Approved by Dr. Meera Iyer' }, { dates: 'Aug 04, 2026', type: 'Personal leave', status: 'Pending', note: 'Awaiting mentor review' }])
  const [message, setMessage] = useState('')
  const submit = (event) => { event.preventDefault(); setHistory([{ dates: 'Oct 12 – 13, 2026', type: 'Leave application', status: 'Pending', note: 'Submitted just now' }, ...history]); setMessage('Application submitted for mentor review.') }
  return <div className="leave-page"><ModuleIntro eyebrow="STUDENT SERVICES · REQUESTS" title="Time away, taken care of." detail="Submit a leave request and follow its approval from one place." />
    <div className="leave-layout"><form className="leave-form" onSubmit={submit}><div className="leave-form-head"><span>NEW REQUEST</span><b>Required fields marked *</b></div><label>Leave type *<select required defaultValue=""><option value="" disabled>Select a leave type</option><option>Medical leave</option><option>Personal leave</option><option>Family emergency</option><option>Academic representation</option></select></label><div className="leave-date-row"><label>From date *<input type="date" required /></label><label>To date *<input type="date" required /></label></div><label>Reason for leave *<textarea required minLength="10" placeholder="Share a brief reason for your request" rows="4" /></label><label className="leave-upload">Supporting document <input type="file" accept=".pdf,.jpg,.jpeg,.png" /><small>PDF or image · up to 10 MB</small></label><div className="leave-form-foot"><span>Typical review time: 2 working days</span><button className="module-button primary" type="submit">Submit request ↗</button></div>{message && <p className="leave-success" role="status">✓ {message}</p>}</form><aside className="leave-history"><div className="leave-history-head"><span>REQUEST HISTORY</span><b>Recent</b></div>{history.map((item, index) => <article className="leave-history-item" key={`${item.type}-${index}`}><div className={`leave-history-mark ${item.status.toLowerCase()}`}>{item.status === 'Approved' ? '✓' : '…'}</div><div><strong>{item.type}</strong><span>{item.dates}</span><small>{item.note}</small></div><Tag tone={item.status === 'Approved' ? 'teal' : 'amber'}>{item.status}</Tag></article>)}<div className="leave-contact"><b>Need help?</b><span>Student Affairs · Room 103</span><a href="mailto:studentaffairs@northbridge.edu">studentaffairs@northbridge.edu</a></div></aside></div>
  </div>
}

function MentoringPage() {
  const [category, setCategory] = useState('All topics')
  const [query, setQuery] = useState('')
  const questions = [{ title: 'How should I prepare for the data structures lab evaluation?', category: 'Academics', date: 'Oct 02', answer: 'Start with the core operations, then practise explaining complexity as you code.', mentor: 'Dr. Meera Iyer', answered: true }, { title: 'Can we discuss elective options for next semester?', category: 'Planning', date: 'Sep 29', answer: 'Bring your shortlisted electives to our next check-in and we can map prerequisites together.', mentor: 'Dr. Meera Iyer', answered: true }, { title: 'I have been struggling to balance coursework this month.', category: 'Wellbeing', date: 'Sep 26', answer: '', mentor: 'Dr. Meera Iyer', answered: false }]
  const visible = questions.filter((item) => (category === 'All topics' || item.category === category) && item.title.toLowerCase().includes(query.toLowerCase()))
  return <div className="mentoring-page"><ModuleIntro eyebrow="FACULTY MENTORING · GROUP CSE-5" title="A good question opens doors." detail="Private conversations with your faculty mentor." action={<button className="module-button primary">＋ &nbsp;Ask your mentor</button>} />
    <div className="mentor-strip"><div className="mentor-avatar">MI</div><div><small>YOUR FACULTY MENTOR</small><strong>Dr. Meera Iyer</strong><span>Computer Science · Available Tue & Thu, 2–4 PM</span></div><button className="module-button quiet">Schedule a meeting ↗</button></div><div className="mentor-tools"><label className="kanban-search">⌕ <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search questions" /></label><div>{['All topics', 'Academics', 'Planning', 'Wellbeing'].map((item) => <button className={category === item ? 'selected' : ''} key={item} onClick={() => setCategory(item)}>{item}</button>)}</div></div>
    <div className="question-list">{visible.map((item) => <article className={`question-card ${item.answered ? 'answered' : 'waiting'}`} key={item.title}><div className="question-meta"><Tag tone={item.category === 'Academics' ? 'blue' : item.category === 'Planning' ? 'teal' : 'amber'}>{item.category}</Tag><span>{item.date}, 2026</span><b>{item.answered ? 'ANSWERED' : 'AWAITING REPLY'}</b></div><h3>{item.title}</h3><div className="mentor-answer"><span className="answer-avatar">MI</span><div><small>{item.mentor} · Mentor</small><p>{item.answer || 'Your mentor has been notified and will respond soon.'}</p></div></div><button className="question-reply">{item.answered ? 'Continue conversation →' : 'Add context →'}</button></article>)}</div>
  </div>
}

const defaultProfile = {
  name: 'Ashwin Sharma',
  birthDate: '14 February 2005',
  email: 'ashwin.sharma@northbridge.edu',
  phone: '+91 98765 43210',
  address: 'Sector 18, Chandigarh',
  bloodGroup: 'O positive',
}

function readSavedProfile() {
  try {
    return { ...defaultProfile, ...JSON.parse(localStorage.getItem('erpStudentProfile') || '{}') }
  } catch {
    return defaultProfile
  }
}

function ProfilePage() {
  const [editing, setEditing] = useState(false)
  const [profile, setProfile] = useState(readSavedProfile)
  const [draft, setDraft] = useState(profile)
  const [photo, setPhoto] = useState(() => localStorage.getItem('erpStudentPhoto') || 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=80')
  const [saved, setSaved] = useState(false)
  const [selectedDocument, setSelectedDocument] = useState('')
  const [documents, setDocuments] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('erpStudentDocuments') || 'null') || [
        { title: 'Student identity card', detail: 'Verified · Aug 2026' },
        { title: 'Previous semester transcript', detail: 'Verified · May 2026' },
        { title: 'Address proof', detail: 'Verified · Aug 2025' },
      ]
    } catch {
      return []
    }
  })

  const updateDraft = (field, value) => setDraft((current) => ({ ...current, [field]: value }))
  const saveProfile = (event) => {
    event.preventDefault()
    localStorage.setItem('erpStudentProfile', JSON.stringify(draft))
    setProfile(draft)
    setEditing(false)
    setSaved(true)
  }
  const uploadPhoto = (event) => {
    const file = event.target.files?.[0]
    if (!file) return
    if (file.size > 2 * 1024 * 1024) {
      window.alert('Choose a profile image under 2 MB.')
      event.target.value = ''
      return
    }
    const reader = new FileReader()
    reader.onload = () => {
      const image = String(reader.result)
      localStorage.setItem('erpStudentPhoto', image)
      setPhoto(image)
    }
    reader.readAsDataURL(file)
    event.target.value = ''
  }
  const uploadDocument = (event) => {
    const file = event.target.files?.[0]
    if (!file) return
    if (file.size > 10 * 1024 * 1024) {
      window.alert('Choose a document under 10 MB.')
      event.target.value = ''
      return
    }
    const nextDocuments = [{ title: file.name, detail: 'Uploaded just now · Under review' }, ...documents]
    setDocuments(nextDocuments)
    localStorage.setItem('erpStudentDocuments', JSON.stringify(nextDocuments))
    event.target.value = ''
  }

  return <div className="profile-page">
    <section className="profile-hero">
      <div className="profile-avatar-wrap">
        <div className="profile-photo"><img src={photo} alt={`${profile.name} profile`} /></div>
        <label className="profile-photo-edit" aria-label="Change profile photo" title="Change profile photo">✎<input type="file" accept="image/*" onChange={uploadPhoto} /></label>
        <span className="profile-institute-mark" aria-label="Northbridge Institute logo">N</span>
      </div>
      <div className="profile-identity"><span>STUDENT PROFILE · ACTIVE</span><h2>{profile.name}</h2><p>B.Tech Computer Science · Class of 2028</p><div><Tag tone="teal">Student · CS24-105</Tag><span>Northbridge Institute of Technology</span></div></div>
      <div className="profile-edit-actions">{editing ? <><button className="module-button quiet" onClick={() => { setDraft(profile); setEditing(false) }}>Cancel</button><button className="module-button profile-edit" form="profileEditForm" type="submit">Save changes</button></> : <button className="module-button profile-edit" onClick={() => { setDraft(profile); setEditing(true); setSaved(false) }}>Edit profile ✎</button>}</div>
    </section>
    {saved && <p className="profile-save-status" role="status">Profile details saved on this device.</p>}
    <div className="profile-columns">
      <form className="profile-info" id="profileEditForm" onSubmit={saveProfile}>
        <div className="profile-section-head"><span>PERSONAL INFORMATION</span><small>{editing ? 'Editing profile' : 'Last updated Sep 12, 2026'}</small></div>
        <div className="profile-data-grid">{[['name', 'Full name'], ['birthDate', 'Date of birth'], ['email', 'Email address'], ['phone', 'Mobile number'], ['address', 'Home address'], ['bloodGroup', 'Blood group']].map(([field, label]) => <label key={field}><small>{label}</small>{editing ? <input required value={draft[field]} onChange={(event) => updateDraft(field, event.target.value)} aria-label={label} /> : <strong>{profile[field]}</strong>}</label>)}</div>
        <div className="profile-section-head academic-head"><span>ACADEMIC RECORD</span><small>2026–27</small></div><div className="profile-academic-strip"><span><small>PROGRAMME</small><b>B.Tech · CSE</b></span><span><small>SEMESTER</small><b>05 of 08</b></span><span><small>CGPA</small><b>8.16 / 10</b></span><span><small>ADVISOR</small><b>Dr. Meera Iyer</b></span></div>
      </form>
      <aside className="profile-documents"><div className="profile-section-head"><span>MY DOCUMENTS</span><label className="profile-upload-button">＋ Upload<input type="file" accept=".pdf,.jpg,.jpeg,.png" onChange={uploadDocument} /></label></div>{documents.map((document) => <div className="profile-document" key={document.title}><span>▤</span><div><strong>{document.title}</strong><small>{document.detail}</small></div><button type="button" aria-label={`View ${document.title}`} onClick={() => setSelectedDocument(document.title)}>↗</button></div>)}{selectedDocument && <div className="profile-document-preview" role="status"><strong>{selectedDocument}</strong><span>Document record · Private to your account</span><button type="button" onClick={() => setSelectedDocument('')}>Close</button></div>}<p>Documents are visible only to you and authorised college staff.</p></aside>
    </div>
  </div>
}

function SettingsPage({ theme, onThemeToggle }) {
  const [tab, setTab] = useState('Account')
  const [saved, setSaved] = useState(false)
  const tabs = ['Account', 'Appearance', 'Notifications', 'Privacy', 'Security']
  const notificationPreferences = [
    ['Portal announcements', 'Important news from your college', true],
    ['Assignment reminders', 'Upcoming submission deadlines', false],
    ['Exam and timetable updates', 'Schedule changes and result alerts', true],
    ['Mentor messages', 'Replies to your mentoring questions', true],
  ]
  const privacyPreferences = [
    ['Student directory visibility', 'Allow classmates to find your college email.', true],
    ['Share academic profile with mentor', 'Let your faculty mentor review your progress.', true],
    ['Share contact details with classmates', 'Keep your phone number private from other students.', false],
  ]
  return <div className="settings-page"><ModuleIntro eyebrow="PREFERENCES · STUDENT ACCOUNT" title="Make this space yours." detail="Manage your portal preferences and account security." />
    <div className="settings-layout"><nav className="settings-tabs" aria-label="Settings sections">{tabs.map((item) => <button className={tab === item ? 'active' : ''} key={item} onClick={() => { setTab(item); setSaved(false) }}><span>{['◎', '◐', '♧', '◉', '⌑'][tabs.indexOf(item)]}</span>{item}<b>›</b></button>)}</nav><section className="settings-panel"><div className="settings-panel-head"><span>SETTINGS / {tab.toUpperCase()}</span><h3>{tab === 'Appearance' ? 'A calmer way to work.' : tab === 'Security' ? 'Keep your account secure.' : `${tab} preferences`}</h3><p>{tab === 'Appearance' ? 'Adjust the portal to feel right in any light.' : 'These preferences apply to your student portal account.'}</p></div>{tab === 'Appearance' ? <><div className="settings-option"><div><strong>Colour theme</strong><small>Choose how the portal looks on this device.</small></div><button className="theme-choice" onClick={onThemeToggle}><span className={theme === 'light' ? 'chosen' : ''}>☼ Light</span><span className={theme === 'dark' ? 'chosen' : ''}>☾ Dark</span></button></div><div className="settings-option"><div><strong>Reduce motion</strong><small>Limit interface animations.</small></div><input className="module-toggle" type="checkbox" aria-label="Reduce motion" /></div><div className="settings-option"><div><strong>Compact data tables</strong><small>Show more rows on each screen.</small></div><input className="module-toggle" type="checkbox" aria-label="Compact data tables" /></div></> : tab === 'Security' ? <><label className="settings-field">Current password<input type="password" placeholder="Enter current password" /></label><label className="settings-field">New password<input type="password" placeholder="At least 12 characters" /></label><label className="settings-field">Confirm new password<input type="password" placeholder="Re-enter new password" /></label><div className="settings-option"><div><strong>Two-factor verification</strong><small>Add a second step when signing in.</small></div><input className="module-toggle" type="checkbox" defaultChecked aria-label="Two-factor verification" /></div></> : tab === 'Notifications' ? notificationPreferences.map(([item, detail, enabled]) => <div className="settings-option" key={item}><div><strong>{item}</strong><small>{detail}</small></div><input className="module-toggle" type="checkbox" defaultChecked={enabled} aria-label={item} /></div>) : tab === 'Privacy' ? privacyPreferences.map(([item, detail, enabled]) => <div className="settings-option" key={item}><div><strong>{item}</strong><small>{detail}</small></div><input className="module-toggle" type="checkbox" defaultChecked={enabled} aria-label={item} /></div>) : <><div className="settings-option"><div><strong>Student account</strong><small>ashwin.sharma@northbridge.edu</small></div><Tag tone="teal">Verified</Tag></div><div className="settings-option"><div><strong>Portal language</strong><small>Interface language for this account.</small></div><select className="module-select"><option>English (India)</option><option>Hindi</option></select></div><div className="settings-option"><div><strong>Account ID</strong><small>CS24-105 · Northbridge Institute</small></div><button className="module-button quiet">Copy ID</button></div></>}
      <div className="settings-save"><span>{saved ? 'Preferences saved to your account.' : 'Changes are saved for this device.'}</span><button className="module-button primary" onClick={() => setSaved(true)}>{saved ? 'Saved ✓' : 'Save preferences'}</button></div></section></div>
  </div>
}

export default function ModulePages({ page, theme, onThemeToggle }) {
  switch (page) {
    case 'My Grades':
    case 'Online Class Record':
    case 'Online Test':
    case 'Online Test Portal':
    case 'Plagiarism Check':
    case 'Print Exam Form':
    case 'Registration Form':
    case 'Special Leave':
    case 'Student Progress':
    case 'Subject Choice':
    case 'Zoom Online Class':
    case 'Exam Schedule': return <AcademicPages page={page} />
    case 'Career Plan':
    case 'Internship Permission':
    case 'Placement News':
    case 'Placements':
    case 'Placement Drive':
    case 'Update Profile 1':
    case 'Update Profile 2':
    case 'Update Resume':
    case 'Upload SIP':
    case 'Hostel Notification':
    case 'Hostel/Bus Service':
    case 'Hostel Complaint':
    case 'Hostel Registration':
    case 'Apply Bus Stops':
    case 'Bus Routes':
    case 'Bus Stops':
    case 'Circulation Ledger':
    case 'Ebook Center':
    case 'Fine Records':
    case 'Library Rules':
    case 'OPAC': return <ServicePages page={page} />
    case 'ABCID Verification':
    case 'Academic Calendar':
    case 'Contact Details':
    case 'Examination Pattern':
    case 'Grievance':
    case 'News/Notices':
    case 'Online Form Application':
    case 'Other Service Request':
    case 'Progression Diary':
    case 'Progression Index':
    case 'Question Bank':
    case 'Question Paper':
    case 'Submit Documents':
    case 'Syllabus':
    case "Today's Dispatch": return <GeneralPages page={page} />
    case 'Apply Bus Facility':
    case 'Fees Installment':
    case 'Fees Receipts':
    case 'Online Fee Transaction':
    case 'Other Fee Print':
    case 'Other Ledger':
    case 'Pay Fee Bus/Mess':
    case 'Pay Fee Online':
    case 'Pay Other Fee':
    case 'Student Ledger':
    case 'Verify Transaction': return <FeePages page={page} />
    case 'Time Table': return <TimetablePage />
    case 'Course Outline': return <CourseOutlinePage />
    case 'Attendance Status': return <AttendanceStatusPage />
    case 'Attendance Subject': return <AttendanceSubjectPage />
    case 'Assessment Subject': return <AssessmentSubjectPage />
    case 'Assessment Marks': return <AssessmentMarksPage />
    case 'Assignment': return <AssignmentPage />
    case 'Assignments': return <AssignmentsPage />
    case 'Current Backlog': return <BacklogPage />
    case 'Exam Result': return <ExamResultPage />
    case 'Leave Application': return <LeaveApplicationPage />
    case 'Mentoring Questions': return <MentoringPage />
    case 'Your Profile':
    case 'Profile': return <ProfilePage />
    case 'Settings': return <SettingsPage theme={theme} onThemeToggle={onThemeToggle} />
    default: return <div className="module-unavailable"><span>{page}</span><h2>Your student services</h2><p>This module is ready for your college data and workflows.</p></div>
  }
}