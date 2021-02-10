import React from 'react';
import Header from './Header'
import EditMode from '../edit/EditMode'
import HeaderTwoRows from './HeaderTwoRows'
// import HeaderNoScroll from './HeaderNoScroll'
// import InfoHeaderOneRow from './InfoHeaderOneRow'


function IndexHeader({showEdit}) {



  return(

    <div>
      <EditMode
        showEdit={showEdit}
        componentLabel={"Herobild"}
        // direction={"column-reverse"}
        altOneComponent={<Header />} 
        altTwoComponent={<HeaderTwoRows />}
      />
      {/* <Header /> */}
     {/* <HeaderTwoRows /> */}
      {/* <HeaderNoScroll /> */}
    </div>



  )
}

export default IndexHeader;