const remoteURL = "http://localhost:5002"

export default Object.create(null, {
    get: {
        value: function (id) {
            return fetch(`${remoteURL}/events/${id}`).then(e => e.json())
        }
    },
    getAll: {
        value: function () {
            return fetch(`${remoteURL}/events`).then(e => e.json())
        }
    },
    delete: {
        value: (id) => {
            return fetch(`${remoteURL}/events/${id}`, {
            method: "DELETE"
        })
        .then(()=>{return fetch(`${remoteURL}/events`).then(e => e.json()) })

        }
    },
    post: {
        value: function (newEvent) {
            return fetch(`${remoteURL}/events`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newEvent)
            }).then(e => e.json())
        }
    },
    patch: {
        value: function (id, editEvent) {
            return fetch(`${remoteURL}/events/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(editEvent)
            }).then(e => e.json())
        }
    }
})