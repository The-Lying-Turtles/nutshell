const remoteURL = "http://localhost:5002"

export default Object.create(null, {
    get: {
        value: function (section, id) {
            return fetch(`${remoteURL}/${section}/${id}`).then(e => e.json())
        }
    },
    getAll: {
        value: function (section) {
            return fetch(`${remoteURL}/${section}`).then(e => e.json())
        }
    },
    getAllOfId: {
        value: function (section, id) {
            return fetch(`${remoteURL}/${section}?userId=${id}`).then(e => e.json())
        }
    },
    delete: {
        value: (section, id) => {
            return fetch(`${remoteURL}/${section}/${id}`, {
            method: "DELETE"
        })
        .then(()=>{return fetch(`${remoteURL}/${section}`).then(e => e.json()) })

        }
    },
    post: {
        value: function (section, newElement) {
            return fetch(`${remoteURL}/${section}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newElement)
            }).then(e => e.json())
        }
    },
    patch: {
        value: function (section, id, editElement) {
            return fetch(`${remoteURL}/${section}/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(editElement)
            }).then(e => e.json())
        }
    }
})