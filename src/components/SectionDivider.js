import React from 'react';

const SectionDivider = ({ children, align = 'left' }) => {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    justifyContent:
      align === 'center'
        ? 'center'
        : align === 'right'
        ? 'flex-end'
        : 'flex-start',
    margin: '1rem 0'
  };

  const lineStyle = {
    flex: 1,
    height: '1px',
    backgroundColor: '#7D1260',
  };

  return (
    <div style={containerStyle}>
      {align === 'center' && <div style={lineStyle}></div>}

      <span style={{
        fontFamily: "'Fraunces', serif",
        fontSize: '1.5rem',
        color: '#7d1260',
        fontWeight: 'normal'
      }}>
        {children}
      </span>

      {(align === 'center' || align === 'left') && <div style={lineStyle}></div>}
    </div>
  );
};

export default SectionDivider;
