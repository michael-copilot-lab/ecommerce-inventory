// Legacy query
const getUser = (id) => db.query("SELECT * FROM users WHERE id = " + id);