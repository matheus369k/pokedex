import { useEffect, useState } from 'react';

export function useScroll() {
	const [isInitialScroll, setIsInitialScroll] = useState(true);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		document.body.addEventListener('scroll', () => {
			const heightScroll = document.body.scrollTop;

			if (heightScroll > 100 && isInitialScroll) setIsInitialScroll(false);
			if (heightScroll < 100 && isInitialScroll) setIsInitialScroll(true);
		});
	}, []);

	function handleBackScrollToInitialPosition() {
		document.body.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	}

	return {
		handleBackScrollToInitialPosition,
		isInitialScroll,
	};
}
