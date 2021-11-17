export function test() {
	return null;
}

export const hasNotch = () => {
	/**
	 * For storybook test
	 */
	const storybook = window.location !== window.parent.location;
	const iPhone = /iPhone/.test(navigator.userAgent) && !window.MSStream;
	const aspect = window.screen.width / window.screen.height;
	const aspectFrame = window.innerWidth / window.innerHeight;
	return (
		(iPhone && aspect.toFixed(3) === '0.462') ||
		(storybook && aspectFrame.toFixed(3) === '0.462')
	);
};

export const mergeRefs = (refs) => {
	return (value) => {
		refs.forEach((ref) => {
			if (typeof ref === 'function') {
				ref(value);
			} else if (ref != null) {
				ref.current = value;
			}
		});
	};
};

export const randomColor = () => {
	const colors = ['primary', 'secondary', 'success', 'info', 'warning', 'danger'];

	const color = Math.floor(Math.random() * colors.length);

	return colors[color];
};

export const priceFormat = (price) => {
	return price.toLocaleString('en-US', {
		style: 'currency',
		currency: 'USD',
	});
};

export const average = (array) => array.reduce((a, b) => a + b) / array.length;

export const percent = (value1, value2) => ((value1 / value2 - 1) * 100).toFixed(2);

export const getFirstLetter = (text, letterCount = 2) =>
	text
		.toUpperCase()
		.match(/\b(\w)/g)
		.join('')
		.substring(0, letterCount);
