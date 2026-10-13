/* Shared by the booking form and /api/demo-request: an international or
   local number with 7–15 digits; spaces, dots, dashes and brackets allowed. */

export const PHONE_MAX = 32;

export function isPhone(v: string) {
  const s = v.trim();
  if (s.length > PHONE_MAX || !/^\+?[\d\s().-]+$/.test(s)) return false;
  const digits = s.replace(/\D/g, "").length;
  return digits >= 7 && digits <= 15;
}
