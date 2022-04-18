import React, { ReactElement } from 'react'

import { createPortal } from 'react-dom'

import { ModalStyled } from 'styles/ModalStyled'

type ModalProps = {
  component: ReactElement
  isOpen: boolean
  handleOpen: () => void
}

export const Modal = (props: ModalProps): any => {
  const { handleOpen, isOpen, component } = props
  const root = document.querySelector('body')
  const wrapper = (
    <ModalStyled>
      <div className="modal">
        <button type="button" onClick={handleOpen}>
          close
        </button>
        {component}
      </div>
    </ModalStyled>
  )
  if (root && isOpen) {
    return createPortal(wrapper, root)
  }
  return null
}
