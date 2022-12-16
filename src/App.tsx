import React, { FC, useState } from "react";
import ButtonComponent from "./Components/ButtonComponent/ButtonComponent";
import ModalComponent from "./Components/ModalComponent/ModalComponent";
import "./styles.scss";
import NewDayLogo from "./images/NewDay_logo.png";

/*

Interview Task:

Create a WCAG 2.1 AA Compliant Modal

Put any content you want in the modal,
ensure it is dismissable or closable,
include comments to help us understand
your choices, the modal must prevent 
interaction with the underlying page
until dismissed or actioned

Write some tests to confirm that the
modal works and is compliant

Create some styles, remember any styles
should also be WCAG 2.1 AA Compliant

NB: Getting the task done is more important than
it being complete, don't worry about implementing 
the solution in a single file

Use comments to explain missing parts of the 
implementation or to explain where you stopped
and why - the more comments you leave us the
easier it will be for use to understand how you
write code :)

Feel free to add libraries on the left,
the test runner is in a tab on the right

*/

const App = (): JSX.Element => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const handleModal = () => setShowModal(!showModal);

  return (
    <div className="App">
      <img className="App__logo" src={NewDayLogo} alt="new day logo" />

      <ButtonComponent name="Open Modal" handleModal={handleModal} />
      {showModal ? <ModalComponent handleModal={handleModal} /> : null}
    </div>
  );
};

export default App;
