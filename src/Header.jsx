import header from '../src/assets/header.png';

const Header = () => {
    const headerStyle = {
        backgroundImage: `url(${header})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '400px', // Set a minimum height for the container
        position: 'relative',
    };

    const textStyle = {
        position: 'absolute',
        top: '50%',
        //left: '0',
        right: '100px',

        color: 'white',

        padding: '20px',
        textAlign: 'center',
    };

    return (
        <div style={headerStyle}>
            <p style={textStyle}>
                Indulge in Artisanal Bliss: Sip & Savor <br /> the Finest Brews and Bites at Espresso Bliss Bakery!
            </p>
        </div>
    );
};

export default Header;
