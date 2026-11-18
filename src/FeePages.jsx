import { useState } from 'react'
import './feePages.css'

const currency = (amount) => `₹${amount.toLocaleString('en-IN')}`

function FeeBadge({ children, tone = 'blue' }) {
  return <span className={`fee-badge ${tone}`}>{children}</span>
}

function BusFacilityPage() {
  const routes = [
    { id: 'R-04', name: 'North Loop', stops: 'Sector 18 · IT Park · North Gate', time: '07:25 AM', seats: 8 },
    { id: 'R-07', name: 'Lakeview Express', stops: 'Lake Road · Central Market · East Gate', time: '07:40 AM', seats: 3 },
    { id: 'R-11', name: 'Airport Connector', stops: 'Airport Road · Zirakpur · South Gate', time: '07:10 AM', seats: 12 },
  ]
  const [selected, setSelected] = useState('R-04')
  const [requested, setRequested] = useState(false)
  const route = routes.find((item) => item.id === selected)
  return <div className="fee-page bus-facility-page"><div className="fee-route-heading"><div><span>TRANSPORT SERVICES · 2026–27</span><h2>Find your ride to campus.</h2><p>Choose a route and request a seat for the current semester.</p></div><div className="fee-route-mark">N<span>↑</span></div></div><div className="fee-route-layout"><div className="fee-route-list" role="radiogroup" aria-label="Available bus routes">{routes.map((item) => <button className={`fee-route-choice ${selected === item.id ? 'chosen' : ''}`} key={item.id} onClick={() => { setSelected(item.id); setRequested(false) }} role="radio" aria-checked={selected === item.id}><span className="fee-route-id">{item.id}</span><span><strong>{item.name}</strong><small>{item.stops}</small></span><b>{selected === item.id ? '●' : '○'}</b></button>)}</div><section className="fee-route-detail"><div className="fee-route-map" aria-label={`${route.name} route map`}><div className="fee-route-line"><i /><i /><i /><i /></div><div className="fee-route-map-labels"><span>SECTOR 18</span><span>CENTRAL</span><span>NORTH GATE</span></div><span className="fee-route-pin">NIT</span></div><div className="fee-route-info"><div><small>DEPARTURE</small><strong>{route.time}</strong></div><div><small>SEATS AVAILABLE</small><strong>{route.seats} seats</strong></div><div><small>SEMESTER FEE</small><strong>{currency(18500)}</strong></div></div><div className="fee-route-foot"><span>{requested ? 'Request sent to Transport Office' : 'Route assignment is subject to seat availability.'}</span><button className="fee-action" onClick={() => setRequested(true)}>{requested ? 'Requested ✓' : 'Request this route →'}</button></div></section></div></div>
}

function InstallmentsPage() {
  const rows = [
    { number: '01', label: 'Admission & registration', amount: 42000, due: 'Jul 12, 2026', status: 'Paid', paid: 'Jul 08' },
    { number: '02', label: 'Tuition · installment one', amount: 38500, due: 'Sep 15, 2026', status: 'Paid', paid: 'Sep 12' },
    { number: '03', label: 'Tuition · installment two', amount: 38500, due: 'Nov 15, 2026', status: 'Upcoming', paid: '—' },
    { number: '04', label: 'Examination & lab fee', amount: 12000, due: 'Jan 10, 2027', status: 'Upcoming', paid: '—' },
  ]
  return <div className="fee-page installment-page"><div className="fee-term-banner"><div><span>FEE PLAN · B.TECH COMPUTER SCIENCE</span><h2>Semester 5 payment plan</h2><p>Academic year 2026–27 · Student CS24-105</p></div><div className="fee-term-total"><small>SEMESTER TOTAL</small><strong>{currency(131000)}</strong><span>2 of 4 installments paid</span></div></div><div className="fee-installment-progress"><div><span>Paid so far</span><strong>{currency(80500)} <small>of {currency(131000)}</small></strong></div><div className="fee-installment-track"><i /></div><div className="fee-installment-labels"><span>61% complete</span><span>Next due Nov 15</span></div></div><div className="fee-installment-list">{rows.map((row) => <article className={`fee-installment-row ${row.status === 'Paid' ? 'paid' : ''}`} key={row.number}><span className="fee-installment-number">{row.number}</span><div className="fee-installment-name"><strong>{row.label}</strong><small>Due {row.due}</small></div><div className="fee-installment-paid"><small>PAID ON</small><span>{row.paid}</span></div><strong className="fee-installment-amount">{currency(row.amount)}</strong><FeeBadge tone={row.status === 'Paid' ? 'green' : 'amber'}>{row.status}</FeeBadge>{row.status === 'Upcoming' && <button className="fee-text-action">Details ↗</button>}</article>)}</div><p className="fee-footnote">Payments made within 48 hours of the due date are considered on time.</p></div>
}

function ReceiptsPage() {
  const [query, setQuery] = useState('')
  const [downloaded, setDownloaded] = useState('')
  const receipts = [
    { id: 'NIT/26/00482', title: 'Semester 5 · Installment 01', date: '08 Jul 2026', mode: 'UPI · HDFC Bank', amount: 42000 },
    { id: 'NIT/26/00817', title: 'Semester 5 · Installment 02', date: '12 Sep 2026', mode: 'Net banking · SBI', amount: 38500 },
    { id: 'NIT/26/00129', title: 'Library security deposit', date: '02 Jul 2026', mode: 'Card · Visa ending 4208', amount: 2500 },
  ].filter((receipt) => `${receipt.id} ${receipt.title}`.toLowerCase().includes(query.toLowerCase()))
  return <div className="fee-page receipts-page"><div className="fee-receipts-head"><div><span>PAYMENT ARCHIVE · 2026–27</span><h2>Receipts, ready when you are.</h2><p>Every confirmed payment in one searchable archive.</p></div><div className="fee-receipt-total"><small>PAID THIS YEAR</small><strong>{currency(83000)}</strong><span>3 receipts</span></div></div><div className="fee-receipt-toolbar"><label>⌕ <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by receipt or fee" /></label><button className="fee-outline-action">Filter by date⌄</button></div><div className="fee-receipt-stack">{receipts.map((receipt) => <article className="fee-receipt" key={receipt.id}><div className="fee-receipt-stamp">NIT<small>PAID</small></div><div className="fee-receipt-details"><span>{receipt.id}</span><h3>{receipt.title}</h3><small>{receipt.date} · {receipt.mode}</small></div><strong>{currency(receipt.amount)}</strong><button className="fee-receipt-download" onClick={() => setDownloaded(receipt.id)} aria-label={`Download ${receipt.id}`}>{downloaded === receipt.id ? '✓' : '↓'}</button></article>)}</div>{downloaded && <p className="fee-inline-feedback" role="status">Receipt {downloaded} is ready to print.</p>}<p className="fee-footnote">Official receipts are generated after payment confirmation. Keep a copy for your records.</p></div>
}

function OnlineTransactionsPage() {
  const rows = [
    { ref: 'TXN-7F28A1', date: '12 Sep 2026 · 10:42 AM', purpose: 'Semester installment 02', amount: 38500, mode: 'SBI Net Banking', status: 'Success' },
    { ref: 'TXN-6D11C0', date: '08 Jul 2026 · 02:16 PM', purpose: 'Admission & registration', amount: 42000, mode: 'UPI · HDFC', status: 'Success' },
    { ref: 'TXN-22A90E', date: '02 Jul 2026 · 09:03 AM', purpose: 'Library security deposit', amount: 2500, mode: 'Visa ···· 4208', status: 'Success' },
    { ref: 'TXN-18C037', date: '28 Jun 2026 · 05:52 PM', purpose: 'Semester installment 01', amount: 42000, mode: 'UPI · HDFC', status: 'Reversed' },
  ]
  return <div className="fee-page transactions-page"><div className="fee-transaction-heading"><div><span>PAYMENTS · GATEWAY LOG</span><h2>Online transactions</h2><p>Track payment attempts, confirmations, and reversals.</p></div><button className="fee-outline-action">Export statement ↓</button></div><div className="fee-transaction-metrics"><div><small>SUCCESSFUL PAYMENTS</small><strong>3</strong><span>This academic year</span></div><div><small>TOTAL PAID ONLINE</small><strong>{currency(83000)}</strong><span>Across 3 confirmations</span></div><div><small>LAST TRANSACTION</small><strong>12 Sep</strong><span>TXN-7F28A1</span></div></div><div className="fee-transaction-table"><div className="fee-transaction-table-head"><span>REFERENCE / DATE</span><span>PAYMENT FOR</span><span>METHOD</span><span>AMOUNT</span><span>STATUS</span></div>{rows.map((row) => <div className="fee-transaction-row" key={row.ref}><div><strong>{row.ref}</strong><small>{row.date}</small></div><span>{row.purpose}</span><span>{row.mode}</span><strong>{currency(row.amount)}</strong><FeeBadge tone={row.status === 'Success' ? 'green' : 'rose'}>{row.status}</FeeBadge></div>)}</div><p className="fee-footnote">A reversed transaction may take 5–7 working days to reflect in your bank account.</p></div>
}

function OtherFeePrintPage() {
  const [printed, setPrinted] = useState('')
  const items = [
    { title: 'Examination form fee', ref: 'EXM-2026-0412', date: '16 Aug 2026', amount: 1200, icon: '01' },
    { title: 'Workshop materials', ref: 'WS-2026-0188', date: '28 Jul 2026', amount: 850, icon: '02' },
    { title: 'Library replacement fee', ref: 'LIB-2026-0063', date: '11 Jun 2026', amount: 420, icon: '03' },
  ]
  return <div className="fee-page print-receipts-page"><div className="fee-print-side"><span>DOCUMENT CENTRE</span><h2>Receipts for every other charge.</h2><p>Find and print receipts that sit outside your regular semester fee plan.</p><div className="fee-print-count"><strong>03</strong><span>AVAILABLE<br />RECEIPTS</span></div><small>Choose a document to prepare a print-ready copy.</small></div><div className="fee-print-list">{items.map((item) => <article className="fee-print-item" key={item.ref}><span className="fee-print-index">{item.icon}</span><div><strong>{item.title}</strong><small>{item.ref} · {item.date}</small></div><b>{currency(item.amount)}</b><button className="fee-outline-action" onClick={() => setPrinted(item.ref)}>{printed === item.ref ? 'Ready ✓' : 'Prepare print'}</button></article>)}</div>{printed && <div className="fee-print-ready" role="status">Receipt {printed} prepared. Use your browser's print command to save a copy.</div>}</div>
}

function OtherLedgerPage() {
  const entries = [
    { date: '12 Sep 2026', description: 'Library security deposit', category: 'Refundable deposit', debit: 2500, credit: 0 },
    { date: '16 Aug 2026', description: 'Examination form fee', category: 'Examination', debit: 1200, credit: 0 },
    { date: '28 Jul 2026', description: 'Workshop materials', category: 'Department', debit: 850, credit: 0 },
    { date: '11 Jun 2026', description: 'Book return adjustment', category: 'Library', debit: 0, credit: 180 },
  ]
  return <div className="fee-page other-ledger-page"><div className="fee-ledger-caption"><span>STUDENT ACCOUNTS · AUXILIARY FEES</span><h2>Other fee ledger</h2><p>Non-tuition charges, deposits, and adjustments recorded against your account.</p></div><div className="fee-ledger-balance"><div><small>OUTSTANDING BALANCE</small><strong>{currency(4370)}</strong><span>As of October 03, 2026</span></div><div><small>REFUNDABLE DEPOSIT</small><strong>{currency(2500)}</strong><span>Library deposit held</span></div><div><small>RECENT ACTIVITY</small><strong>4 entries</strong><span>Since June 2026</span></div></div><div className="fee-running-ledger"><div className="fee-running-head"><span>DATE</span><span>DESCRIPTION</span><span>DEBIT</span><span>CREDIT</span><span>BALANCE</span></div>{entries.map((entry, index) => <div className="fee-running-row" key={entry.description}><span>{entry.date}</span><div><strong>{entry.description}</strong><small>{entry.category}</small></div><span>{entry.debit ? currency(entry.debit) : '—'}</span><span>{entry.credit ? currency(entry.credit) : '—'}</span><b>{currency([2500, 3700, 4550, 4370][index])}</b></div>)}</div><p className="fee-footnote">For a charge query, contact Student Accounts with the entry date and description.</p></div>
}

function BusMessPaymentPage() {
  const [service, setService] = useState('Bus pass')
  const [period, setPeriod] = useState('Semester')
  const [paid, setPaid] = useState(false)
  const fee = service === 'Bus pass' ? (period === 'Semester' ? 18500 : 3400) : (period === 'Semester' ? 22000 : 4200)
  return <div className="fee-page service-payment-page"><div className="fee-service-heading"><span>STUDENT SERVICES · TRANSPORT & DINING</span><h2>Keep your campus routine moving.</h2><p>Renew your bus pass or add mess credit for the coming term.</p></div><div className="fee-service-layout"><section className="fee-service-form"><span className="fee-step-label">01 / SELECT A SERVICE</span><div className="fee-service-options">{['Bus pass', 'Mess plan'].map((item) => <button className={service === item ? 'selected' : ''} key={item} onClick={() => { setService(item); setPaid(false) }}><span>{item === 'Bus pass' ? '↗' : '✳'}</span><strong>{item}</strong><small>{item === 'Bus pass' ? 'Route R-04 · North Loop' : 'North dining hall · Veg plan'}</small></button>)}</div><label className="fee-field-label">Billing period<select value={period} onChange={(event) => { setPeriod(event.target.value); setPaid(false) }}><option>Semester</option><option>Monthly</option></select></label><div className="fee-service-account"><span>Charged to</span><strong>Ashwin Sharma · CS24-105</strong></div></section><aside className="fee-service-summary"><span>PAYMENT SUMMARY</span><div><small>{service} · {period}</small><strong>{currency(fee)}</strong></div><p>Includes campus service tax and student insurance.</p><button className="fee-action" onClick={() => setPaid(true)}>{paid ? 'Request received ✓' : 'Continue to payment →'}</button><small>{paid ? 'Your payment request has been prepared.' : 'Secure payment · UPI, card, or net banking'}</small></aside></div></div>
}

function PayFeeOnlinePage() {
  const [method, setMethod] = useState('UPI')
  const [confirmed, setConfirmed] = useState(false)
  return <div className="fee-page online-payment-page"><div className="fee-checkout-head"><div><span>SECURE CHECKOUT · STEP 2 OF 2</span><h2>Settle your semester dues.</h2><p>Payment is encrypted and processed by the institute gateway.</p></div><div className="fee-lock">⌑ <span>SECURE<br />CHECKOUT</span></div></div><div className="fee-checkout-layout"><section className="fee-checkout-main"><div className="fee-checkout-step"><b>01</b><div><strong>Fee account</strong><small>Ashwin Sharma · CS24-105</small></div><FeeBadge tone="green">Verified</FeeBadge></div><div className="fee-checkout-step payment-method-step"><b>02</b><div><strong>Payment method</strong><small>Choose how you would like to pay.</small></div></div><div className="fee-method-options">{['UPI', 'Credit / debit card', 'Net banking'].map((item) => <button className={method === item ? 'selected' : ''} key={item} onClick={() => setMethod(item)}><i>{method === item ? '●' : '○'}</i><span>{item}</span><small>{item === 'UPI' ? 'GPay · PhonePe · BHIM' : item === 'Credit / debit card' ? 'Visa · Mastercard · RuPay' : 'All major banks'}</small></button>)}</div></section><aside className="fee-checkout-total"><span>ORDER SUMMARY</span><div><small>Semester 5 tuition · Installment 03</small><b>{currency(38500)}</b></div><div><small>Student activity fee</small><b>{currency(1200)}</b></div><div className="fee-total-rule"><small>Total payable</small><strong>{currency(39700)}</strong></div><button className="fee-action" onClick={() => setConfirmed(true)}>{confirmed ? 'Payment initiated ✓' : `Pay ${currency(39700)} →`}</button><p>{confirmed ? `Continue with ${method} in your secure payment app.` : 'By continuing, you agree to the college payment terms.'}</p></aside></div></div>
}

function PayOtherFeePage() {
  const charges = [
    { id: 'exam', title: 'Examination form', detail: 'Semester 5 · Examination Cell', amount: 1200 },
    { id: 'lab', title: 'Laboratory consumables', detail: 'Computer Science · Semester 5', amount: 900 },
    { id: 'workshop', title: 'Industry workshop', detail: 'Optional · Oct 24, 2026', amount: 1600 },
    { id: 'transcript', title: 'Official transcript', detail: 'Digital copy · 3 working days', amount: 450 },
  ]
  const [selected, setSelected] = useState(['exam', 'lab'])
  const [submitted, setSubmitted] = useState(false)
  const total = charges.filter((item) => selected.includes(item.id)).reduce((sum, item) => sum + item.amount, 0)
  return <div className="fee-page other-payment-page"><div className="fee-charge-heading"><div><span>ONE-TIME CHARGES · OPTIONAL SERVICES</span><h2>Choose what you need.</h2><p>Select the additional fees you want to pay in one transaction.</p></div><FeeBadge tone="blue">{selected.length} selected</FeeBadge></div><div className="fee-charge-layout"><div className="fee-charge-list">{charges.map((item) => <label className={`fee-charge-item ${selected.includes(item.id) ? 'checked' : ''}`} key={item.id}><input type="checkbox" checked={selected.includes(item.id)} onChange={() => { setSelected((current) => current.includes(item.id) ? current.filter((id) => id !== item.id) : [...current, item.id]); setSubmitted(false) }} /><span className="fee-charge-check">{selected.includes(item.id) ? '✓' : ''}</span><span className="fee-charge-name"><strong>{item.title}</strong><small>{item.detail}</small></span><b>{currency(item.amount)}</b></label>)}</div><aside className="fee-charge-total"><span>YOUR SELECTION</span><strong>{currency(total)}</strong><small>{selected.length} fee items · taxes included</small><button className="fee-action" disabled={!selected.length} onClick={() => setSubmitted(true)}>{submitted ? 'Added to checkout ✓' : 'Continue to checkout →'}</button>{submitted && <p role="status">Selected items are ready for secure payment.</p>}</aside></div></div>
}

function StudentLedgerPage() {
  const [period, setPeriod] = useState('2026–27')
  const entries = [
    { date: '01 Jul 2026', code: 'FEE-OPEN', description: 'Opening balance · Semester 5', debit: 131000, credit: 0, balance: 131000 },
    { date: '08 Jul 2026', code: 'RCPT-482', description: 'Online payment · Installment 01', debit: 0, credit: 42000, balance: 89000 },
    { date: '12 Sep 2026', code: 'RCPT-817', description: 'Online payment · Installment 02', debit: 0, credit: 38500, balance: 50500 },
    { date: '01 Oct 2026', code: 'ADJ-052', description: 'Student activity fee applied', debit: 1200, credit: 0, balance: 51700 },
  ]
  return <div className="fee-page student-ledger-page"><div className="fee-statement-top"><div><span>STUDENT ACCOUNTS · OFFICIAL STATEMENT</span><h2>Account statement</h2><p>Ashwin Sharma · Student ID CS24-105</p></div><select value={period} onChange={(event) => setPeriod(event.target.value)} aria-label="Academic year"><option>2026–27</option><option>2025–26</option></select></div><div className="fee-statement-summary"><div><small>SEMESTER CHARGES</small><strong>{currency(132200)}</strong></div><div><small>PAYMENTS RECEIVED</small><strong>{currency(80500)}</strong></div><div><small>NET BALANCE DUE</small><strong>{currency(51700)}</strong></div><div><small>ACCOUNT STATUS</small><FeeBadge tone="amber">Payment plan active</FeeBadge></div></div><div className="fee-statement-table"><div className="fee-statement-row heading"><span>POSTED</span><span>REFERENCE / DESCRIPTION</span><span>CHARGES</span><span>PAYMENTS</span><span>BALANCE</span></div>{entries.map((item) => <div className="fee-statement-row" key={item.code}><span>{item.date}</span><div><small>{item.code}</small><strong>{item.description}</strong></div><span>{item.debit ? currency(item.debit) : '—'}</span><span>{item.credit ? currency(item.credit) : '—'}</span><b>{currency(item.balance)}</b></div>)}</div><div className="fee-statement-bottom"><span>Statement generated October 03, 2026 · All amounts in INR</span><button className="fee-outline-action">Download statement ↓</button></div></div>
}

function VerifyTransactionPage() {
  const [reference, setReference] = useState('')
  const [verified, setVerified] = useState(false)
  const submit = (event) => { event.preventDefault(); setVerified(true) }
  return <div className="fee-page verify-page"><div className="fee-verify-intro"><div className="fee-verify-icon">✓</div><span>PAYMENT SUPPORT · TRANSACTION LOOKUP</span><h2>Money left your account?</h2><p>Check a payment that was debited but did not generate a receipt. We’ll help trace it.</p></div><div className="fee-verify-layout"><form className="fee-verify-form" onSubmit={submit}><label>Transaction reference<input required value={reference} onChange={(event) => { setReference(event.target.value); setVerified(false) }} placeholder="e.g. TXN-7F28A1" /></label><label>Amount paid <div className="fee-amount-input"><span>₹</span><input required type="number" min="1" placeholder="0.00" /></div></label><label>Payment date<input required type="date" /></label><button className="fee-action" type="submit">Check transaction status →</button>{verified && <div className="fee-verify-result" role="status"><FeeBadge tone="green">Payment located</FeeBadge><strong>{reference.toUpperCase()}</strong><span>Your payment is confirmed. A receipt may take up to 15 minutes to appear in Fees Receipts.</span></div>}</form><aside className="fee-verify-help"><span>BEFORE YOU SUBMIT</span><div><b>01</b><p>Find the reference number in your bank or UPI app.</p></div><div><b>02</b><p>Allow up to 15 minutes for a confirmed payment to sync.</p></div><div><b>03</b><p>If the amount was debited, avoid paying a second time.</p></div><a href="mailto:accounts@northbridge.edu">Still need help? Contact Accounts ↗</a></aside></div></div>
}

export default function FeePages({ page }) {
  switch (page) {
    case 'Apply Bus Facility': return <BusFacilityPage />
    case 'Fees Installment': return <InstallmentsPage />
    case 'Fees Receipts': return <ReceiptsPage />
    case 'Online Fee Transaction': return <OnlineTransactionsPage />
    case 'Other Fee Print': return <OtherFeePrintPage />
    case 'Other Ledger': return <OtherLedgerPage />
    case 'Pay Fee Bus/Mess': return <BusMessPaymentPage />
    case 'Pay Fee Online': return <PayFeeOnlinePage />
    case 'Pay Other Fee': return <PayOtherFeePage />
    case 'Student Ledger': return <StudentLedgerPage />
    case 'Verify Transaction': return <VerifyTransactionPage />
    default: return null
  }
}