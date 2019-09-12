import React from 'react';
import {
  Container,
  Header,
  Logo,
  Menu,
  ProfileContent,
  AvatarWrap,
  AvatarImage,
  Skills,
  SkillsSet,
  Description,
  Footer,
} from './styles';

import { MdMenu } from 'react-icons/md';
import Avatar from '../../assets/images/CharlieBrown.jpeg';

function DevProfile() {
  return (
    <>
      <Container>
        <Header>
          <Logo> Logo </Logo>
          <Menu>
            <MdMenu size={50} />
          </Menu>
        </Header>
        <ProfileContent>
          <AvatarWrap>
            <AvatarImage>
              <img src={Avatar} alt="avatar_img" />
              <span> Marcos Moura </span>
            </AvatarImage>
          </AvatarWrap>
          <Skills>
            <span> Skills </span>
            <SkillsSet>
              <span> Front-End </span>
              <span> Back-End </span>
              <span> Mobile </span>
              <span> UX </span>
              <span> UI </span>
              <span> Business </span>
            </SkillsSet>
          </Skills>

          <Description>
            <span> Descrição </span>
            <textarea>
              Algum texto so pra encher linguiça. E pra encher esse negocio
              aqui, haja linguiça!!!
            </textarea>
          </Description>

          <button> Enviar Convite </button>
          <button className="previous"> Anterior </button>
          <button className="next"> Próximo </button>
        </ProfileContent>
        <Footer> YouHack - ©2019 </Footer>
      </Container>
    </>
  );
}

export default DevProfile;
