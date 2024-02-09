import React from "react";

const Component = React.forwardRef((ref, props) => {
  return (
    <div>
      <div>Hello</div>
      <div>Quera</div>
      <input ref={ref} />
    </div>
  );
});

export default Component;
