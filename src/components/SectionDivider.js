import React from 'react';

const SectionDivider = ({ title = 'Section Title', align = 'left' }) => {

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
    height: '0.06em',
    backgroundColor: '#7D1260',
  };

  return (
    <div style={containerStyle}>
      {align === 'center' && <div style={lineStyle}></div>}

      <span style={{
        fontFamily: "'Fraunces', serif",
        fontSize: '1.5rem',
        color: '#7d1260',
        fontStyle: 'italic'
      }}>
        {title}
      </span>

      {(align === 'center' || align === 'left') && <div style={lineStyle}></div>}
    </div>
  );
};

export default SectionDivider;