SELECT v.*
FROM videos v
JOIN (
	SELECT video_id, COUNT(*) AS likes_count
	FROM likes
	WHERE positive = 'true'
	GROUP BY video_id
) l ON v.id = l.video_id
GROUP BY v.id, l.likes_count
ORDER BY l.likes_count DESC, v.id ASC
LIMIT 5;