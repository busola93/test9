import React from "react";

export default class Section extends React.Component {
  render () {
    const cardStyle={
    backgroundCoor: "red",
    padding: "20px",
    borderRadius: "Spx"

    };
    return (
  <>
     <div style={{backgroundColor:'red'}} >section</div>
     < div style= {cardStyle}> Another ink no styling</div>
  </>

    );
  }


}