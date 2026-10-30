/**
 * 
 * @param {*} userId 
 * @param {*} includeHistory 
 * @returns 
 */
async function fetchUserData(userId, includeHistory = false) {
    if (!userId) throw new Error("User ID required");
    const url = `/api/users/${userId}?history=${includeHistory}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error("Network error");
    return await response.json();
}