function getActiveUserNames(users) {
    let activeNames = [];
    for (let i = 0; i < users.length; i++) {
        if (users[i].isActive) {
            activeNames.push(users[i].name.toUpperCase());
        }
    }
    return activeNames;
}