import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import { shopUrl } from "../../config/url";
import ShopInfo from "./shopInfo/ShopInfo";
import ShopProfile from "./shopProfile/ShopProfile";
import { useEffect } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { myShopDataState } from "../../recoil/shop.recoil";

const StyledMyShop = styled.div`
  width: 100%;
  height: auto;
  margin-top: 220px;
`;

const getCurrentUrl = (pathname: string) => {
  const sortaionUrlArray = pathname.split("/");
  const sortationUrl = sortaionUrlArray[sortaionUrlArray.length - 1];

  return sortationUrl;
};

const MyShop = () => {
  const userId = useParams().userId;
  const [myShopData, setMyShopData] = useRecoilState(myShopDataState);

  useEffect(() => {
    const getShopInfo = async () => {
      try {
        const res = await axios.get(`${shopUrl.getShop}/${userId}`);

        if (res.status === 200) {
          const { products, shop } = res.data;

          setMyShopData((prevState) => {
            return { ...prevState, products, shop };
          });

          console.log(myShopData);
        }
      } catch (err: any) {
        alert("오류발생");
      }
    };

    getShopInfo();
  }, []);

  return (
    <StyledMyShop>
      <ShopProfile />
      <ShopInfo />
    </StyledMyShop>
  );
};

export default MyShop;
