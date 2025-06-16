export const getImagePath = (path: string): string => {
  const stagRelativePath = import.meta.env.VITE_STAG_RELATIVE_PATH || '';
  
  // If the path already starts with stagRelativePath, return as is
  if (path.startsWith(stagRelativePath)) {
    return path;
  }
  
  // If path starts with /, replace it with stagRelativePath
  if (path.startsWith('/')) {
    return path.replace('/', stagRelativePath);
  }
  
  // Otherwise, just prepend stagRelativePath
  return `${stagRelativePath}${path.startsWith('/') ? path.slice(1) : path}`;
}; 