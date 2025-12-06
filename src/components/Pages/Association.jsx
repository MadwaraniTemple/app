import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Chip,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import { BsPhone } from 'react-icons/bs';

// Import member photos from assets/members
import ManharnRathore from '../../assets/members/ManharnRathore.jpg';
import RamlalKanwar from '../../assets/members/RamlalKanwar.jpg';
import LaxmanKanwar from '../../assets/members/LaxmanKanwar.jpg';
import SahasRam from '../../assets/members/SahasRamKaushik.jpg';
import SantoshSingh from '../../assets/members/SantoshSinghKanwar.jpg';
import RaghunandanKanwar from '../../assets/members/RaghunandanKanwar.jpg';
import BajrangRathore from '../../assets/members/BajrangRathore.jpg';
import RamayanSingh from '../../assets/members/RamayanSinghKanwar.jpg';

// Styled Components
const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  borderRadius: '12px',
  overflow: 'hidden',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 20px rgba(0, 0, 0, 0.15)',
  },
}));

const StyledCardMedia = styled(CardMedia)({
  height: 300,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  width: 315,
});

const PageContainer = styled(Box)({
  backgroundColor: 'lightgoldenrodyellow',
  width: '100%',
  padding: '9% 5% 5% 5%',
  minHeight: '100vh',
});

const Association = () => {
  const { i18n } = useTranslation();

  // Member data structure with bilingual support
  const members = [
    {
      id: 1,
      nameEn: 'Manharan Rathore',
      nameHi: 'श्री मनहरण राठौर',
      designationEn: 'Patron',
      designationHi: 'संरक्षक',
      phone: '8889993695',
      villageEn: 'Kharwani',
      villageHi: 'खरवानी',
      photo: ManharnRathore,
    },
    {
      id: 2,
      nameEn: 'Kuldeep Singh Kanwar',
      nameHi: 'कुलदीप सिंह कंवर',
      designationEn: 'President',
      designationHi: 'अध्यक्ष',
      phone: '8815974605',
      villageEn: 'Mahora',
      villageHi: 'महोरा',
      photo: null,
    },
    {
      id: 3,
      nameEn: 'Ramlal Kanwar',
      nameHi: 'रामलाल कंवर',
      designationEn: 'Vice President',
      designationHi: 'उपाध्यक्ष',
      phone: '9174196641',
      villageEn: 'Jhinka',
      villageHi: 'झींका',
      photo: RamlalKanwar,
    },
    {
      id: 4,
      nameEn: 'Kirtan Binjhwar',
      nameHi: 'कीर्तन बिंझवार',
      designationEn: 'Vice President',
      designationHi: 'उपाध्यक्ष',
      phone: '7691924188',
      villageEn: 'Gitari',
      villageHi: 'गितारी',
      photo: null,
    },
    {
      id: 5,
      nameEn: 'Sahas Ram Kaushik',
      nameHi: 'सहस राम कौशिक',
      designationEn: 'Treasurer',
      designationHi: 'कोषाध्यक्ष',
      phone: '6263312710',
      villageEn: 'Beertarayi',
        villageHi: 'बीरतराई',
      photo: SahasRam,
    },
    {
      id: 6,
      nameEn: 'Lakshman Singh Kanwar',
      nameHi: 'लक्ष्मण सिंह कंवर',
      designationEn: 'Deputy Treasurer',
      designationHi: 'उपकोषाध्यक्ष',
      phone: '7354310314',
      villageEn: 'Mohora, Bilaspur',
        villageHi: 'महोरा, बिलासपुर',
      photo: LaxmanKanwar,
    },
    {
      id: 7,
      nameEn: 'Santosh Singh Kanwar',
      nameHi: 'संतोष सिंह कंवर',
      designationEn: 'Secretary',
      designationHi: 'सचिव',
      phone: '9303962397',
      villageEn: 'Jhinka',
      VillageHi: 'झींका',
      photo: SantoshSingh,
    },
    {
      id: 8,
      nameEn: 'Raghunandan Kanwar',
      nameHi: 'रघुनंदन कंवर',
      designationEn: 'Co-Secretary',
      designationHi: 'सह सचिव',
      phone: '8461005970',
      villageEn: 'Jhinka',
        villageHi: 'झींका',
      photo: RaghunandanKanwar,
    },
    {
      id: 9,
      nameEn: 'Bajrang Rathore',
      nameHi: 'बजरंग राठौर',
      designationEn: 'Administrator',
      designationHi: 'व्यवस्थापक',
      phone: '8951809938',
      villageEn: 'Kharwani',
        villageHi: 'खरवानी',
      photo: BajrangRathore,
    },
    {
      id: 10,
      nameEn: 'Ramayan Singh Kanwar',
      nameHi: 'रामायण सिंह कंवर',
      designationEn: 'Administrator',
      designationHi: 'व्यवस्थापक',
      phone: '9111706886',
      villageEn: 'Jhinka',
        villageHi: 'झींका',
      photo: RamayanSingh,
    },
    {
      id: 11,
      nameEn: 'Surender Kumar Kanwar',
      nameHi: 'सुरेंद्र कुमार कंवर',
      designationEn: 'Baiga (Mata Sevak)',
      designationHi: 'बैगा (माता सेवक)',
      phone: '7879000436',
      villageEn: 'Jhinka',
      villageHi: 'झींका',
      photo: null,
    },
    {
      id: 12,
      nameEn: 'Pawan Kanwar',
      nameHi: 'पवन कंवर',
      designationEn: 'Baiga',
      designationHi: 'बैगा',
      phone: '',
      villageEn: 'Jhinka',
      villageHi: 'झींका',
      photo: null,
    },
    {
      id: 13,
      nameEn: 'Bhuneshwar Kanwar',
      nameHi: 'भुनेश्वर कंवर',
      designationEn: 'Baiga',
      designationHi: 'बैगा',
      phone: '',
      villageEn: 'Jhinka',
      villageHi: 'झींका',
      photo: null,
    },
  ];

  const getName = (member) => (i18n.language === 'hi' ? member.nameHi : member.nameEn);
  const getDesignation = (member) => (i18n.language === 'hi' ? member.designationHi : member.designationEn);
  const getVillage = (member) => (i18n.language === 'hi' ? member.villageHi : member.villageEn);

  return (
    <PageContainer id="Association">
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 800,
              mb: 1,
              color: '#333',
              textAlign: 'center',
            }}
          >
            {i18n.language === 'hi' ? 'जय माँ मड़वारानी सेवा समिति (कलमी पेड़)' : 'Jay Maa Madwarani Seva Samiti (Kalmi Ped)'}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: '#666',
              fontWeight: 400,
              mb: 3,
              textAlign: 'center',
            }}
          >
            {i18n.language === 'hi'
              ? 'पहाड़ ऊपर, झींका महोरा (मड़वारानी), जिला-कोरबा, छत्तीसगढ़, भारत. पन्जियन क्रमांक - 13377'
              : 'Uphill, Jheenka Mahora (Madwarani), Distt-Korba, Chhattisgarh, India. Reigistration No.13377'}
          </Typography>
        </Box>

        {/* Members Grid */}
        <Grid container spacing={3}>
          {members.map((member) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={member.id} sx={{ display: 'flex' }}>
              <StyledCard sx={{ width: '100%' }}>
                <StyledCardMedia
                  image={member.photo}
                  title={getName(member)}
                />
                <CardContent sx={{ flexGrow: 1, textAlign: 'center', pt: 2 }}>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{
                      fontWeight: 700,
                      color: '#333',
                      mb: 1,
                    }}
                  >
                    {getName(member)}
                  </Typography>
                  <Chip
                    label={getDesignation(member)}
                    color="primary"
                    variant="outlined"
                    sx={{
                      fontWeight: 600,
                      fontSize: '0.875rem',
                      mb: 2,
                    }}
                  />
                  <Typography variant="caption" display="block" sx={{ color: '#666', mb: 1 }}>
                    {getVillage(member)}
                  </Typography>
                  {member.phone && (
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5, mt: 1 }}>
                      <BsPhone style={{ fontSize: '1rem', color: '#666' }} />
                      <Typography variant="caption" sx={{ color: '#666' }}>
                        {member.phone}
                      </Typography>
                    </Box>
                  )}
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </PageContainer>
  );
};

export default Association;
