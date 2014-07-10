function validateHTML(html)
{
    return html.match(/[^]*<\w+\s+[^]*id\s*=\s*(("(\w+)")|(\w+))(>|\s+[^]*>)[^]*(?=<\w+\s+[^]*id\s*=\s*(("\1"|\1)(>|\s+[^]*>)))/)==null;
}

console.log(validateHTML("<html><span id=1>\n<span id=1><\html>"));

console.log(validateHTML("<html><span id=1>\n<span id=2><\html>"));
