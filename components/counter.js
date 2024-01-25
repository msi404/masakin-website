import React, { useEffect, useRef } from "react";
import { animate, inView } from "framer-motion";

const Counter = ( { from, to, duration = 6 } ) =>
{
	const nodeRef = useRef();
	useEffect( () =>
	{
		const node = nodeRef.current;
		inView( node, () =>
		{
			animate( from, to, {
				duration: duration,
				onUpdate ( value )
				{
					node.textContent = `+${ Math.round( value ) }`;
				},
			} );
		} );
	}, [ from, to ] );

	return (
		<h1 className="text-4xl md:text-5xl font-bold before:absolute before:h-[4px] before:top-14 md:before:top-16 before:w-full before:bg-yellow-600"
			ref={ nodeRef }
		/>
	);
};

export default Counter;
