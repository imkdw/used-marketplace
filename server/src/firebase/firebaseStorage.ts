import firebaseApp from "./firebase";
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";

const storage = getStorage(firebaseApp);

export const uploadImageAndGetUrl = async (reviewId: string, files: Express.Multer.File[]) => {
  const imageUrls = await Promise.all(
    files.map(async (file, index) => {
      /** 신규 이미지에 대한 참조 생성 */
      const imageRef = ref(storage, `posts/${reviewId}/${reviewId}-${index}`);

      /** 메타데이터 정의 */
      const metadata = { contentType: "image/jpeg" };

      /** Multer.memoryStorage에 정의된 file.buffer를 Storage에 업로드 */
      await uploadBytes(imageRef, file.buffer, metadata);

      /** 업로드된 파일에 대한 참조를 가져와서 다운로드링크 반환 */
      const url = await getDownloadURL(ref(storage, `posts/${reviewId}/${reviewId}-${index}`));

      return url;
    })
  );

  return imageUrls;
};

export const removeFiles = async (reviewId: string, imageCount: number) => {
  for (let i = 0; i < imageCount; i++) {
    const imageRef = ref(storage, `posts/${reviewId}/${reviewId}-${i}`);
    await deleteObject(imageRef);
  }
};
