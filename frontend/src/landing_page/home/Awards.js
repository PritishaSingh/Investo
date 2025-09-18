import React from 'react';

function Awards() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media/images/largestBroker.svg' className='mt-5'/>
                </div>
                <div className='col-6 p-5 mt-3'>
                    <h1>Largest stock broker in India</h1>
                    <p>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investong in: </p>
                   <div className='row'>
                    <div className='col-6 p-5'>
                        <ul>
                            <li><p>Futures and Options</p></li>
                            <li><p>Commodity deriavtives</p></li>
                            <li><p>Currency deriavtives</p></li>
                        </ul>
                    </div>
                     <div className='col-6 p-5'>
                        <ul>
                            <li><p>Stocks and IPOs</p></li>
                            <li><p>Direct mutual funds</p></li>
                            <li><p>Bonds and Government Securities</p></li>
                        </ul>
                     </div>
                   </div>
                   <img src='media\images\pressLogos.png' alt='logo' style={{width:"80%"}}></img>
                </div>
            </div>
        </div>
     );
}

export default Awards;