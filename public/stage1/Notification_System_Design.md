Stage 1

Logic

Weight Based Priority

Placement = 3
Result = 2
Event = 1

If weights are equal then

Most Recent Notification wins.


Data Structure used as following:

Min Heap (Priority Queue)

Size = 10

Benefits:

Insertion:
O(log 10)

Removal:
O(log 10)

Top Notification:
O(1)

---

## Handling New Notifications

Whenever a new notification arrives:

1. Compute priority score
2. Add to heap
3. If heap size > 10
   remove lowest priority notification

Thus top 10 is always maintained efficiently.