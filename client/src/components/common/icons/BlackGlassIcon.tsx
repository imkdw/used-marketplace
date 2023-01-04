import styled from "styled-components";

const StyledGlassIcon = styled.div`
  width: 30px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Glass = styled.img``;

const BlackGlassIcon = () => {
  return (
    <StyledGlassIcon>
      <Glass
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KICAgIDxwYXRoIGZpbGw9IiMxRTFEMjkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTIuMTUyIDguNjA4QTYuNDYzIDYuNDYzIDAgMCAxIDguNjEgMi4xNTJhNi40NjMgNi40NjMgMCAwIDEgNi40NTYgNi40NTYgNi40NjMgNi40NjMgMCAwIDEtNi40NTYgNi40NTYgNi40NjMgNi40NjMgMCAwIDEtNi40NTctNi40NTZtMTMuMjQ5IDUuMjdhOC41NSA4LjU1IDAgMCAwIDEuODE2LTUuMjdDMTcuMjE3IDMuODYyIDEzLjM1NSAwIDguNjEgMCAzLjg2MiAwIDAgMy44NjIgMCA4LjYwOGMwIDQuNzQ3IDMuODYyIDguNjA4IDguNjA5IDguNjA4YTguNTYgOC41NiAwIDAgMCA1LjI3LTEuODE2bDQuMjg0IDQuMjg0YTEuMDczIDEuMDczIDAgMCAwIDEuNTIxIDAgMS4wNzUgMS4wNzUgMCAwIDAgMC0xLjUyMmwtNC4yODMtNC4yODR6Ii8+Cjwvc3ZnPgo="
        alt="돋보기 아이콘"
      />
    </StyledGlassIcon>
  );
};

export default BlackGlassIcon;
