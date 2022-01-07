import React from "react";
import ReactDOM from "react-dom";
import classes from "../../css/Modal.module.css";

function Backdrop(props) {
  return <div className={classes.backdrop} onClick={props.onClick}/>;
}

function ModalOverlay(props) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
}

export default function Modal(props) {
  const portalElement = document.getElementById("overlay");
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClick={props.onClick}/>, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
}
