// components/PdfViewer.jsx
"use client";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
const PdfViewer = ({ url }) => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    return (
        <div className="h-screen w-screen">
            <Worker workerUrl="//cdnjs.cloudflare.com/ajax/libs/pdf.js/3.10.111/pdf.min.js">
                <Viewer
                    fileUrl={url}
                    plugins={[defaultLayoutPluginInstance]}
                />
            </Worker>
        </div>
    );
};
export default PdfViewer;