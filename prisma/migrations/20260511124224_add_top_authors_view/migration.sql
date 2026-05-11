-- This is an empty migration.
CREATE VIEW top_authors AS
SELECT
  a.id,
  a.name,
  AVG(r.rating) AS avg_rating
FROM "Author" a
JOIN "Book" b ON b."authorId" = a.id
JOIN "UserReview" r ON r."bookId" = b.id
GROUP BY a.id, a.name;