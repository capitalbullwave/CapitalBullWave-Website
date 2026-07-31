/**
 * Contact-form email checks — rejects dummy / disposable addresses.
 * Keep rules aligned with backend validateEmail().
 */

const DISPOSABLE_DOMAINS = new Set([
  "mailinator.com",
  "guerrillamail.com",
  "guerrillamail.net",
  "sharklasers.com",
  "grr.la",
  "10minutemail.com",
  "10minmail.com",
  "tempmail.com",
  "temp-mail.org",
  "temp-mail.io",
  "throwawaymail.com",
  "yopmail.com",
  "yopmail.fr",
  "trashmail.com",
  "trashmail.me",
  "getnada.com",
  "moakt.com",
  "fakeinbox.com",
  "mailnesia.com",
  "dispostable.com",
  "maildrop.cc",
  "mintemail.com",
  "mytemp.email",
  "tmpmail.org",
  "tmpmail.net",
  "emailondeck.com",
  "spam4.me",
  "mailcatch.com",
  "discard.email",
  "mailnull.com",
  "spamgourmet.com",
  "inboxkitten.com",
  "tempail.com",
  "burnermail.io",
  "mailsac.com",
]);

const DUMMY_LOCAL_PARTS = new Set([
  "test",
  "testing",
  "tester",
  "dummy",
  "fake",
  "sample",
  "example",
  "demo",
  "asdf",
  "asdfgh",
  "qwerty",
  "abc",
  "abcd",
  "abcdef",
  "xyz",
  "xxx",
  "aaa",
  "abc123",
  "user",
  "username",
  "email",
  "mail",
  "none",
  "null",
  "undefined",
  "admin",
  "noreply",
  "no-reply",
  "donotreply",
  "do-not-reply",
]);

const DUMMY_DOMAINS = new Set([
  "example.com",
  "example.org",
  "example.net",
  "test.com",
  "test.in",
  "testing.com",
  "fake.com",
  "fake.in",
  "dummy.com",
  "dummy.in",
  "sample.com",
  "email.com",
  "mail.com", // borderline but often used as placeholder; keep for dummy patterns only with dummy local
  "asdf.com",
  "abc.com",
  "xyz.com",
  "xxx.com",
  "localhost",
  "localdomain",
  "invalid",
  "domain.com",
  "emailprovider.com",
]);

const AUTH_EMAIL_MESSAGE =
  "Please provide an authenticated email address.";

const BASIC_EMAIL_RE =
  /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+$/i;

const looksLikeKeyboardMash = (local) => {
  if (local.length < 5) return false;
  // mostly same character: aaaaa, 11111
  if (/^(.)\1{4,}$/.test(local)) return true;
  // sequential keyboard rows
  const sequences = ["qwertyuiop", "asdfghjkl", "zxcvbnm", "1234567890"];
  const lower = local.toLowerCase();
  return sequences.some(
    (seq) => seq.includes(lower) || lower.includes(seq.slice(0, 5))
  );
};

/**
 * @param {string} email
 * @returns {{ success: boolean, message?: string }}
 */
export function validateAuthenticatedEmail(email) {
  const value = String(email || "").trim().toLowerCase();

  if (!value) {
    return { success: false, message: AUTH_EMAIL_MESSAGE };
  }

  if (value.length > 254 || !BASIC_EMAIL_RE.test(value)) {
    return { success: false, message: AUTH_EMAIL_MESSAGE };
  }

  const [local, domain] = value.split("@");
  if (!local || !domain) {
    return { success: false, message: AUTH_EMAIL_MESSAGE };
  }

  if (local.length < 2 || local.startsWith(".") || local.endsWith(".")) {
    return { success: false, message: AUTH_EMAIL_MESSAGE };
  }

  if (local.includes("..") || domain.includes("..")) {
    return { success: false, message: AUTH_EMAIL_MESSAGE };
  }

  const domainParts = domain.split(".");
  const tld = domainParts[domainParts.length - 1];
  if (domainParts.length < 2 || !tld || tld.length < 2) {
    return { success: false, message: AUTH_EMAIL_MESSAGE };
  }

  if (DISPOSABLE_DOMAINS.has(domain)) {
    return { success: false, message: AUTH_EMAIL_MESSAGE };
  }

  if (DUMMY_DOMAINS.has(domain)) {
    return { success: false, message: AUTH_EMAIL_MESSAGE };
  }

  const localBase = local.split("+")[0].replace(/[._-]/g, "");
  if (DUMMY_LOCAL_PARTS.has(local) || DUMMY_LOCAL_PARTS.has(localBase)) {
    return { success: false, message: AUTH_EMAIL_MESSAGE };
  }

  if (looksLikeKeyboardMash(localBase)) {
    return { success: false, message: AUTH_EMAIL_MESSAGE };
  }

  // reject obvious placeholders like name@name.com
  const domainName = domainParts[0];
  if (
    localBase === domainName &&
    ["test", "demo", "fake", "dummy", "sample", "mail", "email", "user"].includes(
      domainName
    )
  ) {
    return { success: false, message: AUTH_EMAIL_MESSAGE };
  }

  return { success: true };
}

export const AUTHENTICATED_EMAIL_MESSAGE = AUTH_EMAIL_MESSAGE;
