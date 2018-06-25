export const article01 = `
# Hello

I am trying to work with React & markdown!

\`Hello\`

<blockquote>
    This blockquote will change based on the HTML settings above.
</blockquote>

\`\`\`js
var React = require('react');
var Markdown = require('react-markdown');

React.render(
    <Markdown source="# Your markdown here" />,
    document.getElementById('content')
);
\`\`\`

| Feature | Support |
| ------ | ----------- |
| tables | ✔ |
| alignment | ✔ |
| wewt | ✔ |
`;