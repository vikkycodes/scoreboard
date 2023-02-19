const TableHeader = ({ columns, onSort }) => {
  return (
    <thead>
      <tr>
        {columns?.map((column, i) => (
          <th key={i} onClick={() => onSort(column.path)}>
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
