import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

const defaultRotate = {
	hidden: { opacity: 0, transition: { duration: 0.3 }, rotate: 0 },
	visible: { opacity: 1, transition: { duration: 0.3 }, rotate: 360 },
};

export const Accordion = ({ i, expanded, setExpanded, title, description }) => {
	const isOpen = i === expanded;
	const [rot, setRot] = useState(false);

	const combine = () => {
		setExpanded(isOpen ? false : i);
		setRot(isOpen ? "hidden" : "visible");
	};
	return (
		<div className=" flex flex-col justify-between px-2 py-4 cursor-pointer border-[1px] rounded-md border-black mx-2 mb-2">
			<motion.div initial={false} onClick={combine}>
				<div className=" flex">
					<div className=" justify-center flex items-center mx-2 ">
						<motion.span variants={defaultRotate} animate={rot}>
							<FaPlus color="black" />
						</motion.span>
					</div>
					<h1 className="uppercase">{title}</h1>
				</div>
			</motion.div>
			<AnimatePresence initial={false}>
				{isOpen && (
					<motion.section
						initial="collapsed"
						animate="open"
						exit="collapsed"
						variants={{
							open: { opacity: 1, height: "auto" },
							collapsed: { opacity: 0, height: 0 },
						}}
						transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
						// style={{ backgroundColor: "white", padding: "0 2rem" }}
					>
						<h1 className="py-4 px-2">{description}</h1>
					</motion.section>
				)}
			</AnimatePresence>
		</div>
	);
};
