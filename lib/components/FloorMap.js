import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const FloorMap = ({ rooms, hideMap }) => {
  return (
    <section className='Modal'>
      <div className="map">
        <div className="map-svg">
          <svg width="749px" height="440px" viewBox="5540 1058 2996 1757">
            <path d="M7852,1493 L7852,1490.5 L7852,1074.22538 L8151,1074.12473 L8151,1559 L8149.5,1559 L7860.5,1559 L7855.5,1559 L7855.5,1559.16326 L7852.81691,1563.26107 L7797.81691,1647.26107 L7795.07798,1651.44416 L7795.16326,1651.5 L7795,1651.5 L7795,1656.5 L7795,2066 L7795,2075 L7800,2075 L8153,2075 L8161,2075 L8161,2070 L8161,1074.12136 L8521,1074.00017 L8521,1367 L8243.5,1367 L8241,1367 L8235,1367 L8235,1372 L8235,2795 L8235,2799 L7734,2799 L7734,2279 L7734,2274 L7724.75,2274 L7720.5,2274 L5562,2274 L5557,2274 L5557,2284 L5562,2284 L5892,2284 L5892,2799 L5556.99711,2799 L5556.63852,2179 L5561,2179 L6082.5,2179 L6087.5,2179 L6087.5,2169 L6082.5,2169 L5561,2169 L5556.63274,2169 L5556,1074.99832 L6178,1074.78892 L6178,1077 L6178,1450 L6178,1454 L6138,1454 L6133,1454 L6133,1454.36015 L6132.52479,1453.94492 L6129.23485,1457.71007 L6039.23485,1560.71007 L6035.94492,1564.47521 L6039.5834,1567.65447 L6041.46447,1569.53553 L6071.45642,1599.52749 L6071.50116,1601.6075 L6083.50116,2159.6075 L6083.60866,2164.60635 L6093.60635,2164.39134 L6093.49884,2159.3925 L6081.49884,1601.3925 L6081.39736,1596.6737 L6082.07107,1596 L6078.53553,1592.46447 L6049.84093,1563.76987 L6136.76515,1464.28993 L6137.01849,1464 L6138,1464 L6178.00981,1464 L6178.00983,1464.00981 L6183.00491,1464 L6188,1464 L6188,1463.99019 L6687,1463.00983 L6687,1483 L6687,1488 L6695.25,1488 L7194,1488 L7197,1488 L7197,1494 L7197,1499 L7200.5,1499 L7203,1499 L7712,1499 L7716,1499 L7847,1499 L7852,1499 L7852,1493 Z M7842,1489 L7842,1074.22875 L7720,1074.26982 L7720,1076.5 L7720,1487 L7720,1489 L7842,1489 Z M6218,2799 L6330,2799 L6330,2284 L6218,2284 L6218,2799 Z M6208,2799 L5902,2799 L5902,2284 L6208,2284 L6208,2799 Z M6188,1453.99017 L6188,1450 L6188,1077 L6188,1074.78556 L6687,1074.61757 L6687,1453.00981 L6188,1453.99017 Z M6697,1457.99509 L6697,1074.61421 L7315.91414,1074.40585 L7201.63986,1135.59208 L7198.07654,1137.5 L7197,1137.5 L7197,1142.5 L7197,1478 L7194,1478 L6697,1478 L6697,1462.99019 L6697.00981,1462.99017 L6697,1457.99509 Z M7207,1489 L7207,1144.06532 L7333.36014,1076.40792 L7337.11262,1074.39872 L7710,1074.27319 L7710,1076.5 L7710,1487 L7710,1489 L7207,1489 Z M7724,2284 L7724,2799 L6959,2799 L6959,2284 L7720.5,2284 L7724,2284 Z M6949,2284 L6949,2799 L6642,2799 L6642,2798 L6642,2284 L6949,2284 Z M6632,2284 L6632,2798 L6632,2799 L6340,2799 L6340,2284 L6632,2284 Z M7672,1692 L7680,1692 L7680,1697 L7680,2159.5 L7680,2162 L7680,2167 L7675,2167 L7219,2167 L7214,2167 L7214,2161.00539 L7213.00001,1697.01078 L7212.98924,1692.01079 L7222.98921,1691.98924 L7222.98924,1692 L7224.5,1692 L7672,1692 Z M7670,1702 L7670,2157 L7223.99139,2157 L7223.01079,1702 L7224.5,1702 L7670,1702 Z M8151,1569 L8151,2065 L7805,2065 L7805,1656.5 L7805,1654.54583 L7806.18309,1652.73893 L7861.01215,1569 L8149.5,1569 L8151,1569 Z M8245,2799.5 L8245,2809 L8240,2809 L5552.5,2809 L5552.00145,2809 L5547.00289,2809.00289 L5547,2804.00289 L5546,1075.00289 L5545.99711,1070.00289 L5546,1070.00289 L5545.99832,1065.00168 L5550.99832,1065 L8521,1064.00017 L8521.49916,1064 L8526.49832,1063.99832 L8526.49832,1064 L8531,1064 L8531,1069 L8531,1367.5 L8531,1370 L8531,1377 L8526,1377 L8245,1377 L8245,2795 L8245,2799.5 Z" id="Combined-Shape" stroke="#000000" strokeWidth="2" strokeLinecap="square" fill="none"></path>
          </svg>
        </div>
        <div className="map-text">
          {rooms.a && <div className="classroom a">A: <span>{rooms.a.title}</span> <br/><br/> Attendees: <span>{rooms.a.attendees}</span></div>}
          {rooms.b && <div className="classroom b">B: <span>{rooms.b.title}</span> <br/><br/> Attendees: <span>{rooms.b.attendees}</span></div>}
          {rooms.c && <div className="classroom c">C: <span>{rooms.c.title}</span> <br/><br/> Attendees: <span>{rooms.c.attendees}</span></div>}
          {rooms.d && <div className="classroom d">D: <span>{rooms.d.title}</span> <br/><br/> Attendees: <span>{rooms.d.attendees}</span></div>}
          {rooms.e && <div className="classroom e">E: <span>{rooms.e.title}</span> <br/><br/> Attendees: <span>{rooms.e.attendees}</span></div>}
          {rooms.f && <div className="classroom f">F: <span>{rooms.f.title}</span> <br/><br/> Attendees: <span>{rooms.f.attendees}</span></div>}
          {rooms.g && <div className="classroom g">G: <span>{rooms.g.title}</span> <br/><br/> Attendees: <span>{rooms.g.attendees}</span></div>}
          {rooms.h && <div className="classroom h">H: <span>{rooms.h.title}</span> <br/><br/> Attendees: <span>{rooms.h.attendees}</span></div>}
          {rooms.auditorium && <div className="classroom grand-room">Auditorium: <span>{rooms.auditorium.title}</span> <br/><br/> Attendees: <span>{rooms.auditorium.attendees}</span></div>}
          {rooms.vault && <div className="classroom vault">Vault: <span>{rooms.vault.title}</span> <br/><br/> Attendees: <span>{rooms.vault.attendees}</span></div>}
         </div>
         <button className="HideMap" onClick={()=>hideMap()}>Hide Map</button>
      </div>
    </section>
  )
}

export default FloorMap;
