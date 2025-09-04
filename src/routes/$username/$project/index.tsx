import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/$username/$project/")({
	component: RouteComponent,
});

function RouteComponent() {
	const { username, project } = Route.useParams();

	return (
		<div>
			<h1>
				Project page for @{username}/{project}
			</h1>
		</div>
	);
}
