import React from 'react'
import Header from '../components/Header';
import Body from '../components/Body';

const Home = () => {
  return (
    <div className='compBody'>
      <div>
        <Header/>
      </div>
      <div>
        <Body/>
      </div>
    </div>  
  )
}

export default Home