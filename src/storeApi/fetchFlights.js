const baseUrl = `./JSON.json`;

export const fetchFlightsList = async () => {
    const response = await fetch(baseUrl);
    if (response.ok) {
        return response.json();
    };
    throw new Error();
};