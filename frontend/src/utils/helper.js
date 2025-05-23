export const appUrl = "http://localhost:3000/"

export const isValidUrl = (url) => {
    if (!url) return false;
    
    try {
      // Try to create a URL object
      const urlObj = new URL(url);
      
      // Check if protocol is http or https
      return urlObj.protocol === 'http:' || urlObj.protocol === 'https:';
    } catch (error) {
      // If URL constructor throws an error, the URL is invalid
      return false;
    }
  }