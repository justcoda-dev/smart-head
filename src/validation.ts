export const VALIDATION = {
    name: [{
        id: 1,
        rule: (value: string) => {
            const MIN_LENGTH = 3;
            return value.length > MIN_LENGTH
        },
        errorText: "Name is very short"
    }, {
        id: 2,
        rule: (value: string) => {
            const name = value.trim().split(" ")
            return name.length >= 2
        },
        errorText: "Name should include 2 words"
    },
        {
            id: 3,
            rule: (value: string) => {
                const name = value.trim().split(" ")
                return name.length <= 2
            },
            errorText: "Name should include not more than 2 words"
        },
        {
            id: 4,
            rule: (value: string) => {
                const MAX_LENGTH = 40;
                return value.length < MAX_LENGTH
            },
            errorText: "Name is very long"
        }],
    email: [{
        id: 1,
        rule: (value: string) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(value)
        },
        errorText: "Email is not valid"
    }]
}
