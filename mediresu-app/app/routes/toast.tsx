import { useState } from "react";
import { Toast } from "~/components/Toast";

export default function App() {
    const [toastMessage, setToastMessage] = useState("");

    const showToast = (message) => {
        setToastMessage(message);
        setTimeout(() => setToastMessage(""), 1000); // 2秒後にメッセージをクリア
    };

    return (
        <div className="text-red-500">
            <button onClick={() => showToast("これはトーストメッセージです")}>
                トーストを表示
            </button>
            {toastMessage && <Toast message={toastMessage} onClose={() => setToastMessage("")} />}

        </div>
    );
}
