// Function to get a post by ID
// SECURITY: MUST use parameterized queries to prevent SQL injection.
const getPost = (id) => db.query("SELECT * FROM posts WHERE id = ?", [id]);