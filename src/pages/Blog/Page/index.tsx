import React from "react";
import { Box, useColorMode } from "@chakra-ui/react";
import ReactMarkdown from 'react-markdown';
import { BlogPageContainer } from "./BlogPageContainer";
import { createHighlighter } from 'shiki';
import './style.css';
import rehypeRaw from 'rehype-raw';

export const BlogPage = (
  { path }:
    { title: string, subtitle?: string, date: string, path: string }
) => {
  const colorMode = useColorMode();
  const [md, setMd] = React.useState("");
  const [highlighter, setHighlighter] = React.useState<any>(null);

  React.useEffect(() => {
    createHighlighter({
      themes: ['min-light', 'catppuccin-mocha'],
      langs: ['javascript', 'typescript', 'python', 'bash', 'css', 'html', 'markdown']
    }).then(hl => setHighlighter(hl));
  }, []);

  function fetchMarkdown() {
    return fetch(`/blog/${path}`).then(function (response) {
      let reader = response.body?.getReader();
      let decoder = new TextDecoder('utf-8');
      return reader?.read().then(function (result) {
        return decoder.decode(result.value);
      });
    });
  }

  React.useEffect(() => {
    fetchMarkdown().then(function (data) {
      if (data) {
        setMd(data);
      }
    });
  }, [path])

  const components = {
    code({ node, inline, className, children, ...props }: any) {
      const match = /language-(\w+)/.exec(className || '');
      const lang = match ? match[1] : 'text';
      
      if (!inline && highlighter) {
        const code = String(children).replace(/\n$/, '');
        const html = highlighter.codeToHtml(code, { lang, theme: colorMode.colorMode === 'dark' ? 'catppuccin-mocha' : 'min-light' });
        return (
          <Box 
            wordBreak="break-word"
            whiteSpace="pre-wrap"
            w="100%"
            position="relative"
            className="blog-code-block"
            maxH="300px"
            overflowY="auto"
            sx={{
              '& pre': {
                padding: '10px',
                whiteSpace: 'pre-wrap',
                wordWrap: 'break-word'
              }
            }}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        );
      }
      return <code className={className} {...props}>{children}</code>;
    }
  };

  return (
    <BlogPageContainer>
      <ReactMarkdown 
        className="blog" 
        components={components}
        remarkPlugins={[]}
        // @ts-ignore -- rehype-raw plugin type mismatch with react-markdown
        rehypePlugins={[[rehypeRaw, { passThrough: ['iframe', 'div', 'span', 'a', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }]]}
      >
        {md}
      </ReactMarkdown>
    </BlogPageContainer>
  )
}
