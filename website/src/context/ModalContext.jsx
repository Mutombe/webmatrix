import React from 'react'
import { createContext, useContext, useState } from 'react'

const ModalContext = createContext()

export function ModalProvider({ children }) {
  const [policyModal, setPolicyModal] = useState({ isOpen: false, type: null })

  const openPolicy = (type) => {
    setPolicyModal({ isOpen: true, type })
  }

  const closePolicy = () => {
    setPolicyModal({ isOpen: false, type: null })
  }

  return (
    <ModalContext.Provider value={{ policyModal, openPolicy, closePolicy }}>
      {children}
    </ModalContext.Provider>
  )
}

export function useModal() {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider')
  }
  return context
}
