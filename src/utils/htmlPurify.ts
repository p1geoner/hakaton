import DOMPurify from 'isomorphic-dompurify';

export const htmlPurify = (html: string) => {
  if (!html) return '';

  const config = {
    ALLOWED_TAGS: ['span', 'p', 'ul', 'ol', 'li', 'strong', 'em', 'ins', 'br'],
    FORBID_ATTR: ['style'],
    FORBID_TAGS: ['style', 'script', 'iframe', 'video', 'img'],
  };

  return DOMPurify.sanitize(html, config);
};
