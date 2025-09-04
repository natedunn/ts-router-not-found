export const USERS = [
	{
		username: "user_1",
		project: "project_1",
	},
	{
		username: "user_2",
		project: "project_2",
	},
	{
		username: "user_3",
		project: "project_3",
	},
];

export const PROJECTS = [
	{
		slug: "project_1",
		description:
			"Occaecat labore et culpa laboris enim tempor aliqua veniam est est cillum aliquip voluptate.",
	},
	{
		slug: "project_2",
		description:
			"Enim sint reprehenderit mollit consectetur est excepteur nulla adipisicing.",
	},
	{
		slug: "project_3",
		description: "Incididunt reprehenderit dolor pariatur.",
	},
];

export const fetchUserData = async (username: string) => {
	// fake delay
	await new Promise((resolve) => setTimeout(resolve, 1000));
	const data = USERS.find((user) => user.username === username);

	return data ?? null;
};

export const fetchProjectData = async (slug: string) => {
	// fake delay
	await new Promise((resolve) => setTimeout(resolve, 1000));
	const data = PROJECTS.find((project) => project.slug === slug);

	return data ?? null;
};
