import { AnimatedText } from "../components/AnimatedText";

export const Home = () => {
	return (
		<div className=" bg-header h-screen bg-cover bg-fixed bg-center flex justify-center items-center text-white font-mono">
			<div className=" flex flex-col text-center mt-14">
				<p className=" text-6xl px-4 font-Great">
					<AnimatedText text="Tattoo Liza" />
				</p>
			</div>
		</div>
	);
};
