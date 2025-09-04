import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/$username/")({
	component: RouteComponent,
	loader: async ({ params }) => {
		return {};
	},
});

function RouteComponent() {
	const { username } = Route.useParams();

	return <div>Content section for: {username}</div>;
}
