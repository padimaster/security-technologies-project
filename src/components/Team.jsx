import React from "react";
import {
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
  Wrap, WrapItem,Center
} from "@chakra-ui/react";

import { MemberCard } from "./MemberCard";

const Team = () => {
  return (
    <Stack
      minH={"100vh"}
      direction={"column"}
      justify={"center"}
      id="sobre-nosotros"
      bg="#FFFF"
      id="team"
    >
      <Flex align={"center"} justify={"center"} mb='40px'>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading
            fontSize={{ base: "3xl", md: "4xl", lg: "80px" }}
            fontWeight={'bold'}
            textAlign="center"
            color={"#0D42C7"}
          >
              Team
          </Heading>
          <Text
            fontSize={{ base: "md", lg: "lg" }}
            color={"gray.500"}
            textAlign="center"
          >
            Nuestro equipo está formado por profesionales apasionados en ayudar
            a la comundiad
          </Text>
        </Stack>
      </Flex>
      <Center>
      <Wrap spacing='20px'>
        <WrapItem m={'0'}>
            <MemberCard
              src="/images/maria.png"
              name="MARIA ZAMORA"
              title="Presidenta"
              description="Líder de la Corporación Nueva Siembra"
            />
        </WrapItem>
        <WrapItem>
            <MemberCard
              src="/images/maria.png"
              name="MARIA ZAMORA"
              title="Presidenta"
              description="Líder de la Corporación Nueva Siembra"
            />
        </WrapItem>
        <WrapItem>
            <MemberCard
              src="/images/maria.png"
              name="MARIA ZAMORA"
              title="Presidenta"
              description="Líder de la Corporación Nueva Siembra"
            />
        </WrapItem>
        <WrapItem>
            <MemberCard
              src="/images/maria.png"
              name="MARIA ZAMORA"
              title="Presidenta"
              description="Líder de la Corporación Nueva Siembra"
            />
        </WrapItem>
      </Wrap>
      </Center>
    </Stack>
  );
};

export default Team;