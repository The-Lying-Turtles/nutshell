const remoteURL = "http://localhost:5002"

export default Object.create(null, {
    get: {
        value: function (id) {
            return fetch(`${remoteURL}/articles/${id}`).then(e => e.json())
        }
    },
    getAll: {
        value: function () {
            return fetch(`${remoteURL}/articles`).then(e => e.json())
        }
    },
    delete: {
        value: (id) => {
            return fetch(`${remoteURL}/articles/${id}`, {
            method: "DELETE"
        })
        .then(()=>{return fetch(`${remoteURL}/articles`).then(e => e.json()) })

        }
    },
    post: {
        value: function (newArticle) {
            return fetch(`${remoteURL}/articles`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newArticle)
            }).then(e => e.json())
        }
    },
    patch: {
        value: function (id, editArticle) {
            return fetch(`${remoteURL}/articles/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(editArticle)
            }).then(e => e.json())
        }
    }
})