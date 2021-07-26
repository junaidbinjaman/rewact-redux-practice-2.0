import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { buyPhone } from '../redux/phone/phoneActions';


const PhoneContainer = (props) => {
  const [number, setNumber] = useState(1)
  return (
    <div>
      <h1>Number of Phone = {props.phoneNum}</h1>
      <input type="text" value={number} onChange={e => setNumber(e.target.value)} />
      <button onClick={() => props.buyPhone(number)}>Buy Phone</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    phoneNum: state.phone.numOfPhone
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyPhone: (number) => dispatch(buyPhone(number))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhoneContainer);