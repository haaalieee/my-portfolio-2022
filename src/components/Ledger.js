import React, { forwardRef } from "react";

const Ledger = forwardRef(({ scroll }, ref) => (
  <div
    ref={ref}
    onScroll={(e) => {
      scroll.current =
        e.target.scrollTop / (e.target.scrollHeight - window.innerHeight);
    }}
    className="ledger"
  ></div>
));

export default Ledger;

