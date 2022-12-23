import styled from "styled-components";
import { ChangeEvent, useRef, useState, useEffect } from "react";
import { UploadImage } from "../../../types/product";

const FormControl = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #dbdbdb;
  padding: 40px 0 40px 0;
`;

const Label = styled.label`
  width: 15%;
  height: 100%;
  font-size: 18px;
`;

const ImageCount = styled.span`
  font-size: 16px;
  color: #afafaf;
`;

const StyledImageUpload = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const ImageUploadBox = styled.div`
  width: 195px;
  height: 195px;
  cursor: pointer;
  background-color: #fafafd;
  border: 1px solid #dbdbdb;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const ImageUploadDesc = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const ImageUploadDescText = styled.p<{ fontWeight?: string }>`
  color: #4aa4ff;
  font-size: 14px;
  font-weight: ${(props) => props.fontWeight};
`;

const Images = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const UploadImagePreview = styled.div`
  width: 195px;
  height: 195px;
  cursor: pointer;
  background-color: #fafafd;
  border: 1px solid #dbdbdb;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const ImageRemoveButton = styled.button`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: rgba(30, 29, 41, 0.32);
  position: absolute;
  right: 5px;
  top: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageRemoveIcon = () => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.5 3.5L12.5 12.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.5 12.5L12.5 3.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

const ImageAddIcon = () => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_19_7)">
        <path
          d="M28 20V24H32V26.6667H28V30.6667H25.3333V26.6667H21.3333V24H25.3333V20H28ZM28.0107 4C28.7413 4 29.3333 4.59333 29.3333 5.324V17.3333H26.6667V6.66667H5.33333V25.332L18.6667 12L22.6667 16V19.772L18.6667 15.772L9.10267 25.3333H18.6667V28H3.98933C3.63842 27.9996 3.302 27.86 3.05399 27.6117C2.80598 27.3635 2.66667 27.0269 2.66667 26.676V5.324C2.66911 4.97384 2.8092 4.63869 3.05669 4.39096C3.30417 4.14322 3.63917 4.00279 3.98933 4H28.0107ZM10.6667 9.33333C11.3739 9.33333 12.0522 9.61428 12.5523 10.1144C13.0524 10.6145 13.3333 11.2928 13.3333 12C13.3333 12.7072 13.0524 13.3855 12.5523 13.8856C12.0522 14.3857 11.3739 14.6667 10.6667 14.6667C9.95942 14.6667 9.28115 14.3857 8.78105 13.8856C8.28095 13.3855 8 12.7072 8 12C8 11.2928 8.28095 10.6145 8.78105 10.1144C9.28115 9.61428 9.95942 9.33333 10.6667 9.33333V9.33333Z"
          fill="#DCDBE4"
        />
      </g>
      <defs>
        <clipPath id="clip0_19_7">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const ImageUpload = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [uploadImage, setUploadImage] = useState<UploadImage[]>([]);

  const clickImageUploadHandler = () => {
    fileInputRef.current?.click();
  };

  /** 업로드된 이미지 삭제 */
  const imageRemoveHandler = (id: number) => {
    const newUploadImage = uploadImage.filter((image) => image.id !== id);
    setUploadImage(newUploadImage);
  };

  /** 원본 이미지 보여주기 */
  const showOriginalImageHandler = () => {};

  /** 이미지 업로드 핸들러 */
  const imageUploadHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.currentTarget.files as FileList;

    /** 이미지 업로드 갯수 체크, 최대 8장 */
    if (files.length >= 9) {
      alert("이미지는 8장까지 업로드가 가능합니다.");
      return;
    }

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      /** 업로드된 파일이 이미지인지 검증 */
      if (!file.type.match("image/*")) {
        alert("이미지만 업로드가 가능합니다.");
        return;
      }

      /** 업로드된 이미지를 블롭형식으로 상태에 추가 */
      const reader = new FileReader();
      reader.onload = (e: any) => {
        setUploadImage((prevState) => {
          return [...prevState, { id: i, image: e.target.result }];
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const imageUploadDescData = [
    "* 상품 이미지는 640x640에 최적화 되어 있습니다.",
    "- 상품 이미지는 PC에서는 1:1, 모바일에서는 1:1.23 비율로 보여집니다.",
    "- 이미지는 상품 등록 시 정사각형으로 잘려서 등록됩니다.",
    "- 이미지를 클릭할 경우 원본 이미지를 확인할 수 있습니다.",
    "- 이미지를 클릭 후 이동하여 등록순서를 변경할 수 있습니다.",
    "- 큰 이미지일 경우 이미지가 깨지는 경우가 발생할 수 있습니다.",
    "최대 지원 사이즈인 640 X 640으로 리사이즈 해서 올려주세요.(개당 이미지 최대 10M)",
  ];

  return (
    <FormControl>
      <Label>
        상품이미지 <ImageCount>({uploadImage.length}/8)</ImageCount>
      </Label>
      <StyledImageUpload>
        <input type="file" accept="image/*" ref={fileInputRef} hidden onChange={imageUploadHandler} multiple />
        <Images>
          <ImageUploadBox onClick={clickImageUploadHandler}>
            <ImageAddIcon />
            <div style={{ fontSize: "1rem", color: "#9B99A9" }}>이미지 등록</div>
          </ImageUploadBox>
          {uploadImage.map((image) => (
            <UploadImagePreview onClick={showOriginalImageHandler} key={image.id}>
              <Image src={String(image.image)} />
              <ImageRemoveButton onClick={() => imageRemoveHandler(image.id)}>
                <ImageRemoveIcon />
              </ImageRemoveButton>
            </UploadImagePreview>
          ))}
        </Images>
        <ImageUploadDesc>
          {imageUploadDescData.map((data, index) => {
            if (index === 0) {
              return (
                <ImageUploadDescText key={index} fontWeight="bold">
                  {data}
                </ImageUploadDescText>
              );
            }

            return <ImageUploadDescText key={index}>{data}</ImageUploadDescText>;
          })}
        </ImageUploadDesc>
      </StyledImageUpload>
    </FormControl>
  );
};

export default ImageUpload;
