


import React from 'react'
import './Temporary.css';

function Temporary() {
  return (
    <div className="under-construction-wrap">
      <div className="bg-overlay" />

      <main className="uc-card">
        <h1 className="uc-title">TravelSanky Project</h1>

        <div className="uc-subline">
          <p>is under construction</p>
          <div className="gear" aria-hidden="true">
            {/* simple SVG gear — rotates with CSS */}
            <svg viewBox="0 0 24 24" width="34" height="34" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 15.5A3.5 3.5 0 1 0 12 8.5a3.5 3.5 0 0 0 0 7z" fill="currentColor"/>
              <path d="M19.4 13.1c.04-.36.06-.72.06-1.1 0-.38-.02-.74-.06-1.1l2.1-1.6a.5.5 0 0 0 .12-.66l-2-3.46a.5.5 0 0 0-.6-.22l-2.5 1a8.6 8.6 0 0 0-1.9-1.1l-.38-2.65A.5.5 0 0 0 12.9 2h-4a.5.5 0 0 0-.5.42l-.38 2.65c-.66.25-1.28.6-1.86 1.02l-2.5-1a.5.5 0 0 0-.6.22L1.6 8.6a.5.5 0 0 0 .12.66l2.1 1.6c-.04.36-.06.72-.06 1.1 0 .38.02.74.06 1.1L1.7 14.9a.5.5 0 0 0-.12.66l2 3.46a.5.5 0 0 0 .6.22l2.5-1c.58.42 1.2.77 1.86 1.02l.38 2.65a.5.5 0 0 0 .5.42h4a.5.5 0 0 0 .5-.42l.38-2.65c.66-.25 1.28-.6 1.86-1.02l2.5 1a.5.5 0 0 0 .6-.22l2-3.46a.5.5 0 0 0-.12-.66l-2.1-1.6zM12 16.5A4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 0 1 0 9z" fill="currentColor"/>
            </svg>
          </div>
        </div>

        <h3 className="uc-date">It will be completed before <span>20 Nov</span></h3>

        <div className="uc-footer">
          <small>Made with ❤️ by Sanket — travel portfolio coming soon</small>
        </div>
      </main>
    </div>
  )
}

export default Temporary