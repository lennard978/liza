import { data } from "./data";
import { motion } from "framer-motion";

const Card = ({ setSelected, item }) => {
	return (
		<div className=" w-full mb-4 inline-block">
			<motion.img
				whileHover={{
					scale: 1.025,
					transition: {
						duration: 0.2,
					},
				}}
				whileTap={{
					scale: 0.95,
				}}
				onClick={() => setSelected(item)}
				layoutId={`card-${item.id}`}
				className=" w-full rounded-md shadow-xl cursor-pointer"
				src={item.image}
				alt=""
			/>
		</div>
	);
};

export const List = ({ setSelected }) => {
	return (
		<div className="p-4">
			<h1 className=" font-Great  text-black text-center pb-4 text-3xl">
				Gallery
			</h1>{" "}
			<div className=" columns-2 gap-4 md:columns-3 lg:columns-4">
				{data.map(item => (
					<Card key={item.id} setSelected={setSelected} item={item} />
				))}
			</div>
		</div>
	);
};
