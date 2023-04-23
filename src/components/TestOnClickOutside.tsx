import { useState, useRef, useCallback } from "react"
import { useOnClickOutside } from "../hooks/useOnClickOutside"
import { Button } from "../ui/Button/Button"
import Modal from "./modals/Modal"

const TestOnClickOutside = () => {
	// Create a ref that we add to the element for which we want to detect outside clicks
	const ref = useRef<HTMLDivElement>(null)
	// State for our modal
	const [isModalOpen, setModalOpen] = useState<boolean>(false)
	
	
	// Call hook passing in the ref and a function to call on outside click
	useOnClickOutside(
		ref,
		useCallback(() => setModalOpen(false), [])
	)

	return (
		<>
			{isModalOpen ? (
				<Modal setModalOpen={setModalOpen} modalRef={ref} text="👋 Привет, это модальное окно. Нажми вне меня или на крестик что бы меня закртыть 😘."/>
			) : (
				<Button
					style={{ margin: "50px" }}
					type='primary'
					onClick={() => setModalOpen(true)}
				>
					Открыть модальное окно
				</Button>
			)}
		</>
	)
}

export default TestOnClickOutside
