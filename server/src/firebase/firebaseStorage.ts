import { UploadImage } from "../types/product";
import firebaseApp from "./firebase";
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";

const storage = getStorage(firebaseApp);

class FirebaseStorage {
  /**
   * 상품에 등록된 이미지를 스토리지에 업로드하고 이미지들의 URL을 반환
   * @param productId {string} 상품 id
   * @param files {UploadImage[]} 배열 형식의 업로드된 이미지들
   * @returns {string[]} 업로드된 이미지들의 URL을 저장한 배열
   */
  static uploadImageAndGetUrl = async (
    productId: string,
    files: UploadImage[]
  ): Promise<string[]> => {
    const imageUrls = await Promise.all(
      files.map(async (file, index) => {
        const imageRef = ref(storage, `product/${productId}/${productId}-${index}`);
        const metadata = { contentType: "image/jpeg" };

        /** Multer.memoryStorage에 정의된 file.buffer를 Storage에 업로드 */
        try {
          const buffer = Buffer.from(file.buffer.data);
          await uploadBytes(imageRef, buffer, metadata);
        } catch (err: any) {
          throw err;
        }

        /** 업로드된 파일에 대한 참조를 가져와서 다운로드링크 반환 */
        const imageUrl = await getDownloadURL(
          ref(storage, `product/${productId}/${productId}-${index}`)
        );

        return imageUrl;
      })
    );

    return imageUrls;
  };
}

export default FirebaseStorage;

export const removeFiles = async (productId: string, imageCount: number) => {
  for (let i = 0; i < imageCount; i++) {
    const imageRef = ref(storage, `posts/${productId}/${productId}-${i}`);
    await deleteObject(imageRef);
  }
};
