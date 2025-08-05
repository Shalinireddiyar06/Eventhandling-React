import React from 'react';


const ChangeHeading = () => {
  const [heading, setHanding] = React.useState("Learned HTML, CSS, JavaScript");

  function handleChangeHeading() {
    setHanding("Now learning React JS");
  }

  return (
    <div className="container">
      <h1 className="heading">{heading}</h1>
      <button className="change-button" onClick={handleChangeHeading}>
        Change Heading
      </button>
    </div>
  );
};

export default ChangeHeading;
