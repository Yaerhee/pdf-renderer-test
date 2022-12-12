import PDF from './assets/img/PDF.png'
import './App.css';
import PDFView from "./pdfView";
import {useState} from "react";

function App() {
    const [isClickViewer, setIsClickViewer] = useState(false)

    return (
        <div className="App">
            <header className="App-header">
                <img src={PDF} className="App-logo" alt="logo" onClick={() => setIsClickViewer(!isClickViewer)} />
                { isClickViewer && <PDFView />}
                <div className="textbox" style={{ marginTop: '50px' }}>
                    <div style={{ marginBottom: '30px' }}>
                        <b>Click PDF image!</b>
                    </div>
                    <div>Hope there should be <b>no error</b></div>
                    <div>while downloading PDF example 🤣</div>
                </div>
            </header>
        </div>
    );
}

export default App;
