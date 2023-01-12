import '../styles/home.css';
import React from 'react';
import Header from './header';
import { BsFillPeopleFill } from "react-icons/bs";

function Home(){
    return(
        <div className="Home">
            <Header/>
            <section>
                <div className='mainse'>
                    <div className="mainpeople">
                        <h3>현 방문자 수 </h3>
                        <h2><BsFillPeopleFill/></h2>
                        <h1 className="countpeople">320명</h1>
                    </div>
                </div>
                <div className='age'>
                    <div className="mainage">
                        <h3>현 방문자 수 .</h3>
                        <h2><BsFillPeopleFill/></h2>
                        <h1 className="countage">320명</h1>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;