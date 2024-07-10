import { randomId } from "@mui/x-data-grid-generator";
import * as React from "react";
import DataTable from "./DataTable";
import { GridToolbar } from "@mui/x-data-grid";
import CustomToolbar from "./CustomToolbar";

export const division = [
  {
    id: randomId(),
    countryName: "Bangladesh",
    divisionName: "Mymensingh",
    divisionNameBn: "ময়মনসিংহ",
    description: "Mymensingh",
  },
  {
    id: randomId(),

    countryName: "Bangladesh",
    divisionName: "Rangpur",
    divisionNameBn: "রংপুর",
    description: "Rangpur",
  },
  {
    id: randomId(),

    countryName: "Bangladesh",
    divisionName: "Sylhet",
    divisionNameBn: "সিলেট",
    description: "Sylhet",
  },
  {
    id: randomId(),

    countryName: "Bangladesh",
    divisionName: "Rajshahi",
    divisionNameBn: "রাজশাহী",
    description: "Rajshahi",
  },
  {
    id: randomId(),

    countryName: "Bangladesh",
    divisionName: "Khulna",
    divisionNameBn: "খুলনা",
    description: "Khulna",
  },
  {
    id: randomId(),

    countryName: "Bangladesh",
    divisionName: "Chattogram",
    divisionNameBn: "চট্টগ্রাম",
    description: "Chattogram",
  },
  {
    id: randomId(),

    countryName: "Bangladesh",
    divisionName: "Barishal",
    divisionNameBn: "বরিশাল",
    description: "Barishal",
  },
  {
    id: randomId(),

    countryName: "Bangladesh",
    divisionName: "Dhaka",
    divisionNameBn: "ঢাকা",
    description: "Dhaka",
  },
  {
    id: randomId(),

    countryName: "Bangladesh",
    divisionName: "Chattogram",
    divisionNameBn: "চট্টগ্রাম",
    description: "Chattogram",
  },
  {
    id: randomId(),

    countryName: "Bangladesh",
    divisionName: "Barishal",
    divisionNameBn: "বরিশাল",
    description: "Barishal",
  },
  {
    id: randomId(),

    countryName: "Bangladesh",
    divisionName: "Khulna",
    divisionNameBn: "খুলনা",
    description: "Khulna",
  },
  {
    id: randomId(),

    countryName: "Bangladesh",
    divisionName: "Chattogram",
    divisionNameBn: "চট্টগ্রাম",
    description: "Chattogram",
  },
  {
    id: randomId(),

    countryName: "Bangladesh",
    divisionName: "Dhaka",
    divisionNameBn: "ঢাকা",
    description: "Dhaka",
  },
];
const columns = [
  {
    field: "countryName",
    headerName: "Country Name",
    width: 200,
    editable: true,
  },
  {
    field: "divisionName",
    headerName: "Division Name",
    width: 200,
    align: "left",
    headerAlign: "left",
    editable: true,
    renderActionsCell: (row) => <p className="px-2">{row?.divisionName}</p>,
  },
  {
    field: "divisionNameBn",
    headerName: "Division Name Bn",
    width: 200,
    editable: true,
  },
];

export default function Data() {
  return <DataTable columns={columns} initialRows={division || []} toolbar={CustomToolbar } />;
}
