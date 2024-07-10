export const list = [
  {
    title: "Client details",
    list: [
      { type: "text", placeholder: "First name" },
      { type: "text", placeholder: "Last name" },
      { type: "number", placeholder: "Phone" },
      { type: "text", placeholder: "Email (optional)" },
    ],
  },
  {
    title: "Job details",
    list: [
      { type: "text", placeholder: "Job type" },
      { type: "text", placeholder: "Job course" },
      { type: "text", placeholder: "Job description (optional)" },
    ],
  },
  {
    title: "Service location",
    list: [
      { type: "text", placeholder: "Address" },
      { type: "text", placeholder: "City" },
      { type: "text", placeholder: "State" },
      { type: "number", placeholder: "Zip code" },
      { type: "text", placeholder: "Area" },
    ],
  },
  {
    title: "Scheduled",
    list: [
      { type: "text", placeholder: "Start date" },
      { type: "text", placeholder: "Start time" },
      { type: "text", placeholder: "End time" },
      { type: "text", placeholder: "Test select" },
    ],
  },
];

export const defaultContextData = {
  name: "Name",
};
