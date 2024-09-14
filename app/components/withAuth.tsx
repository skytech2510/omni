import { useSession } from "next-auth/react"
import { redirect } from "next/navigation";

const WithAuth = (WrappedComponent: React.ComponentType) => {
    const AuthComponent = () => {
      const { data: session, status } = useSession();
      return status === "authenticated" ? <WrappedComponent /> : redirect("/login")
    }
    return AuthComponent
}