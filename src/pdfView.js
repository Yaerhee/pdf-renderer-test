import {PDFViewer} from "@react-pdf/renderer";
import MyDocument from "./document";

export default function PDFView() {
    return (
        <PDFViewer>
            <MyDocument />
        </PDFViewer>
    )
}