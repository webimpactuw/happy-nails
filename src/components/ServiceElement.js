function ServiceElement(){
    const serviceContainer = {
        padding: '3em 0 0 0',
        display: 'flex',
        flexDirection: 'row'
    }

    const photoContainer = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '400px',
        width: '400px'
    }

    const imgStyle = {
        height: '100%',
        width: '100%',
        borderRadius: '10px'
    }
    
    const descriptionContainer = {
        display: 'flex',
        flexDirection: 'column'
    }


    return (    
    <div style={serviceContainer}>
        <div style={photoContainer}>
        <img style={imgStyle} 
        src="https://nailwrap.co/cdn/shop/products/IMG_20210528_144705_900e5527-0289-4855-9a68-5d4f9cfdc038.jpg" alt="Nail wrap" />
        </div>
        <div style={descriptionContainer}>

        </div>
    </div>
    );

}
export default ServiceElement;