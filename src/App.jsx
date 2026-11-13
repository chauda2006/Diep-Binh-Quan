import React from 'react';
import './App.css';

function App() {
  return (
    <div className="portfolio-container">
      <div className="profile-card">
        <div className="avatar-glow">
          <span className="avatar-initial">ĐQ</span>
        </div>
        <h1 className="title">Chào bạn, tôi là</h1>
        <h2 className="name">Chauda</h2>
        <p className="major">Sinh viên ngành Công nghệ thông tin</p>
        
        <div className="divider"></div>

        <div className="bio-info">
          <div className="info-item">
            <span className="label">Đam mê:</span>
            <span className="value">UI/UX Design & Web Development</span>
          </div>
          <div className="info-item">
            <span className="label">Sở thích:</span>
            <span className="value">Lập trình, sáng tạo giao diện số</span>
          </div>
        </div>

        <div className="action-buttons">
          <a 
            href="https://github.com/chauda2006" 
            target="_blank" 
            rel="noreferrer" 
            className="btn github-btn"
          >
            Khám phá GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;