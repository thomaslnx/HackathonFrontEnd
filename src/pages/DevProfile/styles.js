import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  background-color: #a4b0be;
  display: flex;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
`;

export const Header = styled.div`
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
  background-color: #2f3542;
  width: 100%;
`;

export const Logo = styled.div`
  font-weight: 900;
  font-size: 28px;
  color: #fff;
`;

export const Menu = styled.div`
  color: #fff;
`;

export const ProfileContent = styled.div`
  min-height: 100%;

  button {
    width: 350px;
    height: 46px;
    background-color: #2f3542;
    color: #fff;
    border: none;
    border-radius: 4px;
    margin-left: 32px;
    font-weight: 600;
    font-size: 14px;
  }

  .previous {
    width: 165px;
    height: 46px;
    margin-top: 20px;
    margin-bottom: 30px;
  }

  .next {
    width: 165px;
    height: 46px;
    margin-left: 20px;
  }
`;

export const AvatarWrap = styled.div`
  height: 379px;
  width: 350px;
  background-color: #ffffff;
  border-color: black;
  margin: 20px auto;
  border-radius: 4px;
`;

export const AvatarImage = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;

  img {
    height: 330px;
    width: 330px;
    margin: 10px 10px 0px;
    border-radius: 4px;
  }

  span {
    line-height: 10px;
    color: #2f3542;
    font-weight: 600;
    font-size: 19px;
    margin-top: 13px;
    margin-left: 10px;
  }
`;

export const Skills = styled.div`
  margin-top: 20px;
  margin-left: 32px;
  height: 170px;
  display: flex;
  flex-direction: column;

  span {
    font-weight: 600;
    font-size: 18px;
    color: #2f3542;
  }
`;

export const SkillsSet = styled.div`
  margin-top: 5px;
  margin-left: 0px;
  height: 140px;
  max-width: 350px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  span {
    text-align: center;
    width: 80px;
    height: 60px;
    border-color: none;
    border-radius: 4px;
    font-weight: 600;
    font-size: 12px;
    color: #fff;
    background-color: #2f3542;
    padding: 10px 30px;
    margin: 0px 10px 10px;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-weight: 600;
    color: #2f3542;
    margin-left: 32px;
    margin-bottom: 5px;
  }

  textarea {
    text-align: 'top';
    width: 350px;
    height: 150px;
    margin-left: 32px;
    border-color: #f1f2f6;
    border-style: solid;
    -webkit-appearance: none;
    border-radius: 4px;
    color: #a4b0be;
    margin-bottom: 20px;
    padding: 15px 15px;
    font-weight: 500;
    font-size: 13px;
    letter-spacing: 1.5px;
    line-height: 22px;
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 50px;
  background-color: #2f3542;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;
