import React, { useState, useEffect, useRef } from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

export default function ProjectList({ role }) {
  const gridRef = useRef();

  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("projectlist")) || [];
    setRowData(data);
  }, []);

  const columnDefs = [
    { field: "projectName", editable: () => role === "admin" },
    { field: "customerName", editable: () => role === "admin" },
    { field: "location", editable: () => role === "admin" },
    { field: "phoneNumber", editable: () => role === "admin" },
    { field: "mailId", editable: () => role === "admin" },
    { field: "companyName", editable: () => role === "admin" },
    { field: "orderDate", editable: () => role === "admin" },
    { field: "coastingDate", editable: () => role === "admin" },
    { field: "coastingAssignTo", editable: () => role === "admin" },
    { field: "status", editable: () => role === "admin" },
    { field: "remark", editable: () => role === "admin" },
  ];

  const exportExcel = () => {
    gridRef.current.api.exportDataAsExcel();
  };

  return (
    <div>
      <h2>Project List</h2>

      {/* Export Button */}
      <button onClick={exportExcel}>Download Excel</button>

      {/* Excel-like Grid */}
      <div className="ag-theme-alpine" style={{ height: 500 }}>
        <AgGridReact
          ref={gridRef}
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={{
            flex: 1,
            sortable: true,
            filter: true,
            resizable: true,
          }}
        />
      </div>
    </div>
  );
}