export function formatPhoneNumber(input: string): string {
  const onlyNums = input.replace(/[^0-9]/g, "");
  if (onlyNums.length >= 11) {
    return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3, 7)}-${onlyNums.slice(7, 11)}`;
  } else if (onlyNums.length >= 7) {
    return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3, 6)}-${onlyNums.slice(6)}`;
  } else if (onlyNums.length >= 4) {
    return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3)}`;
  } else {
    return onlyNums;
  }
}

export function formatBusinessNumber(value: string): string {
  const onlyNums = value.replace(/\D/g, "");

  const trimmed = onlyNums.slice(0, 10);

  if (trimmed.length < 4) {
    return trimmed;
  } else if (trimmed.length < 6) {
    return `${trimmed.slice(0, 3)}-${trimmed.slice(3)}`;
  } else {
    return `${trimmed.slice(0, 3)}-${trimmed.slice(3, 5)}-${trimmed.slice(5)}`;
  }
}
