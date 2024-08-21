export async function findLives() {
    const response = await fetch('https://api.elevatechurch.com.br/youtube/lives', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjY1OTE4MSwicm9sZSI6ImlncmVqYSIsImNodXJjaCI6eyJpZCI6NjU5MTgxLCJuYW1lIjoiQXNzZW1ibGVpYSBkZSBEZXVzIC0gTWFkdXJlaXJhIiwiZW1haWwiOiJhZG1AZ21haWwuY29tIiwibG9nbyI6bnVsbCwicGFyZW50Q2h1cmNoIjpudWxsfSwiaWF0IjoxNzE2MjE0OTY2fQ.zgKexaio7decQnFnLbsLDjWGIWf6vmOWbqrk8KlKJYM',
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const result = await response.json();
    return result.data;
}