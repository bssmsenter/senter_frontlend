import '../styles/age.css';
import React from 'react';
import Header from './header';
import { BsFillPeopleFill } from "react-icons/bs";

function Age(){
    return(
        <div className="age">
            <Header/>
            <section>
                <div className='people_age'>
                    <div className="age_big_box">
                        <h1>현 인구수 나이대는</h1>
                        <div className='img_box'>
                        <div>
                            <img src='https://ifh.cc/g/qT9qmK.png' className='child' border='0' />
                            <h4>성인</h4>
                            <h4 className='child_num'>70%</h4>
                        </div>
                        <div className='adult_box'>
                            <img src='https://ifh.cc/g/lMkWvf.png' className='adult' border='0'/>
                            <h4>어린이</h4>
                            <h4 className='adult_num'>30%</h4>
                        </div>
                        </div>
                    </div>
                    <div className="age_big_box">
                        <h1>총 인구수 나이대는</h1>
                        <div className='img_box'>
                            <div>
                                <img src='https://ifh.cc/g/qT9qmK.png' className='child' border='0' />
                                <h4>성인</h4>
                                <h4 className='child_num'>70%</h4>
                            </div>
                            <div className='adult_box'>
                                <img src='https://ifh.cc/g/lMkWvf.png' className='adult' border='0'/>
                                <h4>어린이</h4>
                                <h4 className='adult_num'>30%</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='people_age_bottom'>
                    <div className="age_big_box">
                        <h1>어린이가 가장 많았던 시간대는</h1>
                        <h1 className='child_time'>11:00</h1>
                        <h1>31% 로 가장 많았습니다!</h1>
                    </div>
                    <div className="age_big_box">
                        <h1>성인이 가장 많았던 시간대는</h1>
                        <h1 className='adult_time'>15:00</h1>
                        <h1>92% 로 가장 많았습니다!</h1>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Age;