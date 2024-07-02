import { motion } from "framer-motion";
export const Modal = ({ selected, setSelected }) => {
	if (!selected) {
		return <></>;
	}
	return (
		<div
			onClick={() => setSelected(null)}
			className=" fixed inset-0 bg-black/50 z-10 cursor-pointer overflow-y-scroll"
		>
			<div
				onClick={e => e.stopPropagation}
				className="flex flex-col justify-center items-center h-full w-full max-w[700px] mx-auto my-8 px-8 cursor-default"
			>
				<motion.div
					layoutId={`card-${selected.id}`}
					className=" flex items-center justify-center h-full"
				>
					<img src={selected.image} />
				</motion.div>
			</div>
		</div>
	);
};
