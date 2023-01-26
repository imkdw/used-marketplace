import { Link } from "react-router-dom";
import styled from "styled-components";

import catImage from "../../../assets/images/shop/cat.jpg";

const StyledLeftProfile = styled.div`
  width: 30%;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  gap: 10px;
`;

const ProfileImageBackground = styled.div<{ backgroundImage: string }>`
  width: 106%;
  height: 106%;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  filter: blur(10px);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  z-index: 3;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  cursor: pointer;
`;

const LeftShopName = styled.div`
  color: #ffffff;
  z-index: 3;
`;

const ManageProductLink = styled(Link)`
  width: 45%;
  height: 40px;
  color: #ffffff;
  font-size: 13px;
  z-index: 3;
  border: 1px solid #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LeftProfile = () => {
  return (
    <StyledLeftProfile>
      <ProfileImageBackground backgroundImage={catImage} />
      <ProfileImage src={catImage} />
      <LeftShopName>#shopName</LeftShopName>
      <ManageProductLink to="/product/manage">내 상점 관리</ManageProductLink>
    </StyledLeftProfile>
  );
};

export default LeftProfile;
