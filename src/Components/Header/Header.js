import {
    HeaderContainer,
    Heading,
    Socials,
    SocialLinks,
    SocialIcon,
} from "./Header.styled";

const Header = () => {
    return (
        <HeaderContainer>
            <Heading>Weather App</Heading>
            <Socials>
                <SocialLinks href="https://github.com/mate966" target="blank">
                    <SocialIcon className="fab fa-github-square" />
                </SocialLinks>
                <SocialLinks
                    href="https://linkedin.com/in/mateuszszweda"
                    target="blank"
                >
                    <SocialIcon className="fab fa-linkedin" />
                </SocialLinks>
            </Socials>
        </HeaderContainer>
    );
};

export default Header;
