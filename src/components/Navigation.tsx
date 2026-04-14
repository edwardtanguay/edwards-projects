"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
	Home,
	Info,
	Menu,
	CalendarFold,
	CalendarClock,
	Cog,
	SquareCheck,
	SquareParking,
	Star,
	ArrowRightLeft,
	Sprout,
	User,
	X,
	Monitor,
	Database,
} from "lucide-react";

interface NavItem {
	label: string;
	href: string;
	icon: React.ReactNode;
}

const navItems: NavItem[] = [
	{ label: "Home", href: "/", icon: <Home size={20} /> },
	{ label: "Premier Projects", href: "/premier-projects", icon: <Star size={20} /> },
	{ label: "Showcase Projects", href: "/showcase-projects", icon: <Monitor size={20} /> },
	{ label: "Datapod Projects", href: "/datapod-projects", icon: <Database size={20} /> },
	{ label: "Transitional Projects", href: "/transitional-projects", icon: <ArrowRightLeft size={20} /> },
	{ label: "Incubator Projects", href: "/incubator-projects", icon: <Sprout size={20} /> },
	{ label: "Legacy Projects", href: "/legacy-projects", icon: <CalendarClock size={20} /> },
	{ label: "Personal Projects", href: "/personal-projects", icon: <User size={20} /> },
	{ label: "Parked Projects", href: "/parked-projects", icon: <SquareParking size={20} /> },
	{ label: "Current Tasks", href: "/current-tasks", icon: <Cog size={20} /> },
	{ label: "Upcoming Tasks", href: "/upcoming-tasks", icon: <CalendarFold size={20} /> },
	{ label: "Finished Tasks", href: "/finished-tasks", icon: <SquareCheck size={20} /> },
	{ label: "About", href: "/about", icon: <Info size={20} /> },
];

export default function Navigation() {
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();

	const toggleMenu = () => setIsOpen(!isOpen);

	const isActive = (href: string) => {
		return pathname === href ? "bg-gray-800 text-white" : "text-gray-400";
	};

	return (
		<>
			{/* Mobile menu button */}
			<button
				onClick={toggleMenu}
				className="fixed top-6 right-6 z-50 md:hidden bg-gray-800 p-2 rounded-lg border border-gray-700 hover:bg-gray-700 transition"
			>
				{isOpen ? <X size={24} /> : <Menu size={24} />}
			</button>

			{/* Overlay */}
			{isOpen && (
				<div
					className="fixed inset-0 bg-black/20 md:hidden z-30"
					onClick={() => setIsOpen(false)}
				/>
			)}

			{/* Sidebar Navigation */}
			<aside
				className={`fixed md:static inset-y-0 right-0 md:left-0 z-40 w-64 bg-gray-900 border-r border-gray-800 transition-transform duration-300 ease-out md:translate-x-0 ${isOpen ? "translate-x-0" : "translate-x-full"
					} flex flex-col pt-16 md:pt-0`}
			>
				<nav className="flex-1 overflow-y-auto px-4 py-8 space-y-2">
					{navItems.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							onClick={() => setIsOpen(false)}
							className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition hover:bg-gray-800 ${isActive(
								item.href
							)}`}
						>
							{item.icon}
							<span>{item.label}</span>
						</Link>
					))}
				</nav>

				{/* Footer */}
				<div className="border-t border-gray-800 px-4 py-4 text-xs text-gray-500">
					<p>Made by <a href="https://tanguay.info" className="underline" target="_blank">Edward Tanguay</a></p>
				</div>
			</aside>
		</>
	);
}
