import styled from 'styled-components';

export const MyProfile = styled.div`
  width: 500px;
  height: 460px;
  text-align: center;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 1px 1px 8px 0px #000000;
  padding-top: 30px;
  margin-bottom: 20px;
`;

export const Name = styled.p`
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: 600;
`;

export const Avatar = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 30px;
  border-radius: 50%;
  margin-right: auto;
  margin-left: auto;
`;

export const Tag = styled.p`
  margin-bottom: 12px;
  color: #000000;
`;

export const Location = styled.p`
  color: #808080;
  font-weight: 500;
  margin-bottom: 94px;
`;

export const Stats = styled.ul`
  position: relative;
  display: flex;

  align-items: center;
  justify-content: space-evenly;
  height: 90px;
  border-radius: 6px;
  border-top: 1px solid #80808050;
  background-color: #f3f6f9;
`;

export const Label = styled.span`
  color: #000000;
  display: block;
  padding: 10px;
`;

export const Quantity = styled.span`
  font-weight: 500;
`;
