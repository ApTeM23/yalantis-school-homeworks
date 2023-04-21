SELECT v.*, (SUM(CASE WHEN l.positive THEN 1 ELSE 0 END) - SUM(CASE WHEN NOT l.positive THEN 1 ELSE 0 END)) AS rating
FROM videos v
JOIN (
	SELECT positive, video_id, COUNT(*) AS likes_count
	FROM likes
	WHERE positive = 'true'
	GROUP BY video_id, positive
) l ON v.id = l.video_id
WHERE v.published_at >= '2021-09-01'
GROUP BY v.id, l.likes_count
HAVING l.likes_count > 4
ORDER BY l.likes_count DESC
LIMIT 10;

