import HeaderText from "./HeaderText";

function Header(props) {
    return(
        <div className = {props.headerClass}>
            <a href="#hero"><HeaderText content = "Home"/></a>
            <a href="#aboutMeDiv"><HeaderText content = "About Me"/></a>
            <a href="#skills-dev"><HeaderText content = "Skills"/></a>
            <a href="#main-project"><HeaderText content = "Projects"/></a>
            <a href="#footer-main"><HeaderText content = "Contact Me"/></a>
            



        </div>
    );
}

export default Header;