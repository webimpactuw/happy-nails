function ServiceElement(props){
    const serviceContainer = {
        paddingTop: '50px',
        paddingBottom: '75px',
        display: 'flex',
        flexDirection: 'row',
    }

    const photoContainer = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '400px',
        width: '600px',
        backgroundImage: `url(${props.imageURL})`,
        backgroundSize: 'cover',
        borderRadius: '10px',
    }
    
    const descriptionContainer = {
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
    }

    const serviceName = {
        display: 'flex',
        padding: '0 40px 0 40px',
        fontFamily: "'Fraunces', serif",
        color: '#7d1260',
        fontStyle: 'italic',
        textDecoration: 'underline',
        fontSize: '1.5rem',
    }
    const serviceDescription = {
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'DM Sans',
        color: '#7d1260',
        padding: '0 0 0 40px',
        fontSize: '20px',
    }
    const lineItem = {
        display: 'flex',
        alignItems: 'center',
        color: '#7d1260',
        fontFamily: 'DM Sans',
        marginBottom: '30px',
        padding: '0px 0 0 40px',
        fontSize: ''
    }
    const label = {
        flex: '0 0 auto',
        fontSize: '25px',
        fontWeight: '400'
    }
    const dots = {
        flex: '1 1 auto',
        borderBottom: '4px dotted #7d1260',
        margin: '0 10px',
        height: '0.5em'
    }
    const price = {
        flex: '0 0 auto',
        fontSize: '25px',
        fontWeight: '400'
    }



    return (    
    <div style={serviceContainer}>
        <div style={photoContainer}>
        </div>
        <div style={descriptionContainer}>
            <div style={serviceName}>
                <h1 style={{margin:'0', fontWeight:'300'}}>{props.name}</h1>
            </div>
            <div style={serviceDescription}>
                <h4 style={{fontWeight:'100'}}>{props.description}</h4>
            </div>
            <div style={lineItem}> 
                <span style={label}>{props.label1} </span>
                <span style={dots}></span>
                <span style={price}>{props.price1}</span>
            </div>
            <div style={lineItem}> 
                <span style={label}>{props.label2} </span>
                <span style={dots}></span>
                <span style={price}>{props.price2}</span>
            </div>
            <div style={lineItem}> 
                <span style={label}>{props.label3} </span>
                <span style={dots}></span>
                <span style={price}>{props.price3}</span>
            </div>
            <div style={lineItem}> 
                <span style={label}>{props.label4} </span>
                <span style={dots}></span>
                <span style={price}>{props.price4}</span>
            </div>
        </div>
    </div>
    );

}
export default ServiceElement;