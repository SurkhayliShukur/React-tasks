const phoneRegex = /^(\+994|0)(50|51|55|70|77|99)([0-9]{7})$/;

export const isValidPhone = (phone) => phoneRegex.test(phone);