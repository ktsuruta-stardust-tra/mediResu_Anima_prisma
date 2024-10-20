import { json, redirect } from "@remix-run/node";
import { useLoaderData, Form } from "@remix-run/react";
import prisma from "~/utils/prismaClient";
import { useState } from "react";


export const loader = async ({ params }) => {
  const userId = 1; // 仮に設定
  const photo = await prisma.user_photos.findUnique({
    where: { user_id: userId },
  });

  return json({ photo });
};

export const action = async ({ request }) => {
    const userId = 1; // 仮に設定
    const formData = await request.formData();
    const base64Image = formData.get("base64");
  
    if (!base64Image) {
      return json({ error: "No image provided" }, { status: 400 });
    }
  
    // `findUnique`は不要、`upsert`のみで処理
    await prisma.user_photos.upsert({
      where: { user_id: userId },         // ユニークキーで検索
      update: { photo_url: base64Image }, // 存在すれば更新
      create: {                           // 存在しなければ新規作成
        user_id: userId,
        photo_url: base64Image,
      },
    });
  
    return redirect("/photo");
  };

export default function PhotoUploader() {
  const { photo } = useLoaderData();
  const [base64, setBase64] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log("PPPPPPPPPPPPPPP")
    console.log(file)
    console.log("KKKKKKKKKKKKKKKKKKKK")
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result?.toString();
        console.log(base64String);
        setBase64(base64String || null);
      };
      reader.readAsDataURL(file); // Base64形式に変換
      

    }
  };




  return (
    <div>
      <h1>Photo Upload</h1>
      {photo ? (
        <img src={photo.photo_url} alt="User Photo" style={{ width: "200px" }} />
      ) : (
        <p>No photo uploaded yet.</p>
      )}

      <Form method="post">
        <input type="file" name="photo" onChange={handleFileChange} />
        <input type="hidden" name="base64" value={base64 || ""} />
        <button type="submit" disabled={!base64}>
          Upload Photo
        </button>
      </Form>
    </div>
  );
}
