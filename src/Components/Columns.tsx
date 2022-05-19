export const COLUMNS = [
  {
    Header: "code",
    accessor: "code",
  },

  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Name",
    accessor: (states) => {
      return states.name;
    },
  },

  {
    Header: "Capital",
    accessor: "capital",
  },
  {
    Header: "Currency",
    accessor: "currency",
  },
  {
    Header: "Phone",
    accessor: "phone",
  },
  {
    Header: "Emoji",
    accessor: "emoji",
  },
  {
    Header: "Native",
    accessor: "native",
  },
  {
    Header: "Continent",
    accessor: (value) => {
      return value.continent.name;
    },
  },

  {
    Header: "Languages",
    accessor: (value) => {
      let array = [];
      value.languages.map((language) => {
        array.push(language.name);
      });
      return array.join(" ");
    },
  },
  {
    Header: "States",
    accessor: (value) => {
      let array = [];
      value.states.map((state) => {
        array.push(state.name);
      });
      return array.join(" ");
    },
  },
  // {
  //   Header: "Europe",
  //   accessor: (value) => {
  //     if (value.continent.name === "Europe") return value.name;
  //   },
  // },
  // {
  //   Header: "South America",
  //   accessor: (value) => {
  //     if (value.continent.name === "South America") return value.name;
  //   },
  // },
  // {
  //   Header: "North America",
  //   accessor: (value) => {
  //     if (value.continent.name === "North America") return value.name;
  //   },
  // },
  // {
  //   Header: "Antartica",
  //   accessor: (value) => {
  //     if (value.continent.name === "Antartica") return value.name;
  //   },
  // },
  // {
  //   Header: "Asia",
  //   accessor: (value) => {
  //     if (value.continent.name === "Asia") return value.name;
  //   },
  // },
  // {
  //   Header: "Africa",
  //   accessor: (value) => {
  //     if (value.continent.name === "Africa") return value.name;
  //   },
  // },
  // {
  //   Header: "Oceania",
  //   accessor: (value) => {
  //     if (value.continent.name === "Oceania") return value.name;
  //   },
  // },
];
