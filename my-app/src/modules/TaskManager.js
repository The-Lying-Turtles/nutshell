const remoteURL = "http://localhost:5002"

export default Object.create(null, {
    get: {
        value: function (id) {
            return fetch(`${remoteURL}/tasks/${id}`).then(e => e.json())
        }
    },
    getAll: {
        value: function () {
            return fetch(`${remoteURL}/tasks`).then(e => e.json())
        }
    },
    delete: {
        value: (id) => {
            return fetch(`${remoteURL}/tasks/${id}`, {
            method: "DELETE"
        })
        .then(()=>{return fetch(`${remoteURL}/tasks`).then(e => e.json()) })

        }
    },
    post: {
        value: function (newTask) {
            return fetch(`${remoteURL}/tasks`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newTask)
            }).then(e => e.json())
        }
    },
    patch: {
        value: function (id, editTask) {
            return fetch(`${remoteURL}/tasks/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(editTask)
            }).then(e => e.json())
        }
    }
})

y