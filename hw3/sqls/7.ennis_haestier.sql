SELECT u.name AS channel_name, u.avatar_url AS channel_avatar, c.photo_url AS channel_photo, c.description AS channel_description, s.level AS subscription_level, s.subscribed_at AS subscription_date
FROM subscriptions s
JOIN channels c ON s.channel_id = c.id
JOIN users u ON c.user_id = u.id
WHERE s.user_id = (
  SELECT id
  FROM users
  WHERE name = 'Ennis Haestier'
)
ORDER BY
  CASE s.level
    WHEN 'vip' THEN 1
    WHEN 'follower' THEN 2
    WHEN 'fan' THEN 3
    WHEN 'standard' THEN 4
  END,
  s.subscribed_at DESC;


