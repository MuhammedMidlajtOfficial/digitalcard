import React from "react";
import { Button, Modal, Select } from "antd";
import { GoPlus } from "react-icons/go";
import { CiCircleInfo } from "react-icons/ci";

const selectOptions = {
  incentiveAmount: [
    { label: "₹250", value: "₹250" },
    { label: "₹350", value: "₹350" },
  ],
  max: [
    { label: "₹10,000", value: "₹10,000" },
    { label: "₹20,000", value: "₹20,000" },
  ],
  rewardsType: [
    { label: "Cash", value: "Cash" },
    { label: "Points", value: "Points" },
  ],
  minimumPayout: [
    { label: "₹5,000", value: "₹5,000" },
    { label: "₹10,000", value: "₹10,000" },
  ],
  referral: [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
  ],
};

const handleChange = (value) => console.log(`selected ${value}`);

const AddIncentiveForm = ({ open, handleCancel }) => (
  <Modal
    open={open}
    title="Incentive Plans"
    onCancel={handleCancel}
    footer={[
      <Button key="back" onClick={handleCancel}>
        Return
      </Button>,
      <Button key="save" type="primary" onClick={handleCancel}>
        Save
      </Button>,
    ]}
  >
    <div className="d-flex gap-3">
      <SelectField
        label="Incentive Amount"
        options={selectOptions.incentiveAmount}
        infoIcon
      />
      <SelectField label="Max" options={selectOptions.max} infoIcon />
    </div>
    <div className="d-flex gap-3 mt-4">
      <SelectField label="Rewards Type" options={selectOptions.rewardsType} />
      <SelectField
        label="Minimum Payout"
        options={selectOptions.minimumPayout}
      />
    </div>
    <div className="mt-4">
      <SelectField
        label="For Every Referral"
        options={selectOptions.referral}
      />
    </div>

    <div className="add-incentive-btn">
      <button>
        <GoPlus /> Add Instructions
      </button>
    </div>
  </Modal>
);

const SelectField = ({ label, options, infoIcon }) => (
  <div>
    <label>
      {label} {infoIcon && <CiCircleInfo />}
    </label>
    <br />
    <Select
      defaultValue={options[0].value}
      style={{
        width: 180,
        border: "1px solid var(--text-color)",
        borderRadius: "4px",
      }}
      onChange={handleChange}
      options={options}
    />
  </div>
);

export default AddIncentiveForm;
