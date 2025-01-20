import React, { useEffect, useState } from "react";
import { Avatar, DatePicker } from "antd";
import { UserOutlined } from '@ant-design/icons';
import dayjs from "dayjs";
import { axiosInstance } from "../../../../AxiosConfig";

const UserSection = ({ avatar, name, status, planCount }) => {
  const getStatusStyle = (status) => {
    switch (status) {
      case "Gold Member":
        return { backgroundColor: "#eec575", color: "#000" };
      case "Platinum Member":
        return { backgroundColor: "#ce9191", color: "#000" };
      case "Silver Member":
        return { backgroundColor: "#d1e3c1", color: "#000" };
      default:
        return { backgroundColor: "#fff", color: "#000" };
    }
  };

  return (
    <div className="d-flex gap-2 mb-4 new-user-section align-items-center" style={{ overflowY: 'auto' }}>
      <Avatar 
        size={40}
        src={avatar || null} 
        icon={!avatar && <UserOutlined />} 
      />
      <div>
        <h4>{name}</h4>
        <span style={{ color:"red" }}>{planCount}<span> Times Used</span></span>
      </div>
      <span
        style={{
          padding: "5px 10px",
          borderRadius: "5px",
          fontSize: "10px",
          ...getStatusStyle(status),
        }}
      >
        {status}
      </span>
    </div>
  );
};

const DashboardUsersplans = () => {
  const [topUsers, setTopUsers] = useState([]);
  const [dateRange, setDateRange] = useState([null, null]);
  const { RangePicker } = DatePicker;

  const disableFutureDates = (current) => {
    const today = dayjs().endOf('day');
    return current && current > today;
  };

  const validateDateRange = (dates) => {
    if (!dates || dates.length !== 2) return [null, null];
    
    const [start, end] = dates;
    const today = dayjs().endOf('day');

    const adjustedEnd = end && end.isAfter(today) ? today : end;
    
    return [start, adjustedEnd];
  };

  useEffect(() => {
    if (dateRange[0] && dateRange[1]) {
      fetchTopUsers();
    }
  }, [dateRange]);

  const fetchTopUsers = () => {
    if (!dateRange[0] || !dateRange[1]) return;

    const [startDate, endDate] = dateRange;
    
    const url = `dashboard/getMostlyUsedPlans?startDate=${startDate.format('YYYY-MM-DD')}&endDate=${endDate.format('YYYY-MM-DD')}`;

    axiosInstance
      .get(url)
      .then((response) => {
        setTopUsers(response.data.topUsers);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setTopUsers([]);
      });
  };

  const handleDateRangeChange = (dates) => {
    const validatedDates = validateDateRange(dates);
    setDateRange(validatedDates);
  };

  const getNoDataMessage = () => {
    if (!dateRange[0] && !dateRange[1]) {
      return "Please select a date range to view users data";
    }
    return "No users found for the selected date range";
  };

  useEffect(() => {
    const today = dayjs();
    const startOfMonth = today.startOf('month');
    setDateRange([startOfMonth, today]);
  }, []);

  return (
    <div className="mt-0">
      <div className="">
        <div className="dashboard-new-user">
          <div className="mb-4">
            <h2>Mostly Used Plans</h2>
          </div>
          <div className="d-flex flex-column mb-4">
            <label htmlFor="date-range" className="form-label">
              Select Date Range
            </label>
            <RangePicker
              id="date-range"
              format="YYYY-MM-DD"
              onChange={handleDateRangeChange}
              value={dateRange}
              disabledDate={disableFutureDates}
              allowEmpty={[true, true]}
              placeholder={['Start Date', 'End Date']}
              defaultValue={[dayjs().startOf('month'), dayjs()]}
              ranges={{
                'Today': [dayjs(), dayjs()],
                'This Month': [dayjs().startOf('month'), dayjs()],
                'Last Month': [
                  dayjs().subtract(1, 'month').startOf('month'),
                  dayjs().subtract(1, 'month').endOf('month')
                ]
              }}
            />
          </div>
          <div className="new-user-plans">
            {topUsers && topUsers.length > 0 ? (
              topUsers.map((user) => (
                <UserSection
                  key={user._id}
                  avatar={user.image || null}
                  name={user.username || 'User'}
                  planCount={user.planCount}
                  status={`${user.plansUsed.name} Member`}
                />
              ))
            ) : (
              <span style={{ margin: "5px", color: "red", display: "block", textAlign: "center" }}>
                {getNoDataMessage()}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardUsersplans;