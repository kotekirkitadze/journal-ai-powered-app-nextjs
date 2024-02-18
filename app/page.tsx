import Link from "next/link";
export default function Home() {
	return (
		<div className="w-screen h-screen flex bg-black justify-center items-center text-white">
			<div className="w-full max-w-[600px] mx-auto">
				<h1 className="text-6xl mb-4">The Journal App</h1>
				<p className="text-2xl text-white/60">Track your mood</p>
				<div>
					<Link href="/journal">
						<button className="bg-blue-600 p-4 py-2 rounded-lg text-xl">
							Get Started
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
