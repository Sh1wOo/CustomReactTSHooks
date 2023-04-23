import { RefObject, useCallback, useEffect, useRef, useState } from "react"

function useHover<T extends HTMLElement>(): [RefObject<T>, boolean] {
	const [value, setValue] = useState<boolean>(false)
	const ref: RefObject<T> = useRef<T>(null)

	const handleMouseOver = useCallback(() => setValue(true), [])
	const handleMouseOut = useCallback(() => setValue(false), [])

	useEffect(() => {
		const node = ref.current
		if (node) {
			node.addEventListener("mouseover", handleMouseOver)
			node.addEventListener("mouseout", handleMouseOut)

			return () => {
				node.removeEventListener("mouseover", handleMouseOver)
				node.removeEventListener("mouseout", handleMouseOut)
			}
		}
	}, [ref.current, handleMouseOver, handleMouseOut])

	return [ref, value]
}

export { useHover }
