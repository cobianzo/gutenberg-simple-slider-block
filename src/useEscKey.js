import { useEffect } from '@wordpress/element';
export default function useEscKey( callbackfn ) {
	useEffect( () => {
		const keyDownHandler = ( event ) => {
			console.log( 'User pressed: ', event.key );

			if ( event.key === 'Escape' ) {
				event.preventDefault();

				// 👇️ your logic here
				callbackfn();
			}
		};

		document.addEventListener( 'keydown', keyDownHandler );

		// 👇️ clean up event listener
		return () => {
			document.removeEventListener( 'keydown', keyDownHandler );
		};
	}, [] );
}
