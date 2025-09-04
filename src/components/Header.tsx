
interface HeaderProps {
    children: React.ReactNode
}

const Header = (props: HeaderProps) => {
    return (
        <div className="container">
            <header className="flex justify-between">
                <h1>My Store</h1>

                {props.children}
            </header>
        </div>
    )
}

export default Header
