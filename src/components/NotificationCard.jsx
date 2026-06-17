import {
 Card,
 CardContent,
 Typography
} from "@mui/material";

export default function NotificationCard({
 notification,
 viewed
}) {

 return (

  <Card
   sx={{
    mb:2,
    border:viewed
     ? "1px solid gray"
     : "2px solid green"
   }}
  >

   <CardContent>

    <Typography variant="h6">
      {notification.Type}
    </Typography>

    <Typography>
      {notification.Message}
    </Typography>

    <Typography variant="caption">
      {notification.Timestamp}
    </Typography>

   </CardContent>

  </Card>
 );
}