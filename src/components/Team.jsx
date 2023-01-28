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
      <Wrap spacing='20px' justify="space-evenly">
        <WrapItem m={'0'}>
            <MemberCard
              src="/images/isai.jpeg"
              name="Isai Saransig"
              title="IT"
              description="Ingeniero de Software"
            />
        </WrapItem>
        <WrapItem>
            <MemberCard
              src="/images/ricardo.jpeg"
              name="Ricardo Sosa"
              title="IT"
              description="Ingeniero de Software"
            />
        </WrapItem>
        <WrapItem>
            <MemberCard
              src="/images/alex.jpeg"
              name="Alex Padilla"
              title="IT"
              description="Ingeniero de Software"
            />
        </WrapItem>
        <WrapItem>
            <MemberCard
              src="/images/cantu.jpeg"
              name="Andres Cantuna"
              title="IT"
              description="Ingeniero de Software"
            />
        </WrapItem>
        <WrapItem>
            <MemberCard
              src="/images/gabriel.jpeg"
              name="Steeven Panchi"
              title="IT"
              description="Ingeniero de Software"
            />
        </WrapItem>
      </Wrap>
      </Center>
    </Stack>
  );
};

export default Team;