import React, { createContext, useState, Dispatch, SetStateAction } from "react"

interface UserContextProviderProps {
  children: React.ReactNode
}

interface UserContextInterface {
  openLoginModal: boolean
  setOpenLoginModal: Dispatch<SetStateAction<boolean>>

  openRegisterModal: boolean
  setOpenRegisterModal: Dispatch<SetStateAction<boolean>>

  openForgotPassModal: boolean
  setOpenForgotPassModal: Dispatch<SetStateAction<boolean>>
}

export const UserContextProvider = createContext<UserContextInterface>(
  {} as UserContextInterface
)

const UserContext = ({ children }: UserContextProviderProps) => {
  const [openLoginModal, setOpenLoginModal] = useState(false)
  const [openRegisterModal, setOpenRegisterModal] = useState(false)
  const [openForgotPassModal, setOpenForgotPassModal] = useState(false)

  return (
    <UserContextProvider.Provider
      value={{
        openLoginModal,
        openRegisterModal,
        openForgotPassModal,
        setOpenForgotPassModal,
        setOpenRegisterModal,
        setOpenLoginModal,
      }}
    >
      {children}
    </UserContextProvider.Provider>
  )
}

export default UserContext
