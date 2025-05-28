import InformationBox from "./InformationBox";

function Foot() {
  const footerData = {
    hours: [
      { date: "Mon - Fri", time: "10 AM - 7 PM" },
      { date: "Sat", time: "10 AM - 6 PM" },
      { date: "Sun", time: "10 AM - 4 PM" },
    ],
    location: "3904 E Mullan Ave #F, Post Falls, ID 83854",
    contact: {
      phone: "208 773 4627",
      email: "happy@nails.com",
    },
  };

  const styles = {
    mainFooter: {
      color: "white",
      backgroundColor: "#7D1260",
      position: "relative",
      bottom: "0",
      width: "100%",
      fontStyle: "italic",
      fontWeight: '300',
    },
    row: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "nowrap", 
    },
    footerTextContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: "1rem"
    },
    footerText: {
      textAlign: "center",
      fontSize: "0.9em",
      color: "white",
    },
  };

  return (
    <div style={styles.mainFooter}>
      <div className="container">
        <div style={styles.row}>
          <InformationBox
            title="Hours"
            items={footerData.hours}
            align="left"
          />
          <InformationBox
            title="Location"
            items={[footerData.location]}
            align="center"
          />
          <InformationBox
            title="Contact"
            items={[footerData.contact.phone, footerData.contact.email]}
            align="right"
          />
        </div>
        <hr />
        <div style={styles.footerTextContainer}>
          <p style={styles.footerText}>
            &copy;{new Date().getFullYear()} WEBIMPACT | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Foot;
