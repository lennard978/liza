import Images from "../images/Images";
import { motion } from "framer-motion";

const list = [
	{ category: "arm", image: Images.image1 },
	{ category: "leg", image: Images.image2 },
	{ category: "shoulder", image: Images.image3 },
	{ category: "shoulder", image: Images.image4 },
	{ category: "shoulder", image: Images.image5 },
	{ category: "shoulder", image: Images.image6 },
];

export const Gallery = ({ selected, setSelected }) => {
	// if (selected) {
	// 	return <></>;
	// }
	return (
		<div>
			<div className="flex items-center justify-center py-4 md:py-8 flex-wrap text-black">
				<h1 className="text-zinc-900 text-center p-4 text-4xl">
					Gallery
				</h1>
			</div>
			<div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 p-4">
				{list.map((item, id) => (
					<img className=" rounded-md" key={id} src={item.image} alt={item} />
				))}
			</div>
		</div>
	);
};
