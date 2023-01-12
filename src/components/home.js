import '../styles/home.css';
import React from 'react';
import Header from './header';
import { BsFillPeopleFill } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { MdEmojiPeople } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import Rechart from "./Rechart";

var people = 4;
function Home(){
    return(
        <div className="Home">
            <Header/>
            <section>
                <div className='mainse'>
                    <div className="mainpeople">
                        <h3>현 방문자 수 </h3>
                        <h2><BsFillPeopleFill/></h2>
                        <h1 className="countpeople">{people}명</h1>
                    </div>
                </div>
                <div className='mainage'>
                    <div className="maintextage">
                        <h3> 나이대</h3>
                        <h2><AiOutlineUser/></h2>
                        <h1 className="countage"><MdEmojiPeople/></h1>
                        <h1 className="countagepertjs">성인</h1>
                        <h1 className="countageperone">70%</h1>
                        <h1 className="countagepericon"><MdEmojiPeople/></h1>
                        <h1 className="countageperdjsl">어린이</h1>
                        <h1 className="countageperchrild">30%</h1>
                    </div>
                </div>
                <div className="maintime">
                    <div className="maintime-gra">
                        <h3>시간대</h3>
                        <h2 className="maintimelogo"><AiOutlineClockCircle/></h2>
                        <div style={{ width: 1000, height: 200 ,margin: '70px'}}>
                            <Rechart />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;