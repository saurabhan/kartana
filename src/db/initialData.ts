export const initialData = {
  count: 10,
  items: [
    {
      count: 2,
      status: "backlog",
      tasks: [
        {
          id: "MY-3",
          name: "Connect to Slack",
          priority: "medium",
        },
        {
          id: "MY-4",
          name: "Connect GitHub or GitLab",
          priority: "medium",
        },
      ],
    },
    {
      count: 5,
      status: "todo",
      tasks: [
        {
          id: "MY-5",
          name: "Customize Settings",
          assignedTo: {
            name: "John Doe",
          },
          priority: "medium",
        },
        {
          id: "MY-7",
          name: "Use Projects to organize work for features or releases",
          priority: "low",
        },
        {
          id: "MY-8",
          name: "✨ProTip: Mouse over this issue & press [Space]",
          priority: "low",
        },
        {
          id: "MY-9",
          name: "Customize views with View Options and Filters",
          priority: "low",
        },
        {
          id: "MY-10",
          name: "Next Steps",
          priority: "low",
        },
      ],
    },
    {
      count: 2,
      status: "in-progress",
      tasks: [
        {
          id: "MY-2",
          name: "Try 3 ways to navigate Linear: Command line, keyboard or mouse",
          priority: "medium",
        },
        {
          id: "MY-6",
          name: "Use Cycles to focus work over n–weeks",
          priority: "low",
        },
      ],
    },
    {
      count: 1,
      status: "done",
      tasks: [
        {
          id: "MY-1",
          name: "Welcome to Linear 👋",
          priority: "high",
        },
      ],
    },
  ],
};
