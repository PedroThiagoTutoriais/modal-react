import PropTypes from 'prop-types'
import './Modal.modules.css'

function Modal ({isOpen, setOpenModal}) {

    const close = () => {
        setOpenModal(!isOpen)
    }

    if(isOpen) {
    return(
        <div className='containerModal'>
           <div className='modal'>
            <h2>Modal</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis perferendis, error aliquam architecto reiciendis provident explicabo culpa ipsum. Dicta, soluta fugiat officiis reiciendis beatae architecto molestias ab accusamus fuga repellendus?</p>
            <button className='btn-close' onClick={close}>Fechar</button>
           </div>
        </div>
    )} 

}

Modal.propTypes = {
    isOpen: PropTypes.boolean
}

Modal.propTypes = {
    setOpenModal: PropTypes.boolean
}

export default Modal
