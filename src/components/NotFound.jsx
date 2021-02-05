import React from "react";
import MapNav from "./map/MapNav";
import Form from "../components/contact/Form"
import History from './timeline/History';
import HistoryNoCollapse from "./timeline/HistoryNoCollapse";

const NotFound = () => {
  

  return (
    <div className='Content'>
      <h2 className="sub-headline">NotFound</h2>
      <MapNav width={'400px'} height={'400px'} radius={'10px'}
      border={"1px solid #888888"} shadow={"-3px 3px 10px -2px rgba(0, 0, 0, 0.253)"}/>
      <Form />
      <History />
      <HistoryNoCollapse />
    </div>
  );
};

export default NotFound;