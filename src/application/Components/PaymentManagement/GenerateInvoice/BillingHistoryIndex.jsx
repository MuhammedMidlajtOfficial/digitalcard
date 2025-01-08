import React, { useEffect, useState } from "react";
import BillingHistoryCards from "./BillingHistoryCards";
import { BillingHistoryTable } from "./BillingHistoryTable";
import {axiosInstance} from "../../../../AxiosConfig";

const BillingHistoryIndex = () => {
  
  const [invoiceData, setInvoiceData] = useState([
    // {
    //   key: "1",
    //   invoice: "#0010",
    //   date: "09/12/2024",
    //   username: "Siddu M",
    //   email: "black@company.com",
    //   contact: "1234567890",
    //   status: "Active",
    // },
    // {
    //   key: "2",
    //   invoice: "#0010",
    //   date: "09/12/2024",
    //   username: "Siddu M",
    //   email: "black@company.com",
    //   contact: "1234567890",
    //   status: "InActive",
    // },
    // {
    //   key: "3",
    //   invoice: "#0010",
    //   date: "09/12/2024",
    //   username: "Siddu M",
    //   email: "black@company.com",
    //   contact: "1234567890",
    //   status: "Active",
    // },
  ]);
  const [query, setQuery] = useState("page=1&limit=10");
  

  useEffect(() => {
    axiosInstance.get(`invoice/getInvoices?${query}`)
    .then((response)=>{
      setInvoiceData(response.data.invoices)
    })
    .catch((error) => {
      console.error("Error fetching invoice data:", error);
    });
   
  }, [query]);

  const totalInvoices = invoiceData.length;
  const activeInvoices = invoiceData.filter((invoice) => invoice.status === 'active').length;
  const inactiveInvoices = invoiceData.filter((invoice) => invoice.status === 'inactive').length;
  const deletedInvoices = invoiceData.filter((invoice) => invoice.status === 'deleted').length;

  return (
    <div className="view-orders-static">
      <div className="row">
        <BillingHistoryCards 
          total={totalInvoices} 
          active={activeInvoices} 
          inactive={inactiveInvoices} 
          deleted={deletedInvoices} 
        />
        <BillingHistoryTable invoiceData={invoiceData} setQuery={setQuery}/>
      </div>
    </div>
  );
};

export default BillingHistoryIndex;
