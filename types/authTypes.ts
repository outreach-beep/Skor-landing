// Types
export type LoginForm = {
	email: string
	password: string
	remember: string
}

export type SignupFormValues = {
	email: string
	name: string
	password: string
	confirmPassword: string
}

export type WalletAuthFormData = {
	email: string
	firstName: string
}

// Interface
export interface ConnectWalletAuthButtonProps {
	isSignup?: boolean
	isLoading?: boolean
}

export interface WalletAuthProps {
	isSignup?: boolean
}
