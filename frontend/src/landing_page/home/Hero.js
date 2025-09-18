import React from 'react';

function Hero() {
    return (  
        <div className='container'>
            <div className='row text-center'>
        <img src='media/images/homeHero.png' className='mb-5'></img>
            <h1 className='mt-5'>Invest In Everything</h1>
            <p>Online platfrom to invest in stocks, derivatives, mutual funds and many more</p>
            <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%", margin:"0 auto"}}>Singup Now</button>
            </div>
        </div>
    );
}

export default Hero;