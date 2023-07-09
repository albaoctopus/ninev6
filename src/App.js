import React from 'react';
import Header from './components/header';
import dataBanner from './assets/fake-data/data-banner';
import dataBanner2 from './assets/fake-data/data-banner-2';
import dataLiveaution from './assets/fake-data/data-liveaution';
import dataExplore from './assets/fake-data/data-explore';
import Banner01 from './components/banner/Banner01';
import Banner02 from './components/banner/Banner02';
import Banner03 from './components/banner/Banner03';
import LiveAutions from './components/liveautions/LiveAuctions';
import Explore from './components/explore/Explore';



import './App.scss';
import '../src/assets/binasea.css';
import '../src/assets/font-awesome.css';

function App() {
  
  
  return (
    <>
    <Header/>
   <div className="home-1">
   <Banner03 data={dataBanner2} />
   </div>
  
   <div>
   
   <Banner01 data={dataBanner} />
   <LiveAutions data={dataLiveaution} />
  


</div>
  
    </>
  );
}

export default App;
