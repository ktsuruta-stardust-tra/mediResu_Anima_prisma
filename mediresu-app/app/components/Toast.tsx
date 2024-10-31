import { useEffect } from "react";

type ToastProps = {
    message: string;
    onClose: () => void;
};
export function Toast({ message, onClose }: ToastProps) {
    useEffect(() => {
        const timer = setTimeout(onClose, 2000); // 2秒後に自動で閉じる
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div style={{
            position: "fixed",
            top: "10px",
            right: "10px",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            zIndex: 1000,
        }}>
            {message}
        </div>
    );
}
