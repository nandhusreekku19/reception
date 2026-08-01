import { couple } from '../../utils/weddingData.js'
import styles from './WeddingCalendar.module.css'

const WEEKDAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

function buildCalendarCells(year, monthIndex) {
  const firstWeekday = new Date(year, monthIndex, 1).getDay()
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate()
  const cells = []
  for (let i = 0; i < firstWeekday; i++) cells.push(null)
  for (let day = 1; day <= daysInMonth; day++) cells.push(day)
  while (cells.length % 7 !== 0) cells.push(null)
  return cells
}

export default function WeddingCalendar() {
  const weddingDate = new Date(couple.weddingDateISO)
  const year = weddingDate.getFullYear()
  const monthIndex = weddingDate.getMonth()
  const dayOfMonth = weddingDate.getDate()
  const monthName = weddingDate.toLocaleString('en-US', { month: 'long' })
  const cells = buildCalendarCells(year, monthIndex)

  return (
    <div className={styles.wrap}>
      <div className={styles.calendar}>
        <div className={styles.header}>{monthName} {year}</div>
        <div className={styles.weekdays}>
          {WEEKDAYS.map((w) => (
            <span key={w} className={styles.weekday}>{w}</span>
          ))}
        </div>
        <div className={styles.grid}>
          {cells.map((day, i) =>
            day === dayOfMonth ? (
              <span key={i} className={styles.cell}>
                <span className={styles.heartWrap}>
                  <svg viewBox="0 0 32 29" className={styles.heartIcon} aria-hidden="true">
                    <path d="M16 27 C 4 19, 1 11, 6 6 C 10 2, 16 4, 16 9 C 16 4, 22 2, 26 6 C 31 11, 28 19, 16 27 Z" />
                  </svg>
                  <span className={styles.dayNum}>{day}</span>
                </span>
              </span>
            ) : (
              <span key={i} className={styles.cell}>{day || ''}</span>
            )
          )}
        </div>
      </div>

      <p className={styles.boldDate}>{couple.weddingDay}, {couple.weddingDateDisplay}</p>
      <p className={styles.malayalamDate}>{couple.weddingDayMalayalam}</p>
    </div>
  )
}
