import { createFileRoute, Link } from "@tanstack/react-router";
import * as React from "react";
import { USERS } from "../config/users";

export const Route = createFileRoute("/")({
	component: Home,
});

function Home() {
	return (
		<div>
			<h1 className="text-2xl font-bold my-4">A list of users</h1>
			<ul className="p-2 pl-6 ml-4 list-disc space-y-4">
				{USERS.map(({ username, project }) => (
					<li key={username}>
						<Link to="/$username" params={{ username }}>
							{username}'s profile
						</Link>
						<ul className="pl-6 ml-4 list-disc">
							<li>
								<Link
									to="/$username/$project"
									params={{
										username,
										project,
									}}
								>
									{project}
								</Link>
							</li>
							<li>
								<Link
									to="/$username/$project"
									params={{
										username,
										project: "nonexistent_project",
									}}
								>
									nonexistent_project
								</Link>
							</li>
						</ul>
					</li>
				))}
				<li>
					<Link to="/$username" params={{ username: "nonexistent_username" }}>
						nonexistent_username
					</Link>
				</li>
			</ul>
		</div>
	);
}
