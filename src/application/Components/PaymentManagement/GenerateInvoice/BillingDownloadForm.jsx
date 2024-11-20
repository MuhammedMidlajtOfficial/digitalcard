import React, { useRef } from "react";
import { Modal, Button } from "antd";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const BillingDownloadForm = ({ isModalVisible, setIsModalVisible }) => {
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
	  let heightLeft = imgHeight;
	  let position = margin;
	  pdf.addImage(imgData, "PNG", margin, position, imgWidth, imgHeight);
	  heightLeft -= pageHeight;
	  while (heightLeft >= 0) {
		position = heightLeft - imgHeight + margin;
		pdf.addPage();
		pdf.addImage(imgData, "PNG", margin, position, imgWidth, imgHeight);
		heightLeft -= pageHeight;
	  }
	  pdf.save("billing_form.pdf");
	} catch (error) {
	  console.error("Error generating PDF: ", error);
	}
  };
  

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
              <span className="value">Annette Black</span>
            </p>
            <p>
              <span className="label">Invoice</span>{" "}
              <span className="separator">:</span>
              <span className="value">INV-2024-0021</span>
            </p>
            <p>
              <span className="label">Plan Type</span>{" "}
              <span className="separator">:</span>
              <span className="value">Gold Member</span>
            </p>
            <p>
              <span className="label">Currency</span>{" "}
              <span className="separator">:</span>
              <span className="value">USD</span>
            </p>
            <p>
              <span className="label">Issue Date</span>{" "}
              <span className="separator">:</span>
              <span className="value">09/12/2024</span>
            </p>
          </div>
          <div className="billing-table">
            <div className="table-header">
              <p>Description</p>
              <p>Total (INR)</p>
            </div>
            <div className="table-row">
              <p style={{fontSize:"12px", color:"var(--text-secondary-color)"}}>Digital business card Gold member</p>
              <p style={{fontSize:"12px"}}>₹1999</p>
            </div>
            <div className="table-row" style={{border:"none"}}>
              <p className="table-row-gst">CGST @ 9%</p>
              <p className="table-row-gst">₹180</p>
            </div>
            <div className="table-row">
              <p className="table-row-gst">SGST @ 9%</p>
              <p className="table-row-gst">₹180</p>
            </div>
            <div className="table-row total-row">
              <p>Total</p>
              <p>₹2,719</p>
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
		<p className="billing-authorization mt-4">Lorem ipsum dolor sit amet, consectetur.</p>
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
