import styled from "styled-components";

export const MenuContainer = styled.div`
  padding: 0 10%;
  height: 80px;
  background-color: #f5f5f5;
`;

export const MenuContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  height: 100%;
`;

export const Logo = styled.div`
  font-family: "Poppins", sans-serif;
`;

export const MenuItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const MenuItem = styled.div`
  margin: 15px;
`;

