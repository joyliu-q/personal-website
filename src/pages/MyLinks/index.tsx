import { Heading, Flex, Container, VStack, Center, Input, InputGroup, InputLeftAddon, Button, FormControl, FormErrorMessage } from '@chakra-ui/react'
import React from 'react';
import { Link } from '../../API';
import NavBar from '../../components/NavBar'
import { addLink, getLinks, THEME_COLORS, THEME_COLORS_EXTENDED } from '../../utils';
import LinkCard from './LinkCard';
import { Field, Form, Formik } from "formik";

function isValidUrl(str: string) {
  let url;

  try {
    url = new URL(str);
  } catch (_) {
    return false;
  }

  return url.protocol === "http:" || url.protocol === "https:";
}

const MyLinks = (_props: any) => {
  const [links, setLinks] = React.useState([] as Link[]);
  async function fetchData() {
    const data = await getLinks();
    setLinks(data);
  }
  React.useEffect(() => {
    fetchData();
  }, [])

  function validateFrom(value: string) {
    let error
    if (!value) {
      error = 'Input is required'
    } else if (!isValidUrl(value)) {
      error = "Input must be a valid URL"
    }
    return error
  }

  return (
    <Flex flexDir="column" minH="100vh">
      <NavBar currentPage={"/projects"} />
      <Flex minH="calc(100vh - 60px)" className='container-bg' flexDir="column" >
        <Flex alignContent="center" justifyContent="center" p={[0, 4]}>
          <Container maxW='container.lg' bgColor="#FFFFFF" p={[4, 8]} borderRadius={4}>
            <Heading as='h1' fontSize="6xl" textAlign={"center"}>
              Create short link
            </Heading>
            <Center borderRadius={4} bgColor={THEME_COLORS.accent} minHeight="50vh">
              <Formik
                initialValues={{ from: '', to: undefined }}
                onSubmit={(values, actions) => {
                  setTimeout(async () => {
                    console.log(JSON.stringify(values, null, 2));
                    await addLink(values);
                    await fetchData();
                    actions.setSubmitting(false)
                  }, 1000)
                }}
              >
                {(props) => (
                  <Form>
                    <Flex flexDir="column">
                      <VStack>
                        <Field name='from' validate={validateFrom}>
                          {({ field, form }: { field: any, form: any }) => (
                            <FormControl isInvalid={form.errors.from && form.touched.from}>
                              <InputGroup size='lg'>
                                <InputLeftAddon children='From: ' />
                                <Input {...field} id='from' name='from' placeholder='https://joyliu.dev' size='lg' bgColor={THEME_COLORS_EXTENDED.inputBg} />
                              </InputGroup>
                              <FormErrorMessage>{form.errors.from}</FormErrorMessage>
                            </FormControl>
                          )}
                        </Field>
                        <Field name='to'>
                          {({ field, form }: { field: any, form: any }) => (
                            <FormControl isInvalid={form.errors.to && form.touched.to}>
                              <InputGroup size='lg'>
                                <InputLeftAddon children='go.joyliu.dev/' />
                                <Input {...field} id='to' name="to" placeholder='Path (Optional)' size='lg' bgColor={THEME_COLORS_EXTENDED.inputBg} />
                              </InputGroup>
                              <FormErrorMessage>{form.errors.to}</FormErrorMessage>
                            </FormControl>
                          )}
                        </Field>
                        <Button isLoading={props.isSubmitting}
                          type="submit" colorScheme="whiteAlpha" bgColor={THEME_COLORS.lightAccent} textColor={THEME_COLORS.text} size="lg">Create Link</Button>
                      </VStack>
                    </Flex>
                  </Form>
                )}</Formik>
            </Center>
            <Center borderRadius={4} bgColor={THEME_COLORS.lightAccent} minHeight="50vh">
              {links.length === 0 &&
                <>No shortlinks created!</>
              }
              <VStack>
                {links.map(link => <LinkCard link={link} />)}
              </VStack>
            </Center>
          </Container>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default MyLinks;