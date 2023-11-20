import { Component } from "react";
import { createPortal } from "react-dom";
import PropTypes from 'prop-types';
import { ModalWr } from "./ModalWr.styled";



const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {

    componentDidMount() {
        document.addEventListener('keydown', this.closeModalByEsc)
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.closeModalByEsc)
    }

    closeModalByEsc = e => {
        if (e.code === 'Escape') {
                this.props.toggleModal()
            }
    }


    render() {
        const {largeImageURL} = this.props

        return createPortal(
            <ModalWr>
                <div className="Modal">
                    <img src={largeImageURL} alt="" />
                </div>
            </ModalWr>,
            modalRoot
        );
    };
};


Modal.propTypes = {
    toggleModal: PropTypes.func.isRequired,
    largeImageURL: PropTypes.string.isRequired,
}