import React from 'react';
import {Button, Typography} from 'antd';
import { MonthNames } from "../utils";
import { connect } from 'react-redux'
import { plusMonth, minusMonth } from '../redux/actions/selectedMonth'
import { selectDate } from '../redux/actions/selectedDate';

const MonthSelect = ({plusMonth,minusMonth, selectedMonth, selectDate}) => {

    const {Text} = Typography; 

    let currentMonthName = MonthNames[selectedMonth.getMonth()];
    let currentYear = selectedMonth.getFullYear();
    

    return <div className="month-changer">
        <Button  icon="<" size = "small" onClick={minusMonth} />
        <Text strong className="month-changer_title">{currentMonthName + ", " + currentYear}</Text>
        <Button  icon=">" size = "small" onClick={plusMonth} />
        <input type='date'  onChange={(e)=>{
            selectDate(e.target.value)
        }}/>
    </div>;
}

export default connect((store) => ({
    selectedMonth: store.selectedMonth
}),{plusMonth,minusMonth, selectDate})(MonthSelect);
