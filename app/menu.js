export default function Menu() {
    const menuItems = ['Home', 'About', 'Contact'];

    return (
        <nav>
            {menuItems.map((m, i) => <a key={i} href="#">{m}</a>)}
        </nav>
    )
}
