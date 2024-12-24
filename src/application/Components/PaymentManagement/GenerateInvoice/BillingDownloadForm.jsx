import React, { useRef } from "react";
import { Modal, Button } from "antd";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const BillingDownloadForm = ({ isModalVisible, setIsModalVisible,invoice={} }) => {
  const billingCardRef = useRef(null);

  const handleClose = () => {
    setIsModalVisible(false);
  };

  const handleDownloadPDF = async () => {
	const input = billingCardRef.current;
  
	if (!input) {
	  console.error("No input element found for PDF generation");
	  return;
	}
	try {
	  const canvas = await html2canvas(input, { scale: 2 });
	  const imgData = canvas.toDataURL("image/png");
	  const pdf = new jsPDF("p", "mm", "a4");
	  const margin = 10;
	  const imgWidth = 210 - 2 * margin;
	  const pageHeight = 295 - 2 * margin;
	  const imgHeight = (canvas.height * imgWidth) / canvas.width;
	  let heightLeft = imgHeight-pageHeight;
	  let position = margin;
	  pdf.addImage(imgData, "PNG", margin, position, imgWidth, imgHeight);
	  // heightLeft -= pageHeight;
	  while (heightLeft >= 0) {
      position = heightLeft - imgHeight + margin;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", margin, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
	  }
	  pdf.save(invoice.invoiceNumber);
	} catch (error) {
	  console.error("Error generating PDF: ", error);
	}
  };

  //Calculating CGST, SGST and totalAmount
  // const calculateTaxAmounts = (amount) => {
  //   const CGST = amount * 0.09;
  //   const SGST = amount * 0.09;
  //   const totalAmount = amount + CGST + SGST;
  //   return { CGSTAmount: CGST.toFixed(2), SGSTAmount: SGST.toFixed(2), totalAmount: totalAmount.toFixed(2) };
  // };

  // const { CGSTAmount, SGSTAmount, totalAmount } = invoice?.amount ? 
  //   calculateTaxAmounts(Number(invoice?.amount?.$numberDecimal || 0)) : { CGSTAmount: "N/A", SGSTAmount: "N/A", totalAmount: "N/A" };


  return (
    <Modal
      open={isModalVisible}
      onCancel={handleClose}
      footer={null}
      width={600}
      className="billing-delete-modal"
      closable={false}
    >
      <div ref={billingCardRef} className="billing-card">
        <div className="billing-header d-flex justify-content-between">
          <div>
            <h2>Digital business card</h2>
            <h6>Digital business card</h6>
          </div>
          <div className="billing-contact-info d-flex flex-column">
            <h1>+19 8080808080</h1>
            <h3>diskuss@gamil.com</h3>
            <h4>
              TAX ID <span>80808080</span>
            </h4>
            <h5>
              GSTIN <span>12ABCDE1234AAB</span>
            </h5>
          </div>
        </div>
        <div className="billing-body">
          <div className="customer-info">
            <p>
              <span className="label">Customer Name</span>{" "}
              <span className="separator">:</span>
              <span className="value">{invoice?.username || "N/A"}</span>
            </p>
            <p>
              <span className="label">Invoice</span>{" "}
              <span className="separator">:</span>
              <span className="value">{invoice?.invoiceNumber || "N/A"}</span>
            </p>
            <p>
              <span className="label">Plan Type</span>{" "}
              <span className="separator">:</span>
              <span className="value">{invoice?.planName ? `${invoice.planName} Member` : "N/A"}</span>
            </p>
            <p>
              <span className="label">Currency</span>{" "}
              <span className="separator">:</span>
              <span className="value">INR</span>
            </p>
            <p>
              <span className="label">Issue Date</span>{" "}
              <span className="separator">:</span>
              <span className="value">{invoice?.paymentDate ? invoice.paymentDate.split('T')[0] : "N/A"}</span>
            </p>
          </div>
          <div className="billing-table">
            <div className="table-header">
              <p>Description</p>
              <p>Total (INR)</p>
            </div>
            <div className="table-row">
              <p style={{fontSize:"12px", color:"var(--text-secondary-color)"}}>Digital business card Gold member</p>
              <p style={{fontSize:"12px"}}>{invoice?.amount?.$numberDecimal ? invoice?.amount?.$numberDecimal : "N/A"}</p>
            </div>
            <div className="table-row" style={{border:"none"}}>
              <p className="table-row-gst">CGST</p>
              <p className="table-row-gst">N/A</p>
            </div>
            <div className="table-row">
              <p className="table-row-gst">SGST</p>
              <p className="table-row-gst">N/A</p>
            </div>
            <div className="table-row total-row">
              <p>Total</p>
              <p>{invoice?.amount?.$numberDecimal ? `₹${invoice?.amount?.$numberDecimal}` : "N/A"}</p>
            </div>
          </div>
        </div>
        <div className="billing-footer">
          <div className="signature">
            <p>____________________</p>
            <p>Authorized Signatory</p>
            <p>
              <small>Note: GST will be paid by me, Jay Jankaram</small>
            </p>
          </div>
        </div>
		    <p className="billing-authorization mt-4">Diskuss ®</p>
        <br />
      </div>
      <div className="modal-actions">
        <Button onClick={handleClose} style={{ marginRight: "10px" }}>
          Cancel
        </Button>
        <Button type="primary" onClick={handleDownloadPDF}>
          Download
        </Button>
      </div>
    </Modal>
  );
};
