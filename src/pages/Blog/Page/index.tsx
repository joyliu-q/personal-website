import React from "react";
import { Heading, Text, Box } from "@chakra-ui/react";
import ReactMarkdown from 'react-markdown';
import './style.css';
import { PUBLIC_URL } from "../../../utils";
import { BlogPageContainer } from "./BlogPageContainer"

export const BlogPage = ({title, date, path}: {title: string, date: string, path: string}) => {
  const [md, setMd] = React.useState("");
  
  function fetchMarkdown() {
    return fetch(`${PUBLIC_URL}/blog/${path}`).then(function (response) {
      let reader = response.body?.getReader();
      let decoder = new TextDecoder('utf-8');
      return reader?.read().then(function (result) {
        console.log(result)
        return decoder.decode(result.value);
      });
    });
  }

  React.useEffect(() => {
    fetchMarkdown().then(function (data) {
      console.log(data)
      if (data) {
        setMd(data);
      }
    });
  })
  return (
    <BlogPageContainer>
      <Heading>{title}</Heading>
      <Text>{date}</Text>
      <Box p={2}/>
      <ReactMarkdown children={md} skipHtml/>
    </BlogPageContainer>
  )
}
