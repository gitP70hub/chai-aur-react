import React from 'react';

export default function Card({username, btnText="visit me"}) {
    console.log(username);
    return (
        <div style={styles.card}>
            <img 
                src="https://images.pexels.com/photos/29851698/pexels-photo-29851698/free-photo-of-artisan-desserts-with-strawberry-ice-cream.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Sample" 
                style={styles.image} 
            />
            <h2 style={styles.title}>{username}</h2>
            <p style={styles.description}>
                This is a simple card component with an image from the internet.
            </p>
            <button style={styles.button}>{btnText}</button>
        </div>
    );
}

const styles = {
    card: {
        border: '1px solid #ccc',
        borderRadius: '8px',
        width: '300px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        textAlign: 'center',
        margin: '20px',
        padding: '10px',
        backgroundColor: '#fff'
    },
    image: {
        width: '100%',
        borderRadius: '8px 8px 0 0'
    },
    title: {
        fontSize: '1.5em',
        margin: '10px 0'
    },
    description: {
        color: '#555'
    },
    button: {
        marginTop: '10px',
        padding: '10px 15px',
        fontSize: '1em',
        color: '#fff',
        backgroundColor: '#007bff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    }
};