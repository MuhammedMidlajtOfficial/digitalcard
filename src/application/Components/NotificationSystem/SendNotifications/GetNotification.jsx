import React, { useEffect, useState } from "react";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import { generateToken, listenForMessages } from "./notifications/firebase";

const GetNotification = () => {
    const [notifications, setNotifications] = useState([]);
    const [page, setPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const [loading, setLoading] = useState(false);

    const fetchNotifications = async (currentPage = 1) => {
        setLoading(true);
        try {
            const limit = 10;
            const response = await axios.get(
                `http://localhost:5000/api/notifications?page=${currentPage}&limit=${limit}`
            );
            setNotifications(response.data.notifications);
            setPageCount(response.data.pages);
        } catch (error) {
            console.error("Error fetching notifications:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchNotifications(page + 1);

        const getDeviceToken = async () => {
            try {
                const currentToken = await generateToken();
                if (currentToken) {
                    console.log("FCM Token:", currentToken);
                } else {
                    console.log("No registration token available.");
                }
            } catch (error) {
                console.error("Error getting FCM token:", error);
            }
        };

        getDeviceToken();

        listenForMessages((payload) => {
            console.log("Message received:", payload);
            showCustomToast(payload.notification);
        });
    }, [page]);

    const showCustomToast = ({ title, body, imageUrl }) => {
        toast.custom(
            (t) => (
                <div
                    className={`flex items-center bg-white rounded-lg shadow-lg p-4 border ${
                        t.visible ? "animate-enter" : "animate-leave"
                    }`}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        maxWidth: "300px",
                        border: "1px solid #e2e8f0",
                        borderRadius: "8px",
                    }}
                >
                    <div className="flex-shrink-0">
                        {imageUrl && (
                            <img
                                src={imageUrl}
                                alt="Notification"
                                className="w-12 h-12 rounded-full object-cover"
                            />
                        )}
                    </div>
                    <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-800">
                            {title || "Notification"}
                        </h3>
                        <p className="text-sm text-gray-600">{body}</p>
                    </div>
                </div>
            ),
            { duration: 5000 }
        );
    };

    const handlePageClick = ({ selected }) => {
        setPage(selected);
    };

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <Toaster position="top-right" />
            <h2 className="text-4xl font-semibold mb-6 text-center text-gray-800">
                Notification List
            </h2>

            {loading ? (
                <div className="text-center">
                    <p>Loading notifications...</p>
                </div>
            ) : (
                <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
                    <table className="min-w-full table-auto border-collapse border border-gray-300">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="border border-gray-300 px-4 py-2 text-left">
                                    Image
                                </th>
                                <th className="border border-gray-300 px-4 py-2 text-left">
                                    Title
                                </th>
                                <th className="border border-gray-300 px-4 py-2 text-left">
                                    Body
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {notifications.map((notif) => (
                                <tr
                                    key={notif._id}
                                    className="hover:bg-gray-100"
                                >
                                    <td className="border border-gray-300 px-4 py-2 text-center">
                                        {notif.imageUrl && (
                                            <img
                                                src={notif.imageUrl}
                                                alt="Notification"
                                                className="w-12 h-12 rounded-full object-cover mx-auto"
                                            />
                                        )}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {notif.title}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {notif.body}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            <div className="mt-8 flex justify-center">
                <button
                    onClick={() => handlePageClick({ selected: page - 1 })}
                    disabled={page === 0}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2 disabled:opacity-50"
                >
                    Previous
                </button>
                <span className="mx-2">{`Page ${
                    page + 1
                } of ${pageCount}`}</span>
                <button
                    onClick={() => handlePageClick({ selected: page + 1 })}
                    disabled={page >= pageCount - 1}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md ml-2 disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default GetNotification;