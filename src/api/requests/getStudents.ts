export const getStudents = async() => {
    const response = await fetch(`https://front-assignment-api.2tapp.cc/api/persons`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
    });

    return await response.json()
}