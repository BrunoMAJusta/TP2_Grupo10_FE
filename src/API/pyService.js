import API_URL from './config.js'

const pyService = {
    async logout() {
        let user
        if (localStorage.getItem("loggedUser")) {
            user = JSON.parse(localStorage.getItem("loggedUser"))
        }
        const response = await fetch(`${API_URL}logout`, {
            method: "POST",
            headers: {
                'x-access-token': user.token
            },
        })
        if (response.ok) {
            return response.json()
        } else {
            throw Error(response)
        }
    },
    async registerUser(name, email, adress, zipcode, number, password, password2) {
        const response = await fetch(`${API_URL}users`, {
            method: "POST",
            headers: {
                'Content-type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                adress: adress,
                zipcode: zipcode,
                number: number,
                password: password,
                password2: password2
            })
        })

        if (response.ok) {
            return response.json()
        } else {
            throw Error(response)
        }
    },
    async login(email, password) {
        const response = await fetch(`${API_URL}login`, {
            method: "POST",
            headers: {
                'Content-type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({
                email: email,
                password: password,
            })
        })

        if (response.ok) {
            return response.json()
        } else {
            throw Error(response.json())
        }
    },
    async getCategory() {
        const response = await fetch(`${API_URL}categories`, {
            method: "GET"
        })
        if (response.ok) {
            return response.json()
        } else {
            throw Error(response)
        }
    },
    async getEPIS() {
        const response = await fetch(`${API_URL}epis`, {
            method: "GET"
        })
        if (response.ok) {
            return response.json()
        } else {
            throw Error(response)
        }
    },
    async getEPIbyID(id) {
        let user
        if (localStorage.getItem("loggedUser")) {
            user = JSON.parse(localStorage.getItem("loggedUser"))
        }
        const response = await fetch(`${API_URL}epis${id}`, {
            method: "GET",
            headers: {
                'x-access-token': user.token
            },
        })
        if (response.ok) {
            return response.json()
        } else {
            throw Error(response)
        }
    },
    async addEPI(name, category_id, img, price) {
        let user
        if (localStorage.getItem("loggedUser")) {
            user = JSON.parse(localStorage.getItem("loggedUser"))
        }
        const response = await fetch(`${API_URL}epis`, {
            method: "POST",
            headers: {
                'Content-type': 'application/json; charset=utf-8',
                'x-access-token': user.token
            },
            body: JSON.stringify({
                name: name,
                category_id: category_id,
                img: img,
                price: price,
            })
        })

        if (response.ok) {
            return response.json()
        } else {
            throw Error(response.json())
        }
    },
    async addOrder(date, epis) {
        let user
        if (localStorage.getItem("loggedUser")) {
            user = JSON.parse(localStorage.getItem("loggedUser"))
        }
        const response = await fetch(`${API_URL}orders/users/${user.id}`, {
            method: "POST",
            headers: {
                'Content-type': 'application/json; charset=utf-8',
                'x-access-token': user.token
            },
            body: JSON.stringify({
                date: date,
                epis: epis,
            })
        })

        if (response.ok) {
            return response.json()
        } else {
            throw Error(response.json())
        }
    },
    async getUserOrders() {
        let user
        if (localStorage.getItem("loggedUser")) {
            user = JSON.parse(localStorage.getItem("loggedUser"))
        }
        const response = await fetch(`${API_URL}users/${user.id}/orders`, {
            method: "GET",
            headers: {
                'x-access-token': user.token
            },
        })
        if (response.ok) {
            return response.json()
        } else {
            throw Error(response)
        }
    }, async getOrdersEPIS(id) {
        let user
        if (localStorage.getItem("loggedUser")) {
            user = JSON.parse(localStorage.getItem("loggedUser"))
        }
        const response = await fetch(`${API_URL}orders/epis`, {
            method: "GET",
            headers: {
                'x-access-token': user.token
            },
        })
        if (response.ok) {
            return response.json()
        } else {
            throw Error(response)
        }
    },
}
export default pyService;