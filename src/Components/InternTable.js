import Table from "./common/table";


const InternTable = ({ interns, onReward}) => {
    const columns = [
      {
        path: "name",
        label: "Fullname",
      },
      { path: "track", label: "Track" },
      // { path: "attendance", label: "Attendance" },
      // { path: "task1", label: "Task (1)" },
      // { path: "task2", label: "Task (2)" },
      // { path: "task3", label: "Task (3)" },
      // { path: "task4", label: "Task (4)" },
      // { path: "task5", label: "Task (5)" },
      {
        key: "delete",
        content: (intern) => (
          <button
            onClick={() => onReward(intern)}
          >
            Reward
          </button>
        ),
      },
    ];
    return <Table columns={columns} data={interns}/>;
  };
  
  export default InternTable;