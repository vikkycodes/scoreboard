import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import styled from "styled-components";


const SytledTable = styled.table`
/* width: 100%; */
  max-width: 400px;
  all: unset;
  /* min-width: 300px; */
`

const Table = ({columns, data}) => {
  return (
    <SytledTable>
      <TableHeader columns={columns} />
      <TableBody columns={columns} data={data} />
    </SytledTable>
  );
};

export default Table;
