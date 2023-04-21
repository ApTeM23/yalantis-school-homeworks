SELECT c.*, COUNT(s.user_id) AS subscriber_count
FROM channels c
LEFT JOIN subscriptions s ON c.id = s.channel_id
WHERE c.id = '79f6ce8f-ee0c-4ef5-9c36-da06b7f4cb76'
GROUP BY c.id;
