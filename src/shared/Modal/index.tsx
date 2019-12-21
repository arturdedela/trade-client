import React from "react";
import ReactModal from 'react-modal';
import { observer } from "mobx-react";
import { useStore } from "utils/IoC";
import { ModalStore } from "./store";
import { ReactModalStyled } from "./style";

ReactModal.setAppElement("#root");

/**
 * To edit overlay style use core/App/global.style.ts
 */
function Modal() {
  const { openedModal: OpenedModal, props, closeModal } = useStore(ModalStore);

  if (!OpenedModal) {
    return null;
  }

  return (
    <ReactModalStyled onRequestClose={closeModal} isOpen={true} overlayClassName="modal-overlay">
      <OpenedModal {...props} />
    </ReactModalStyled>
  )
}

export default observer(Modal);
