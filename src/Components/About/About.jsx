import React from 'react';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import {
    AboutDiv,
    Column,
    Img,
    AboutInfo,
    AboutInfoP,
    HeaderUl,
    HeaderLi,
    JelloHori,
} from './Styles';

import { Container, H1 } from '../../SharedStyles/SharedStyles';
const socialMediaLinks = [
    {
        id: 0,
        link: 'https://www.linkedin.com/in/mukesh-kumar-464273229/',
        icon: <FaLinkedin />,
    },
    {
        id: 1,
        link: 'https://github.com/Mukesh16407',
        icon: <FaGithub />,
    },
    {
        id: 2,
        link: 'https://twitter.com/mkvermashk',
        icon: <FaTwitter />,
    },
    /* {
        id: 3,
        link: 'https://leetcode.com/aadityaneve',
        icon: <SiLeetcode />,
    }, */
];
const About = () => {
    return (
        <Container className='about'>
            <AboutDiv>
                <Column>
                    <Img src='https://github.com/Mukesh16407/git_2nd/blob/master/_DSC0114.JPG?raw=true' alt='my image' />
                </Column>
                <Column>
                    <H1>About Me</H1>
                    <AboutInfo>
                        <AboutInfoP>
                        A passionate aspiring Full Stack Developer skilled in MERN stack, moulded and shaped by Masai School's numerous training.
                        Passion and diligence are two traits that I believe most reflect me as an individual. I’ve been faced with many challenges.
                        Without enthusiasm, patience and some degree of positivity, we cannot bring about the change that is needed to a better life!
                        Actively ready to join in a great lively team of a good start-up to adapt me in any situation and environment with ease and perform the best
                        </AboutInfoP>
                       
                    </AboutInfo>
                    <HeaderUl>
                        {socialMediaLinks.map((item) => (
                            <JelloHori key={item.id}>
                                <a
                                    href={item.link}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <HeaderLi>{item.icon}</HeaderLi>
                                </a>
                            </JelloHori>
                        ))}
                    </HeaderUl>
                </Column>
            </AboutDiv>
        </Container>
    );
};

export default About;
