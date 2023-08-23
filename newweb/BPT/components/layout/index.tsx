import Footer from "../footer"
import Header from "../header"
import css from "./src/layout.module.scss"

interface Props {
    children: React.ReactNode
}

export default function Layout({ children }: Props) 
{
    return (
        <div className={css.root}>
            <Header />
            {children}
            <Footer />
        </div>
    )
}
