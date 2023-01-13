import '../styles/time.css';
import React from 'react';
import Header from './header';
import { BsFillPeopleFill } from "react-icons/bs";
import Rechart from "./Rechart";

function Time() {
    return (
        <div className="time">
            <Header />
            <section className="time_total">
                <div className="freq_t">
                    <h2 className="time_title">인구가 가장<br />많은 시간대</h2>
                    <h3 className="freq_time">18:00</h3>
                </div>

                <div className="rare_t">
                    <h2 className="time_title">인구가 가장<br />적은 시간대</h2>
                    <h3 className="rare_time">22:00</h3>
                </div>

                <div className="recomm_t">
                    <h2 className="time_title">추천<br />시간대</h2>
                    <h3 className="rec_time">15:00</h3>
                </div>

                <div className="graph">
                    <div style={{ width: 1000, height: 200 ,margin: '70px 0px'}}>
                        <Rechart />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Time;