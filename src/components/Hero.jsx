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
          py={{ base: 12, md: 150 }}>
          <Heading
            fontWeight={'bold'}
            fontSize={{ base: '2xl', sm: '4xl', md: '100px' }}
            lineHeight={'110%'}
            as={'h1'}>
            Tecnologías de <br /> Seguridad <br />
            <Text as={'span'} color={'#0D42C7'}>
              Grupo 6
            </Text>
          </Heading>
          <Text  textAlign={'left'} color={'gray.500'} pl={0} maxW={'900px'}>
            Monetize your content by charging your most loyal readers and reward
            them loyalty points. Give back to your loyal readers by granting
            them access to your pre-releases and sneak-peaks.
          </Text>
          <Image />
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <a href="#team">
                <Button
                colorScheme={'green'}
                bg={'green.400'}
                rounded={'full'}
                px={6}
                _hover={{
                    bg: 'green.500',
                }}>
                Get Started
                </Button>
                </a>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}

