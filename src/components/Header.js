const Header = () => {
    return (
        <div className="terminal-nav">
            <div className="terminal-logo">
                <div className="logo terminal-prompt">
                    <a href="#top" className="no-style">paolorollo.dev</a>
                </div>
            </div>
            <nav className="terminal-menu">
                <ul>
                    <li>
                        <a className="menu-item" href="#about">about me</a>
                    </li>
                    <li>
                        <a className="menu-item" href="#jobs">jobs</a>
                    </li>
                    <li>
                        <a className="menu-item" href="#projects">projects</a>
                    </li>
                    <li>
                        <a className="menu-item" href="#skills">skills</a>
                    </li>
                    <li>
                        <a className="menu-item" href="#contacts">contacts</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;