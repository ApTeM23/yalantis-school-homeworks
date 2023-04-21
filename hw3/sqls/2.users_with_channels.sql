SELECT users.id AS user_id, users.name AS user_name, users.avatar_url AS user_avatar,
    channels.photo_url AS channel_photo, channels.description AS channel_description,
    channels.created_at AS channel_creation_date
FROM users
INNER JOIN channels ON users.id = channels.user_id
ORDER BY channels.created_at DESC;
