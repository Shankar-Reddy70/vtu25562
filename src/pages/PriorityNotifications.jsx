import {
 useEffect,
 useState
} from "react";

import {
 Container,
 Typography,
 Select,
 MenuItem
} from "@mui/material";

import NotificationCard
from "../components/NotificationCard";

import {
 getNotifications
} from "../services/notificationService";

export default function PriorityNotifications(){

 const [notifications,
 setNotifications]=useState([]);

 const [limit,
 setLimit]=useState(10);

 const [type,
 setType]=useState("");

 useEffect(()=>{

  loadData();

 },[limit,type]);

 const loadData=async()=>{

  const data=
  await getNotifications(
   1,
   limit,
   type
  );

  setNotifications(
   data.notifications || []
  );
 };

 return(

  <Container>

   <Typography
    variant="h4"
    sx={{mb:2}}
   >
     Priority Notifications
   </Typography>

   <Select
    value={limit}
    onChange={(e)=>
     setLimit(e.target.value)
    }
   >

    <MenuItem value={10}>10</MenuItem>
    <MenuItem value={15}>15</MenuItem>
    <MenuItem value={20}>20</MenuItem>

   </Select>

   <Select
    value={type}
    onChange={(e)=>
     setType(e.target.value)
    }
    sx={{ml:2}}
   >

    <MenuItem value="">
      All
    </MenuItem>

    <MenuItem value="Placement">
      Placement
    </MenuItem>

    <MenuItem value="Result">
      Result
    </MenuItem>

    <MenuItem value="Event">
      Event
    </MenuItem>

   </Select>

   {
    notifications.map((n)=>(
      <NotificationCard
       key={n.ID}
       notification={n}
      />
    ))
   }

  </Container>
 );
}