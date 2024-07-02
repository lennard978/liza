import { Sidebar } from "./Sidebar";
// import { FiGithub } from "react-icons/fi";

export const Navigation = () => {
	return (
		<nav className="z-20 flex fixed w-screen text-white items-center justify-between px-5 py-2 border-b-2 border-zinc-800 border-none bg-zinc-900">
			<div className="flex items-center w-screen">
				<div className="">
					<Sidebar />
				</div>
				<div className="flex grow items-center justify-center">
					<p className=" font-Great text-3xl">Tattoo Liza</p>
				</div>
			</div>
			{/* <a
				className="flex items-center gap-2 px-4 py-2 text-orange-400 bg-orange-700/20 rounded-xl"
				href=""
			>
				<FiGithub className="text-lg" />
				Source Code
			</a> */}
		</nav>
	);
};
