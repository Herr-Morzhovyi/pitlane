export function stripHtml(html: string | undefined): string {
  if (!html) {
    return '';
  }

  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = html;

  return tempDiv.textContent || tempDiv.innerText || '';
}
