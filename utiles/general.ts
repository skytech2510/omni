export const makeQuery = (filter : Object) => {
    let query : any[] = [];
    Object.entries(filter).forEach(([key, value]) => {
        if (value) {
            query.push(`${key}=${value}`);
        }
    });
    return query.join('&');
}