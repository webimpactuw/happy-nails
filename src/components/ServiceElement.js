import PropTypes from 'prop-types';

function ServiceElement({
  id,
  name,
  description,
  label1,
  price1,
  label2,
  price2,
  label3,
  price3,
  label4,
  price4,
  imageURL,
}) {
  const serviceContainer = {
    paddingTop: '50px',
    paddingBottom: '75px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '20px',
  };

  const photoContainer = {
    flex: '1 1 300px',
    minHeight: '300px',
    backgroundImage: `url(${imageURL})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '10px',
  };

  const descriptionContainer = {
    flex: '1 1 300px',
    display: 'flex',
    flexDirection: 'column',
    padding: '0 20px',
  };

  const serviceName = {
    fontFamily: "'Fraunces', serif",
    color: '#7d1260',
    fontStyle: 'italic',
    textDecoration: 'underline',
    fontSize: '3rem',
    margin: '0 0 10px',
  };

  const serviceDescription = {
    fontFamily: 'DM Sans',
    color: '#7d1260',
    fontSize: '1.125rem',
    marginBottom: '30px',
  };

  const lineItem = {
    display: 'flex',
    alignItems: 'center',
    color: '#7d1260',
    fontFamily: 'DM Sans',
    marginBottom: '20px',
  };

  const label = {
    flex: '0 0 auto',
    fontSize: '1.25rem',
    fontWeight: '400',
  };

  const dots = {
    flex: '1 1 auto',
    borderBottom: '4px dotted #7d1260',
    margin: '0 10px',
    height: '0.5em',
  };

  const price = {
    flex: '0 0 auto',
    fontSize: '1.25rem',
    fontWeight: '400',
  };

  return (
    <div style={serviceContainer} id={id}>
      <div style={photoContainer}></div>
      <div style={descriptionContainer}>
        <h1 style={serviceName}>{name}</h1>
        <h4 style={serviceDescription}>{description}</h4>
        {[ [label1, price1], [label2, price2], [label3, price3], [label4, price4] ].map(
          ([lbl, prc], idx) => (
            <div key={idx} style={lineItem}>
              <span style={label}>{lbl}</span>
              <span style={dots}></span>
              <span style={price}>{prc}</span>
            </div>
          )
        )}
      </div>
    </div>
  );
}

ServiceElement.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  label1: PropTypes.string.isRequired,
  price1: PropTypes.string.isRequired,
  label2: PropTypes.string.isRequired,
  price2: PropTypes.string.isRequired,
  label3: PropTypes.string.isRequired,
  price3: PropTypes.string.isRequired,
  label4: PropTypes.string.isRequired,
  price4: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
};

export default ServiceElement;
