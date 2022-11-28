import { Navbar } from "react-bootstrap"


export const Layout = ({children}) => {
    return <main>
        <Navbar/>
        {children}
        </main>
}