import { useState } from "react";
import { Accordion } from "./Accordion";

export const FAQ = () => {
	const [expanded, setExpanded] = useState(false);

	const accordionsIds = [
		{
			title: "What about the size of tattoo ?",
			description:
				"  Tattoo should fit exactly your body proportions and features. We can easily choose between couple of sizes during the appointment.",
		},
		{
			title: "How do I book an appointment ?",
			description:
				"Describe a tattoo you want ( or send a picture if you have). Tell me which approximate size you want ( in cm if applicable), which part of body you want to place it and your availability.",
		},
		{
			title: "How to take care after tattoo ?",
			description:
				"First Day/Night Keep the bandage on for a minimum of 6 hours. On your first night, there’s a chance your tattoo will still bleed. The blood can dry overnight and stick to your clothes or bedding. If this happens, gently take the fabric off. DO NOT force it off or be rough with it. If it still does not come off, wet the area with lukewarm water and gently slide it off.Fresh tattoos sometimes “weep” during the first couple of days, meaning that plasma and ink form a thin moist coating on the skin. This can be DABBED with a clean paper towel. Press the paper towel to the skin and remove. Do not wipe the tattoo or be rough with it. Do not panic when you see the colors of the tattoo on the paper towel, or on your hands as you clean it. This is simply excess ink being secreted from the surface or the skin.To avoid stains, use towels and bedsheets with darker tones and wear dark clothing.",
		},
	];

	return (
		<div>
			<h1 className=" font-Great text-center py-16 text-3xl">- FAQ -</h1>
			<div>
				{accordionsIds.map((item, i) => (
					<Accordion
						key={i}
						i={i}
						expanded={expanded}
						setExpanded={setExpanded}
						title={item.title}
						description={item.description}
					/>
				))}
			</div>
		</div>
	);
};
