// app/routes/pdf-example.jsx
import { useRef } from 'react';
import 

export default function PDFExample() {
    const contentRef = useRef(null);

    const generatePDF = () => {
        if (contentRef.current) {
            html2pdf()
                .set({
                    margin: 1,
                    filename: 'sample.pdf',
                    image: { type: 'jpeg', quality: 0.98 },
                    html2canvas: { scale: 2 },
                    jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
                })
                .from(contentRef.current)
                .save();
        }
    };

    return (
        <div>
            {/* PDFにしたいコンテンツ */}
            <div ref={contentRef} style={{ padding: '20px', border: '1px solid #ccc' }}>
                <h1>PDFに変換される内容</h1>
                <p>この部分がPDFに変換されます。</p>
            </div>

            {/* PDF生成ボタン */}
            <button onClick={generatePDF}>PDFをダウンロード</button>
        </div>
    );
}
