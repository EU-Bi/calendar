import React from 'react';
import {CloseOutlined } from '@ant-design/icons';

import EventFormRead from './EventFormRead';
import EventFormCreate from './EventFormCreate';

import { connect } from 'react-redux'
import { hideEventForm, showEventForm } from '../../redux/actions/eventForm'
import { Button } from 'antd';

function AddEvent({ showEventForm}){
  
  return (
    <button  onClick={()=>{showEventForm()}}>AddEvent</button>
   );
}
export default connect(
  ({events}) =>({
      events : events
  })
  ,{ showEventForm})(AddEvent);