import { useState } from "react";
import "./App.css";
import Modal from "./Components/Modal/Modal";

function App() {

  const [openModal, setOpenModal] = useState(false)

  const open = () => {
    setOpenModal(!openModal)
  };

  return (
    <>
      <div className="container">
        <h2>Abrir o Modal</h2>
        <button className="btn-open" onClick={open}>Clique Aqui</button>
        <Modal isOpen={openModal} setOpenModal={setOpenModal}/>
      </div>
    </>
  );
}

export default App;
