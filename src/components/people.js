import '../styles/people.css';
import { VscAccount } from "react-icons/vsc";
import { BsPeopleFill } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import React from 'react';
import { AiOutlineHome } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Header from './header.js';
import { RxDoubleArrowDown } from 'react-icons/rx';

function People(){
    return(
      <div className="people">
        <Header />
        <section className="visitor_total">
          <div className="visitor">
            <h3 className="date">2023-01-11 15:00</h3>
            <h2 className="visitorc">현 방문자 수 : 240명<b>(+ 62)</b></h2>
          </div>
        </section>

        <section className="visitor_list">
          <div className="dateset">
            <div className="design"></div>
            <h3 className="date">2023-01-10 15:00</h3>
            <h2 className="visitorc">방문자 수 : 178명<b id="dateset1">(+ 13)</b></h2>
          </div>
          <div className="dateset">
            <div className="design"></div>
            <h3 className="date">2023-01-09 15:00</h3>
            <h2 className="visitorc">방문자 수 : 165명<b id="dateset2">(+ 45)</b></h2>
          </div>
          <div className="dateset">
            <div className="design"></div>
            <h3 className="date">2023-01-08 15:00</h3>
            <h2 className="visitorc">방문자 수 : 120명<b id="dateset3">(- 74)</b></h2>
          </div>
          <div className="dateset">
            <div className="design"></div>
            <h3 className="date">2023-01-07 15:00</h3>
            <h2 className="visitorc">방문자 수 : 194명<b id="dateset4">(-)</b></h2>
          </div>

        <div className="bottom">
          <div className="more">
            <RxDoubleArrowDown size={"70"} color="gray" />
          </div>
        </div>
        </section>
      </div>
    );
}

export default People;