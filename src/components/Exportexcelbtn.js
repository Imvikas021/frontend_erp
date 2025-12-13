import React from 'react';
import * as XLSX from 'xlsx';
import {saveAs} from 'file-saver';

function Exportexcelbtn({data, fileName = "ExportData"}) {

    const handleExport =() =>{
    if(!data || data.length === 0){
        alert("No data available to export");
    return;
    }
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = {Sheets: {"Sheet1" : worksheet}, SheetNames: ["Sheet1"]};

    const excelBuffer = XLSX.write(workbook, {
        bookType: "xlsx",
        type: "array",
    });
    const blob = new Blob([excelBuffer],{
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
    });

    saveAs(blob, `${fileName}.xlsx`);
};

  return (
    <button onClick={handleExport}
    style={{
        background: "#149a9b",
        color:"#fff",
        padding:"4px 8px",
        borderRadius: "6px",
        alignItems: "end",
        marginLeft:"auto",
        marginRight:"0px",
        borderColor:"transparent",
    }}
    >
        EXPORT
    </button>
  );
};

export default Exportexcelbtn