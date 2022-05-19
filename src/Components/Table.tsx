import { useMemo, useState } from "react";
import { useTable } from "react-table";
import { COLUMNS } from "./Columns";
import MOCK_DATA from "./MOCK_DATA.json";
import { useCountries } from "../Hooks/UseCountries";
import LoadingSpinner from "../Components/Loader";
import "./Table.css";

export default function BasicTable() {
  const { error, loading, data } = useCountries();

  const columns = useMemo(() => COLUMNS, []);
  const TableData = useMemo(
    () => (loading ? [] : data.countries),
    [data, loading]
  );

  const tableInstance = useTable({
    columns,
    data: TableData,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  if (loading) {
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <div>Something went wrong!</div>;
  }

  return (
    <div className="App">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
