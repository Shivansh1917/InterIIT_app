import React from 'react'
import Header from '../components/Header';
import DateVal from '../components/DateVal';
import LightCurve from '../components/LightCurve';
import Stats from '../components/Stats';
import Table from '../components/Table';

const Data = () => {
  return (
    <div>
        <div>
          <Header/>
        </div>
        <div>
          <DateVal/>
        </div>
        <div>
          <LightCurve/>
        </div>
        <div>
          <Stats/>
        </div>
        <div>
          <Table/>
        </div>
    </div>
  )
}

export default Data