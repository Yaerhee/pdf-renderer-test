import React from 'react';
import { Document, Font, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import PretendardExtraBold from './assets/fonts/Pretendard-ExtraBold.ttf'

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});

Font.register({
    family: 'PretendardExtraBold',
    src: PretendardExtraBold,
})

// Create Document Component
const MyDocument = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text>한글이 잘 나와야 할텐데 말입니다</Text>
            </View>
            <View style={styles.section}>
                <Text>프리텐다드 폰트까지는 설정하고 자야하지 말입니다?</Text>
            </View>
        </Page>
    </Document>
);

export default MyDocument