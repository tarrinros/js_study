import React from 'react'

function Loader() {

}

export default () => <div style={{display: 'flex', justifyContent: 'center', margin: '.5rem'}}>
  <div className="lds-roller">
    <div/>
    <div/>
    <div/>
    <div/>
    <div/>
    <div/>
    <div/>
    <div/>
  </div>
</div>