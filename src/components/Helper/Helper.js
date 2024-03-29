const formatTime = (valueInDuration) => {
  const min = Math.floor(valueInDuration / 60);
  const sec = `0${valueInDuration % 60}`.slice(-2);
  return `${min}:${sec}`;
};

export function safeString(string) {
  let validateString = string;
  validateString = validateString
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
  return validateString;
}

export function uppString(string) {
  let validateString = string.toLowerCase();
  validateString = string[0].toUpperCase() + validateString.slice(1);
  return validateString;
}

export function lowString(string) {
  const validateString = string.toLowerCase();
  return validateString;
}

export default formatTime;
