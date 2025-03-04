import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: { padding: 20 },
  section: { marginBottom: 10, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  text: { fontSize: 12, marginBottom: 5 },
  imageContainer: { 
    display: 'flex', 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 10 
  },
  image: { width: 100, height: 100, borderRadius: 50, marginRight: 10 },
  info: { display: 'flex', flexDirection: 'column' }
});

const CvDocument = ({ selectedCv }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>CV Məlumatları</Text>
        
        <View style={styles.imageContainer}>
          {selectedCv.imageUrl && <Image style={styles.image} src={selectedCv.imageUrl} />}
          <View style={styles.info}>
            <Text style={styles.text}>Ad: {selectedCv.fullName}</Text>
            <Text style={styles.text}>İxtisas: {selectedCv.experience}</Text>
            <Text style={styles.text}>E-poçt: {selectedCv.email || "Məlumat yoxdur"}</Text>
            <Text style={styles.text}>Telefon: {selectedCv.phone || "Məlumat yoxdur"}</Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default CvDocument;
