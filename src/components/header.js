import '../styles/header.css';
import { VscAccount } from "react-icons/vsc";
import { BsPeopleFill } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import React from 'react';
import { AiOutlineHome } from "react-icons/ai";

function Header() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="sidemenu">
            <p>SENTER</p>
            <div className="menulist ml1">
              <div className="menufi">
                <a href="./"  >
                  <div className="menulogo">
                    <AiOutlineHome />
                  </div>|
                  <h4 className="menuft"> 홈</h4>
                </a>
              </div>
            </div>
            <div className="menulist ml2">
              <div className="menufi">
                <a href="./people">
                  <div className="menulogo">
                    <VscAccount />
                  </div>| 
                  <h4 className="menuft"> 방문자 수</h4>
                </a>
              </div>
            </div>
            <div className="menulist ml3">
              <div className="menufi">
                <div className="menulogo">
                  <BiTimeFive />
                </div>| 
                <h4 className="menuft"> 시간대</h4>
              </div>
            </div>
            <div className="menulist ml4">
              <div className="menufi">
              <a href="/age">
                <div className="menulogo">
                  <BsPeopleFill />
                </div>| 
                <h4 className="menuft"> 나이대</h4>
                </a>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
}

export default Header;