import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const defaultAnimation = {
	hidden: { opacity: 0, x: -200 },
	visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};
export const AnimatedText = ({ text }) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { amount: 0.5, once: false });
	const textArray = [...text];

	return (
		<motion.span
			initial="hidden"
			animate={isInView ? "visible" : "hidden"}
			transition={{ staggerChildren: 0.1 }}
			ref={ref}
		>
			{textArray.map((line, id) => (
				<span key={id}>
					{line.split("").map((word, index) => (
						<span key={index} className="inline-block">
							{word.split("").map((char, index) => (
								<motion.span
									key={index}
									className="block"
									variants={defaultAnimation}
								>
									{char}
								</motion.span>
							))}
							<span className=" inline-block">&nbsp;</span>
						</span>
					))}
				</span>
			))}
		</motion.span>
	);
};
