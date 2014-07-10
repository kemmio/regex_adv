/*
 Validates C# method signature
 according to c# conventions, such as
 method can not be virtual and overrided
 method can not be virtual or overrided if static
 ref/out/params calling conventions
 async methods can return only Task/Task<T>/void
 */
function validateCSHARP(csharp)
{
    return csharp.match(/^((^\s*(public|protected|private)\s+(static\s+(?!(override|virtual)\s+)|\s*(?!static))((override\s+(?!virtual|static)|virtual\s+(?!override|static))|\s*(?!virtual|override)))|^(?!\s*(public|protected|private)\s+)\s*(static)?)\s*(async(?=\s+(Task|Task<[\w_]+>|void)\s+)|\s*(?!async))\s*([\w_]+|([\w_])+<([\w_])+>)\s+[\w_]+\(\s*(\s*|(ref(?!\s+(out|ref))|out(?!\s+ref|out)|\s*(?!ref|out))\s*[\w_]+\s+[\w_]+\s*(,\s*((ref(?!\s+out|ref))|(out(?!\s+ref|out))|(\s*(?!ref|out)))\s*[\w_]+\s+[\w_]+\s*)*|params\s+[\w_]+\s*\[\]\s*[\w_]+\s*)\)\s*{(.|\n)*}$/) != null;
}


console.log(validateCSHARP(" protected  virtual Task array(int a, ref int a){}"));