import { createFileRoute, notFound, Outlet } from "@tanstack/react-router";
import { fetchProjectData, USERS } from "../../../config/users";

export const Route = createFileRoute("/$username/$project")({
	component: RouteComponent,
	loader: async ({ params }) => {
		const data = await fetchProjectData(params.project);

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
					ERROR COMPONENT FOR THE <span className="text-2xl">$PROJECT</span>{" "}
					LAYOUT
				</p>
			</div>
		);
	},
});

function RouteComponent() {
	return (
		<div>
			<Outlet />
		</div>
	);
}
