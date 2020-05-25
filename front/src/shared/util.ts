export const upperCase = (str: string): string => {
  return (str || '').replace(/[a-z]/g, function(ch) {return String.fromCharCode(ch.charCodeAt(0) & ~32);})
}

export const nl2br = (str: string): string => {
  return (str || '').replace(/\r?\n/g, '<br>')
}
