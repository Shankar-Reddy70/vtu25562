import { useEffect, useState } from "react";

import {
  Container,
  Typography
} from "@mui/material";

import NotificationCard from "../components/NotificationCard";
import { getNotifications } from "../services/notificationService";

export default function AllNotifications() {

  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {

    try {

      const data = await getNotifications(
        1,
        10
      );

      console.log(
        "Notifications API Response:",
        JSON.stringify(data, null, 2)
      );

      setNotifications(
        data.notifications || []
      );

    } catch (error) {

      console.error(
        "FULL ERROR:",
        error
      );

      if (error.response) {

        console.log(
          "STATUS:",
          error.response.status
        );

        console.log(
          "DATA:",
          JSON.stringify(
            error.response.data,
            null,
            2
          )
        );
      }

      alert(
        "Failed to fetch notifications"
      );
    }
  };

  return (
    <Container sx={{ mt: 3 }}>

      <Typography
        variant="h4"
        sx={{ mb: 3 }}
      >
        All Notifications
      </Typography>

      {notifications.length === 0 ? (
        <Typography>
          No Notifications Found
        </Typography>
      ) : (
        notifications.map((n) => (
          <NotificationCard
            key={n.ID}
            notification={n}
          />
        ))
      )}

    </Container>
  );
}