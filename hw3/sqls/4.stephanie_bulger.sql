SELECT v.id AS video_id, v.title AS video_title, v.preview_url AS video_preview, v.duration AS video_duration, v.published_at AS video_publish_date
FROM videos v
JOIN subscriptions s ON v.channel_id = s.channel_id
JOIN users u ON s.user_id = u.id
WHERE u.name = 'Stephanie Bulger'
ORDER BY v.published_at DESC;
