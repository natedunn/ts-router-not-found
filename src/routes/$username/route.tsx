import { createFileRoute, notFound, Outlet } from "@tanstack/react-router";
import { fetchUserData, USERS } from "../../config/users";

export const Route = createFileRoute("/$username")({
	component: RouteComponent,
	loader: async ({ params }) => {
		const data = await fetchUserData(params.username);

		if (!data) {
			notFound({
				throw: true,
			});
		}

		return data!;
	},
	notFoundComponent: () => {
		return (
			<div>
				<p className="text-red-500">
					ERROR COMPONENT FOR THE <span className="text-2xl">$USERNAME</span>{" "}
					LAYOUT
				</p>
			</div>
		);
	},
});

function RouteComponent() {
	const { username } = Route.useLoaderData();

	return (
		<div>
			<div className="border-b py-4 px-4 bg-white/5">
				Layout section for: {username}
			</div>
			<div className="px-4 py-2">
				<Outlet />
			</div>
		</div>
	);
}
