import { useState, createContext, ReactNode, useContext, Dispatch } from 'react'

type PortalProps = Element | ReactNode

type PortalContextData = {
  isOpen: boolean
  content?: PortalProps
  openPortal: Dispatch<PortalProps>
  closePortal: () => void
}

export const PortalDefaultValues = {
  isOpen: false,
  content: null,
  openPortal: () => void 0,
  closePortal: () => void 0
}

export type PortalProviderProps = {
  children: ReactNode
}

export const PortalContext =
  createContext<PortalContextData>(PortalDefaultValues)

const PortalProvider = ({ children }: PortalProviderProps) => {
  const [isOpen, setIsOpen] = useState(PortalDefaultValues.isOpen)
  const [content, setContent] = useState<PortalProps>(
    PortalDefaultValues.content
  )

  const openPortal = (el: PortalProps) => {
    if (el) {
      setContent(el)
      setIsOpen(true)
    }
  }

  const closePortal = () => {
    setContent(null)
    setIsOpen(false)
  }

  return (
    <PortalContext.Provider
      value={{ isOpen, content, openPortal, closePortal }}
    >
      {children}
    </PortalContext.Provider>
  )
}

const usePortal = () => useContext(PortalContext)

export { PortalProvider, usePortal }
