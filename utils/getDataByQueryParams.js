export const getDataByQueryParams = (data, params) => {
    return data.filter((destination) => {
        return Object.entries(params).every(([key, value]) => {
            const destValue = destination[key];
            if (typeof destValue === 'boolean') {
                // Convert the string to boolean first, then compare them equal
                return destValue === (value === 'true');
            }
            // Avoid destValue is undefined by ?
            return destValue?.toLowerCase() === value.toLowerCase();
        });
    });
}
