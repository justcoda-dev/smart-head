const API = "https://reqres.in/api"

export const request = async (url: string, options?: { method: string, data?: string }) => {
    try {

        const response = await fetch(`${API}/${url}`, {
            ...options,
            headers: {"Content-Type": "application/json"}
        })

        return response.json()
    } catch (e) {
        console.log("something happened in request", e)
    }
}

request.get = async (url: string) => {
    return await request(url)
}

request.post = async (url: string, data: object) => {
    return await request(url, {method: "POST", data: JSON.stringify(data)})
}

request.delete = async (url: string) => {
    return await request(url, {
        method: "POST"
    })
}

