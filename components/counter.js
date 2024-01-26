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
		<h1 className="text-xl lg:text-4xl font-bold"
			ref={ nodeRef }
		/>
	);
};

export default Counter;
