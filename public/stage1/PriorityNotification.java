import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;

class Notification {

    String id;
    String type;
    String message;
    LocalDateTime timestamp;

    public Notification(String id, String type, String message, String timestamp) {
        this.id = id;
        this.type = type;
        this.message = message;
        this.timestamp = LocalDateTime.parse(
                timestamp,
                DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
    }
}

public class PriorityNotification {

    static int getWeight(String type) {

        switch(type) {

            case "Placement":
                return 3;

            case "Result":
                return 2;

            case "Event":
                return 1;

            default:
                return 0;
        }
    }

    public static void main(String[] args) {

        List<Notification> notifications = new ArrayList<>();

        notifications.add(new Notification(
                "1",
                "Placement",
                "AMD Hiring",
                "2026-04-22 17:49:42"));

        notifications.add(new Notification(
                "2",
                "Result",
                "Mid Sem",
                "2026-04-22 17:51:30"));

        notifications.add(new Notification(
                "3",
                "Event",
                "Farewell",
                "2026-04-22 17:51:06"));

        PriorityQueue<Notification> pq =
                new PriorityQueue<>((a,b)->{

                    int weightDiff =
                            getWeight(b.type)-getWeight(a.type);

                    if(weightDiff!=0)
                        return weightDiff;

                    return b.timestamp.compareTo(a.timestamp);
                });

        pq.addAll(notifications);

        System.out.println("TOP 10 PRIORITY NOTIFICATIONS");

        int count=0;

        while(!pq.isEmpty() && count<10){

            Notification n=pq.poll();

            System.out.println(
                    n.type+
                            " | "+
                            n.message+
                            " | "+
                            n.timestamp);

            count++;
        }
    }
}