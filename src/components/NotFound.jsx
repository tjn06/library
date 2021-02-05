import React from "react";
import MapNav from "./map/MapNav";
import Form from "../components/contact/Form"
import History from './timeline/History';
import HistoryNoCollapse from "./timeline/HistoryNoCollapse";

const NotFound = () => {
  

  return (
    <div className='Content'>
      <h2 className="sub-headline">NotFound</h2>
      <MapNav />
      <Form />
      <History />
      <HistoryNoCollapse />
    </div>
  );
};

export default NotFound;