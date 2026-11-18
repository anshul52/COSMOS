/**
 * Cosmos enquiries -> Google Sheet
 *
 * Paste this into the sheet's Apps Script editor (Extensions > Apps Script),
 * set SECRET below to the same value as ENQUIRY_WEBHOOK_SECRET on the website,
 * then Deploy > New deployment > Web app:
 *   Execute as: Me
 *   Who has access: Anyone
 * Copy the web app URL into ENQUIRY_WEBHOOK_URL on the website.
 */

const SECRET = "PASTE-THE-SAME-SECRET-AS-THE-WEBSITE";
const SHEET_NAME = "Enquiries";
const HEADERS = ["Received", "Name", "Email", "Phone", "Event date", "Experience", "Guests", "Message", "Status"];

function doPost(e) {
  try {
    const body = JSON.parse(e.postData.contents);
    if (body.secret !== SECRET) return json({ ok: false, error: "unauthorized" });

    const lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      const sheet = getSheet();
      sheet.appendRow([
        new Date(),
        clean(body.name),
        clean(body.email),
        clean(body.phone),
        clean(body.date),
        clean(body.experience),
        clean(body.guests),
        clean(body.message),
        "New",
      ]);
    } finally {
      lock.releaseLock();
    }
    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  }
}

// Creates the "Enquiries" tab with a bold, frozen header row the first time it runs
function getSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME, 0);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
    sheet.setFrozenRows(1);
    sheet.getRange("A:A").setNumberFormat("dd mmm yyyy, h:mm am/pm");
    sheet.getRange("B:H").setNumberFormat("@"); // keep phone numbers and dates as typed
    sheet.setColumnWidth(8, 360);
  }
  return sheet;
}

// Stops typed text from being run as a spreadsheet formula
function clean(value) {
  const s = String(value == null ? "" : value).trim();
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
