import * as NavMenu from "@radix-ui/react-navigation-menu";
import { useState } from "react";
import himaNav from "/himaNav.jpeg";
const Nav = () => {
	const [hoveredProject, setHoveredProject] = useState("HIMA High School");
	return (
		<NavMenu.Root className="flex justify-end p-4 px-8">
			<NavMenu.List className="flex gap-4">
				<NavMenu.Item className="">
					<NavMenu.Trigger className="relative w-full ">
						<button>Projects</button>
					</NavMenu.Trigger>
					<NavMenu.Content className="absolute mt-2 flex h-64 w-full items-center rounded bg-slate-50 p-4 text-slate-950">
						<div className="grid grid-cols-2 gap-4">
							<div>
								<img
									src={
										// (hoveredProject == "HIMA High School" && himaNav) ||
										"https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
									}
									alt="Image for Project"
									className="rounded"
								/>
							</div>
							<div>
								<ul className="flex h-full flex-col justify-between py-4">
									<li
										onMouseEnter={() => {
											setHoveredProject("HIMA High School");
										}}
									>
										HIMA High School
									</li>
									<li
										onMouseEnter={() => {
											setHoveredProject("Immortui Ursus");
										}}
									>
										Immortui Ursus
									</li>
									<li
										onMouseEnter={() => {
											setHoveredProject("Last Zodiac");
										}}
									>
										Last Zodiac
									</li>
								</ul>
							</div>
						</div>
					</NavMenu.Content>
				</NavMenu.Item>
				/
				<NavMenu.Item className="">
					<NavMenu.Trigger className="relative w-full ">
						<button>Education</button>
					</NavMenu.Trigger>
					<NavMenu.Content className="absolute bg-slate-50 p-4 text-slate-950">
						<NavMenu.Link href="/" className="">
							Test
						</NavMenu.Link>
					</NavMenu.Content>
				</NavMenu.Item>
				/
				<NavMenu.Item className="">
					<NavMenu.Trigger className="relative w-full ">
						<button>Work</button>
					</NavMenu.Trigger>
					<NavMenu.Content className="absolute bg-slate-50 p-4 text-slate-950">
						<NavMenu.Link href="/" className="">
							Test
						</NavMenu.Link>
					</NavMenu.Content>
				</NavMenu.Item>
				/
				<NavMenu.Item className="">
					<NavMenu.Trigger className="relative w-full ">
						<button>Socials</button>
					</NavMenu.Trigger>
					<NavMenu.Content className="absolute bg-slate-50 p-4 text-slate-950">
						<NavMenu.Link href="/" className="">
							Test
						</NavMenu.Link>
					</NavMenu.Content>
				</NavMenu.Item>
			</NavMenu.List>
		</NavMenu.Root>
	);
};
export default Nav;
