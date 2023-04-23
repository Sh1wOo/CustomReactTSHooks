import { RefObject } from "react"
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll"
import { Icon } from "@iconify/react/dist/offline"
import closeRounded from "@iconify/icons-material-symbols/close-rounded"

import "./modal.style.css"

interface ModalProps {
	text?: string
	modalRef?: RefObject<HTMLDivElement>
	setModalOpen: (state: boolean) => void
}

const Modal = ({ text, modalRef, setModalOpen }: ModalProps) => {
	useLockBodyScroll()

	const closeModal = () => setModalOpen(false)

	return (
		<div className='modal-wrapper'>
			<div
				ref={modalRef}
				className='first_moadal_window'
			>
				<Icon
					className='closeFirstModalWindow'
					onClick={closeModal}
					icon={closeRounded}
				/>
				{text}
			</div>
		</div>
	)
}

export default Modal
