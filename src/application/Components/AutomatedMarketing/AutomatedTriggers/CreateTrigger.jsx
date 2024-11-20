import { Button, DatePicker, Form, Modal, Radio, Select, Switch, TimePicker } from 'antd';
import { Option } from 'antd/es/mentions';
import React, { useState } from 'react'
import { FaRegCalendarAlt } from 'react-icons/fa';
import { FaRegUser } from 'react-icons/fa6';
import { TbUsersGroup } from 'react-icons/tb';
import ReactQuill from 'react-quill';

const CreateTrigger = ({ open, onClose }) => {
    const [value, setValue] = useState(1);
    const onChange = (e) => {
        setValue(e.target.value);
    };
    const modules = {
        toolbar: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link"],
        ],
    };
    return (
        <div>
            <Modal
                open={open}
                onCancel={onClose}
                title="Compaign Info "
                footer={[
                    <Button key="cancel" onClick={onClose} className="cancel-btn">
                        Cancel
                    </Button>,
                    <Button key="save" type="primary" className="create-btn">
                        Save
                    </Button>,
                ]}
            >
                <Form layout="vertical">
                    <div className='row'>
                        <div className="col-lg-6">
                            <Form.Item
                                label="Trigger Name"
                                className="custom-form-item"
                                labelCol={{ span: 24 }}
                                wrapperCol={{ span: 24 }}
                            >
                                <input
                                    type="text"
                                    className="form-control form_control"
                                    placeholder=""
                                />
                            </Form.Item>
                        </div>
                        <div className="col-lg-6">
                            <Form.Item
                                label="Trigger Type"
                                className="custom-form-item"
                                labelCol={{ span: 24 }}
                                wrapperCol={{ span: 24 }}
                            >
                                <Select
                                    className="form-control addTicket-form_control"
                                    placeholder={
                                        <>
                                            Event Based
                                        </>
                                    }
                                >
                                    <Option value="high">Event based</Option>
                                    <Option value="medium">Time base</Option>
                                    <Option value="low">Date based</Option>
                                </Select>
                            </Form.Item>
                        </div>


                        <div className='col-lg-6 d-flex justify-content-between'>
                            <p className='addTicket-description-input'>Individual User</p>
                            <Switch size="small" className="create-compaign-switch" />
                        </div>
                        <div className='col-lg-6 d-flex justify-content-between'>
                            <p className='addTicket-description-input'>Enterprice user</p>
                            <Switch size="small" className="create-compaign-switch" />
                        </div>

                        <div className="col-lg-6">
                            <Select
                                className="form-control addTicket-form_control"
                                placeholder={
                                    <>
                                        <FaRegUser style={{ marginRight: "8px" }} />
                                        Select Priority
                                    </>
                                }
                            >
                                <Option value="high">High</Option>
                                <Option value="medium">Medium</Option>
                                <Option value="low">Low</Option>
                            </Select>
                        </div>
                        <div className="col-lg-6">
                            <Select
                                className="form-control addTicket-form_control"
                                placeholder={
                                    <>
                                        <TbUsersGroup style={{ marginRight: "8px" }} />
                                        Select Priority
                                    </>
                                }
                            >
                                <Option value="high">High</Option>
                                <Option value="medium">Medium</Option>
                                <Option value="low">Low</Option>
                            </Select>
                        </div>

                        <div className="col-lg-12">
                            <Form.Item
                                label="Subject"
                                className="custom-form-item"
                                labelCol={{ span: 24 }}
                                wrapperCol={{ span: 24 }}
                            >
                                <input
                                    type="text"
                                    className="form-control form_control"
                                    placeholder=""
                                />
                            </Form.Item>
                        </div>


                        <div className="col-12">
                            <Form.Item label="Description">
                                <ReactQuill theme="snow" modules={modules} />
                            </Form.Item>
                        </div>
                        <div>
                            <input type="text" placeholder='Add a description' className='addTicket-description-input' />
                        </div>

                        <div className="col-lg-6">
                            <Form.Item
                                label="Visibility"
                                className="custom-form-item"
                                labelCol={{ span: 24 }}
                                wrapperCol={{ span: 24 }}
                            >
                                <Radio.Group onChange={onChange} value={value} className="createCompaign-radio-group">
                                    <Radio value={1}>Immediately</Radio>
                                    <Radio value={2}>Scheduled</Radio>

                                </Radio.Group>
                            </Form.Item>
                        </div>
                        <div className="col-lg-6">
                            <Form.Item
                                label="Date Added"
                                className="custom-form-item"
                                labelCol={{ span: 24 }}
                                wrapperCol={{ span: 24 }}
                            >
                                <dic className="row">
                                    <div className="col-lg-6"><DatePicker /></div>
                                    <div className="col-lg-6"><TimePicker /></div>
                                </dic>
                            </Form.Item>

                        </div>
                        <div className="col-lg-10">
                            <Form.Item
                                label="Date Added"
                                className="custom-form-item mb-0"
                                labelCol={{ span: 24 }}
                                wrapperCol={{ span: 24 }}
                            >
                                <div className="row">
                                    <div className='col-lg-4 d-flex gap-1 align-items-center'>
                                        <p className='addTicket-description-input mb-0'>Daily</p>
                                        <Switch size="small" className="create-compaign-switch" />
                                    </div>
                                    <div className='col-lg-4 d-flex gap-1 align-items-center'>
                                        <p className='addTicket-description-input mb-0'>Weekly</p>
                                        <Switch size="small" className="create-compaign-switch" />
                                    </div>
                                    <div className='col-lg-4 d-flex gap-1 align-items-center'>
                                        <p className='addTicket-description-input mb-0'>Stop After</p>
                                        <Switch size="small" className="create-compaign-switch" />
                                        <FaRegCalendarAlt />
                                    </div>
                                </div>
                            </Form.Item>
                        </div>

                    </div>
                </Form>
            </Modal>
        </div>
    )
}

export default CreateTrigger
