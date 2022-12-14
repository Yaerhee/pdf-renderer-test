import {renderToFile} from "@react-pdf/renderer";
export default function Render() {
    const exportPDF = () => {
        for (let i = 0; i <= 9; i++) {

        }
    }

    return (
        <div>
            <a onClick={() => exportPDF()}>Export PDF Files</a>
        </div>
    )
}