import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import style from "./ModeSwitcher.module.sass";
import { setNet } from "../../../../store/MainPage/actions";

function ModeSwitcher(props) {
  const color = {
    color: "rgba(0, 0, 0, 0.87)",
  };

  const [selected, setSelected] = useState(props.options[0]);

  useEffect(() => {
    setSelected(props.net);
  }, [props.net]);

  return (
    <div className="modeSwitcher">
      {props.options.map((elem) => (
        <span
          key={elem}
          onClick={() => props.setNet(elem)}
          id={elem}
          className={`modeSwitcher__option${
            selected === elem ? " active" : ""
          }`}
        >
          {elem}
        </span>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    net: state.reducerMainPage.net,
  };
};

const mapDispatchToProps = {
  setNet,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModeSwitcher);
