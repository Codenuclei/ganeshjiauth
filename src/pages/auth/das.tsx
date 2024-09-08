import React, { useState, useEffect } from 'react';
import styles from '@/pages/auth/wcss.css';
import Header from '@/app/header';
const getTimeOfDay = () => {
    const hours = new Date().getHours();
    if (hours < 12) return 'morning';
    if (hours < 18) return 'afternoon';
    return 'evening';
};

const Dashboard: React.FC = () => {
    const timeOfDay = getTimeOfDay();

    const data = {
        morning: {
            stats: [
                { title: 'Total Users', value: '1,000' },
                { title: 'Active Users', value: '800' },
                { title: 'Pending Requests', value: '50' }
            ],
            activities: [
                'Morning check-in complete.',
                'User Alice signed in.',
                'System update applied.'
            ],
            users: [
                { name: 'John Doe', email: 'john.doe@example.com', role: 'Admin' },
                { name: 'Jane Smith', email: 'jane.smith@example.com', role: 'Moderator' }
            ]
        },
        afternoon: {
            stats: [
                { title: 'Total Users', value: '1,200' },
                { title: 'Active Users', value: '950' },
                { title: 'Pending Requests', value: '70' }
            ],
            activities: [
                'Afternoon system maintenance.',
                'New registration: Bob Johnson.',
                'User Carol updated profile.'
            ],
            users: [
                { name: 'Mike Johnson', email: 'mike.johnson@example.com', role: 'User' },
                { name: 'Lisa Brown', email: 'lisa.brown@example.com', role: 'Admin' }
            ]
        },
        evening: {
            stats: [
                { title: 'Total Users', value: '1,500' },
                { title: 'Active Users', value: '1,200' },
                { title: 'Pending Requests', value: '90' }
            ],
            activities: [
                'Evening system check complete.',
                'User Daniel signed in.',
                'New feature deployed.'
            ],
            users: [
                { name: 'Emily Davis', email: 'emily.davis@example.com', role: 'User' },
                { name: 'Chris Wilson', email: 'chris.wilson@example.com', role: 'Moderator' }
            ]
        }
    };

    const currentData = data[timeOfDay];

    return (
        <div className={styles.container}>
        <Header />
            <div className={styles.mainContent}>
                <section className={styles.stats}>
                    <h2>Statistics</h2>
                    {currentData.stats.map((stat, index) => (
                        <div key={index} className={styles.statItem}>
                            <h3>{stat.title}</h3>
                            <p>{stat.value}</p>
                        </div>
                    ))}
                </section>
                <section className={styles.activities}>
                    <h2>Recent Activities</h2>
                    {currentData.activities.map((activity, index) => (
                        <div key={index} className={styles.activityItem}>
                            <p>{activity}</p>
                        </div>
                    ))}
                </section>
                <section className={styles.userInfo}>
                    <h2>User Information</h2>
                    {currentData.users.map((user, index) => (
                        <div key={index} className={styles.infoItem}>
                            <h3>{user.name}</h3>
                            <p>Email: {user.email}</p>
                            <p>Role: {user.role}</p>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
};

export default Dashboard;
