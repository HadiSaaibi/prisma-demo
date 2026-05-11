-- This is an empty migration.
CREATE VIEW popular_books AS
SELECT
  b.id,
  b.title,
  b."publisherId",
  AVG(r.rating) AS avg_rating
FROM "Book" b
JOIN "UserReview" r ON r."bookId" = b.id
GROUP BY b.id, b.title, b."publisherId"
HAVING AVG(r.rating) > 4;