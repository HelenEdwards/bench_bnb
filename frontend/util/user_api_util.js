export const signup = user => (
    $.ajax({
        url: '/api/user',
        method: 'POST',
        data: { user }
    })
)
