import { json, redirect } from "@remix-run/node"; // Remixのバックエンドで使用
import { Form, useActionData, useLoaderData } from "@remix-run/react"; // フロントエンドで使用
import prisma from "~/utils/prismaClient";
import { supabase } from "~/utils/supabaseClient";

// 定数: Supabaseのバケット名
const BUCKET_NAME = 'user_photos';
// ファイルアップロード時にファイルパスを保存する関数
async function uploadPhoto(userId: number, file: File) {
  try {
    const existingPhoto = await prisma.user_photos.findUnique({ where: { user_id: userId } });
    if (existingPhoto) {
      const fileName = existingPhoto.photo_url.split('/').pop();
      await supabase.storage.from(BUCKET_NAME).remove([`uploads/${userId}/${fileName}`]);
    }

    const { data, error } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(`uploads/${userId}/${file.name}`, file);

    if (error) {
      throw new Error(`Supabase file upload failed: ${error.message}`);  // ここでエラーをキャッチ
    }
    
    const filePath = `uploads/${userId}/${file.name}`;
    await prisma.user_photos.upsert({
      where: { user_id: userId },
      update: { photo_url: filePath },
      create: { user_id: userId, photo_url: filePath },
    });

    return filePath;  // 成功した場合はファイルパスを返す
  } catch (error) {
    console.error("Error in uploadPhoto function:", error);  // エラーメッセージをログに出力
    throw error;  // 上位にエラーを伝播
  }
}


// アクションハンドラー（ファイルをアップロード）
export const action = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const userId = Number(formData.get("userId")); // ユーザーIDを取得
  const file = formData.get("photo") as File;

  if (!file || !userId) {
    return json({ error: "User ID or file not provided" }, { status: 400 });
  }

  try {
    const photo = await uploadPhoto(userId, file);
    return redirect("/profile"); // アップロード後にリダイレクト
  } catch (error) {
    return json({ error: error.message }, { status: 500 });
  }
};

// Loaderで署名付きURLを生成して返す
export const loader = async () => {
  const BUCKET_NAME = 'user_photos';
  const userId=1;
  // データベースからファイルパスを取得
  const userPhoto = await prisma.user_photos.findUnique({
    where: { user_id: userId },  // user_idを正しく指定
  });
  console.log("Path")
  console.log(userPhoto)

  if (!userPhoto || !userPhoto.photo_url) {
    return json({ error: "Photo not found" }, { status: 404 });
  }

  // 署名付きURLを生成
  const { signedURL, error } = await supabase.storage
  .from(BUCKET_NAME)
  .createSignedUrl("uploads/1/2.jpg", 60); // 1時間有効


  const { data, er } = await supabase.storage
  .from(BUCKET_NAME)
  .list('uploads/1');

  if (er) {
    console.error("Error listing files:", er.message);
  } else {
    console.log("Files in bucket:", data); // ファイルリストを確認
  }
  return json({ signedURL });

  if (error) {
    console.error("Error generating signed URL:", error.message);
    return json({ error: error.message }, { status: 500 });
  } else if (!signedURL) {
    console.error("Signed URL is undefined");
    return json({ error: "Signed URL is undefined" }, { status: 500 });
  }
};





// フロントエンドコンポーネント
export default function PhotoUploadForm() {
  const actionData = useActionData(); // アクションの結果を取得
  const { signedURL } = useLoaderData(); // Loaderからのデータ
  console.log(signedURL);
  // const signedURL = null


    
  return (
    <div>
      <h1>Upload your photo</h1>
      {actionData?.error && <p style={{ color: "red" }}>{actionData.error}</p>}
      {signedURL && (
        <p>
          File uploaded successfully! Access it here:{" "}
          <a href={signedURL} target="_blank" rel="noopener noreferrer">
            {signedURL}
          </a>
        </p>
      )}
      <Form method="post" encType="multipart/form-data">
        <input type="hidden" name="userId" value={1} /> {/* ユーザーIDを隠しフィールドで渡す */}
        <input type="file" name="photo" accept="image/*"  required />
        <button type="submit">Upload Photo</button>
      </Form>
    </div>
  );
}
