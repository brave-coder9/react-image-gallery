import React, { useState, useEffect } from 'react';

import './index.css';

const Waiting = ({
  inline = undefined,
  input = undefined,
  on = undefined,
  children = [],
}) => {
  const [step, setStep] = useState(1);
  const display = ('.').repeat(step);
  useEffect(() => {
    const timer = setInterval(() => setStep(step => step <= 2 ? step + 1 : 0), 750);
    return () => clearInterval(timer);
  }, []);

  if (!on || on === undefined) {
    return (
      <React.Fragment>
        {(
          input !== undefined
          && <input className="form-control" value={display} disabled />
          || inline !== undefined
          && <div className="waiting"><strong style={{ display: 'inline-block', minWidth: '1em' }}>{display}</strong></div>
          || <div className="waiting-icon"><i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw" /></div>
        )}
      </React.Fragment>
    );
  } else {
    return <React.Fragment>{children}</React.Fragment>;
  }
};

export default Waiting;