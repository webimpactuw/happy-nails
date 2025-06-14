import { Component } from "react";
import PropTypes from "prop-types";

class InformationBox extends Component {
  render() {
    const { title, items } = this.props;

    const styles = {
      col: {
        flex: "1",
        padding: "1em",
        minWidth: "200px",
      },
      h4: {
        marginBottom: "1em",
        fontSize: "1.2em",
        fontFamily: "'Fraunces', serif",
        textAlign: "center",
      },
      listUnstyled: {
        listStyle: "none",
        padding: "0",
        textAlign: "center",
      },
    };

    return (
      <div style={styles.col}>
        <h4 style={styles.h4}>{title}</h4>
        <ul style={styles.listUnstyled}>
          {items.map((item, index) => {
            if (item.date && item.time) {
              return (
                <li key={index}>
                  <strong>{item.date}:</strong> {item.time}
                </li>
              );
            } else {
              return <li key={index}>{item}</li>;
            }
          })}
        </ul>
      </div>
    );
  }
}

InformationBox.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        date: PropTypes.string,
        time: PropTypes.string,
      }),
    ])
  ).isRequired,
};

export default InformationBox;
