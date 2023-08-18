import styled from "styled-components";

export const TopBar = styled.div`
  width: 100%;
  background-color: Transparent;
  position: relative;
  top: 0;
  //  z-index: 999;
`;
export const TopBarWraper = styled.div`
  height: 100%;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.span`
  font-weight: bold;
  font-size: 30px;
  cursor: pointer;
  align-items: center;
  position: relative;
  top: 5px;
`;
export const RightContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const TopBarIconContainer = styled.div`
  position: relative;
  cursor: pointer;
  margin-right: 40px;
  color: #555;
  justify-content: space-between;
`;
export const TopIconBadge = styled.span`
  position: absolute;
  top: -5px;
  right: 0px;
  background-color: red;
  color: white;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
`;

export const TopAvatar = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 60px;
  border-radius: 50%;
  cursor: pointer;
`;

export const NotificationBox = styled.div`
  width: 250px;
  height: 120px;
  background-color: white;
  position: absolute;
  top: 30px;
  right: -110px;
  z-index: 5;
  display: grid;
  box-shadow: 0px 3px 6px grey;
  border-radius: 12px;
`;

export const Card1 = styled.div`
  width: 100%;
  height: 35px;
  // background-color:pink;
  padding-left: 12px;
  display: flex;
`;
