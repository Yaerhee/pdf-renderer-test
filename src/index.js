import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {PDFViewer, PDFDownloadLink} from "@react-pdf/renderer";

import PageWrap from './pageWrap';

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

const root = document.getElementById('root');
ReactDOM.render(
        <div>
            <Viewer />
            <PDFDownloadLink document={<PageWrap />}  fileName="test.pdf">
                download test PDF
            </PDFDownloadLink>
        </div>
, root);