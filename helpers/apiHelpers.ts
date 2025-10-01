// import { toast } from "react-toastify"
// import { signOut } from "next-auth/react"

// import { LOGIN_FAIL } from "@/constant/toastMessages"
// import axios, { AxiosError, AxiosRequestConfig, Method } from "axios"
// import Cookies from "js-cookie"

// // Create an Axios instance
// export const api = axios.create({
// 	headers: {
// 		"Content-Type": "application/json"
// 	}
// })

// // Add an interceptor to handle FormData
// api.interceptors.request.use(
// 	(config) => {
// 		if (config.data instanceof FormData) {
// 			delete config.headers?.["Content-Type"]
// 		}
// 		return config
// 	},
// 	(error) => Promise.reject(error)
// )

// export const handleLogout = async () => {
// 	Cookies.remove("next-auth.session-token")
// 	Cookies.remove("accessToken")
// 	await signOut({ redirect: true, callbackUrl: "/auth" })
// }


