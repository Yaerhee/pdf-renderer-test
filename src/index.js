import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {PDFViewer, PDFDownloadLink} from "@react-pdf/renderer";

import PageWrap from './pageWrap';
import Render from "./render";

const Viewer = () => {
    return (
        <div className="wrapper">
            <h2>Korean PDF Rendering Test</h2>
            <PDFViewer style={{ flex: 1 }}>
                <PageWrap />
            </PDFViewer>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <div>
            <Viewer />
            <PDFDownloadLink document={<PageWrap />}  fileName="test.pdf">
                download test PDF
            </PDFDownloadLink>
            <Render />
        </div>
    </React.StrictMode>
);