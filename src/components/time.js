import '../styles/time.css';
import React from 'react';
import Header from './header';
import { BsFillPeopleFill } from "react-icons/bs";

function Time() {
    return (
        <div className="time">
            <Header />
            <section className="time_total">
                <div className="freq_t">
                    <h2 className="time_title">인구가 가장<br />많은 시간대</h2>
                    <h3 className="freq_time">14:00</h3>
                </div>

                <div className="rare_t">
                    <h2 className="time_title">인구가 가장<br />적은 시간대</h2>
                    <h3 className="rare_time">09:00</h3>
                </div>

                <div className="recomm_t">
                    <h2 className="time_title">추천<br />시간대</h2>
                    <h3 className="rec_time">13:00</h3>
                </div>

                <div className="dateset">
                    
                </div>
            </section>
        </div>
    );
}

export default Time;