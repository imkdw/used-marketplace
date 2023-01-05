import firebaseApp from "./firebase";
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";

const storage = getStorage(firebaseApp);

class FirebaseStorage {
  static uploadImage = async (productId: string, files: Express.Multer.File[]) => {
    files.map(async (file, index) => {
      const imageRef = ref(storage, `posts/${productId}/${productId}-${index}`);
      const metadata = { contentType: "image/jpeg" };

      /** Multer.memoryStorage에 정의된 file.buffer를 Storage에 업로드 */
      try {
        await uploadBytes(imageRef, file.buffer, metadata);
      } catch (err: any) {
        throw err;
      }

      /** 업로드된 파일에 대한 참조를 가져와서 다운로드링크 반환 */
      // const url = await getDownloadURL(ref(storage, `posts/${productId}/${productId}-${index}`));
    });
  };
}

export default FirebaseStorage;

export const removeFiles = async (productId: string, imageCount: number) => {
  for (let i = 0; i < imageCount; i++) {
    const imageRef = ref(storage, `posts/${productId}/${productId}-${i}`);
    await deleteObject(imageRef);
  }
};
