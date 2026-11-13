import React from 'react';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Bài tập BT2 - Hello Framework</h1>
      <div style={{ 
        border: '2px solid #61dafb', 
        display: 'inline-block', 
        padding: '25px', 
        borderRadius: '12px',
        backgroundColor: '#282c34',
        color: 'white',
        boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
      }}>
        <h2>Thẻ giới thiệu bản thân</h2>
        <p><strong>Họ và tên:</strong> Chauda</p>
        <p><strong>Lớp:</strong> Công nghệ thông tin</p>
        <p><strong>Sở thích:</strong> Lập trình web, thiết kế UI/UX</p>
        <p>
          <strong>GitHub:</strong> <a href="https://github.com" target="_blank" rel="noreferrer" style={{ color: '#61dafb' }}>Xem trang GitHub</a>
        </p>
      </div>
    </div>
  );
}

export default App;