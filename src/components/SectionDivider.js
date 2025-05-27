import PropTypes from 'prop-types';

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
    margin: '1rem 0',
  };

  const lineStyle = {
    flex: 1,
    height: '1px',
    backgroundColor: '#7D1260',
  };

  const textStyle = {
    fontFamily: "'Fraunces', serif",
    fontSize: '1.75rem',
    color: '#7d1260',
    fontWeight: 'normal',
  };

  return (
    <div style={containerStyle}>
      {(align === 'center' || align === 'right') && <div style={lineStyle}></div>}

      <span style={textStyle}>{children}</span>

      {(align === 'center' || align === 'left') && <div style={lineStyle}></div>}
    </div>
  );
};

SectionDivider.propTypes = {
  children: PropTypes.node.isRequired,
  align: PropTypes.oneOf(['left', 'center', 'right']),
};

export default SectionDivider;
