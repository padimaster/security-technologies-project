import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  createIcon,
  Image
} from '@chakra-ui/react';
import background from '../assets/background.png';

export default function CallToActionWithAnnotation() {
  return (
    <>
      <Container 
        mr={0}
        w='98vw' 
        h='98vh'
        maxH={'100vh'}
        maxW={'100vw'}
        bgImage={background} 
        bgPosition="right"
        bgRepeat="no-repeat"
        position="relative"
        right="0"
    >
        <Stack
          as={Box}
          textAlign={'left'}
          spacing={{ base: 8, md: 14 }}
          px={{ base: 4, md: 8, lg: 16 }}
          py={{ base: 100, md: 150 }}>
          <Heading
            fontWeight={'bold'}
            fontSize={{ base: '4xl', sm: '4xl', md: '6xl', lg: '80px' }}
            lineHeight={'110%'}
            as={'h1'}>
            Tecnologías de <br /> Seguridad <br />
            <Text as={'span'} color={'#0D42C7'}>
              Grupo 6
            </Text>
          </Heading>
          <Text padding={2} rounded='lg' textAlign={'left'} fontWeight={'bold'} color={'gray.900'} pl={0} maxW={'900px'} bg={'rgba(256,256,256,0.1)'}>
          Sitio Web Seguro en Windows Server 2016
          </Text>
          <Image />
          
        </Stack>
      </Container>
    </>
  );
}

