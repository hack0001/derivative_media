// What a Welsh town or community council website must publish, and what good practice adds.
// Shared by the website checker tool and the council website research page, so they never disagree.
// Checked against the sources listed at the bottom, November 2026.

export type CheckItem = {
  id: string;
  label: string;          // the question, as the clerk would answer it
  law?: string;           // legal basis (required items only)
  fix: string;            // what to do if the answer is no
};

export const required: CheckItem[] = [
  { id: "contact", label: "The council's phone number, postal address and email (and the clerk's, if different)", law: "Local Government (Democracy) (Wales) Act 2013, s.55", fix: "Add a contact page with the council's phone, address and a council email address." },
  { id: "councillors", label: "Every councillor's name, how to contact them, their ward and any roles or committees", law: "Local Government (Democracy) (Wales) Act 2013, s.55", fix: "List every councillor with contact details, ward and roles, and mark co-opted members." },
  { id: "notices", label: "Meeting notices and agendas, at least three clear days before each meeting, saying how to attend", law: "Local Government Act 1972, Schedule 12, para. 26", fix: "Publish each agenda at least three clear days ahead, with the time, place, whether it's remote or in person, and whether the public can attend." },
  { id: "papers", label: "Papers for the business on the agenda, where reasonably practicable", law: "Local Government Act 1972, Schedule 12, para. 26(2)(aa)", fix: "Publish the reports and papers that go with each agenda, unless the item is confidential." },
  { id: "minutes", label: "Minutes of meetings, and the documents they refer to", law: "Local Government (Democracy) (Wales) Act 2013, s.55", fix: "Publish minutes after each meeting, newest first, with older years archived." },
  { id: "accounts", label: "Annual audited accounts", law: "Local Government (Democracy) (Wales) Act 2013, s.55", fix: "Publish each year's audited accounts (annual return) once the audit is complete." },
  { id: "publicNotices", label: "Public notices", law: "Local Government Act 1972, s.232", fix: "Post public notices on the website as well as on the noticeboard." },
  { id: "interests", label: "The register of members' interests", law: "Local Government Act 2000, s.81, as amended by the 2013 Act", fix: "Publish the register of members' interests and keep it up to date." },
  { id: "annualReport", label: "An annual report on the council's priorities, activities and achievements", law: "Local Government and Elections (Wales) Act 2021, s.52", fix: "Publish an annual report as soon as practicable after each financial year ends." },
  { id: "training", label: "A training plan for councillors and staff", law: "Local Government and Elections (Wales) Act 2021, s.67", fix: "Publish the training plan, and a new one within three months of each ordinary election." },
  { id: "eNotices", label: "A way for people to send the council notices electronically, such as an email address", law: "Local Government Act 1972, Schedule 12, para. 30C", fix: "Publish a council email address or online form that people can use to give the council notices." },
  { id: "accessibility", label: "An accessibility statement", law: "Public Sector Bodies (Websites and Mobile Applications) Accessibility Regulations 2018", fix: "Publish an accessibility statement saying how accessible the site is, what isn't, and how to report problems." },
];

export const goodPractice: CheckItem[] = [
  { id: "bilingual", label: "The website is in Welsh and English", fix: "Publish key pages in both languages. If the council has a Welsh Language Scheme, its online material should follow it." },
  { id: "genericEmail", label: "The council uses its own email address, not a personal Gmail or Hotmail one", fix: "Set up a council email address (Welsh Government guidance recommends a generic one) so it survives a change of clerk." },
  { id: "mobile", label: "The site is easy to use on a phone", fix: "Use a layout that adapts to phones: most residents will look on one." },
  { id: "secure", label: "The address starts with https and shows a padlock", fix: "Turn on HTTPS. Browsers warn visitors when a site isn't secure." },
  { id: "current", label: "The latest minutes are from the last two months", fix: "Publish minutes promptly after each meeting, even as drafts marked 'not yet approved'." },
  { id: "findable", label: "Searching Google for the council's name brings up the site first", fix: "Make sure the council's name is in the page titles, the site is in Google Search Console, and other local sites link to it." },
  { id: "selfService", label: "The clerk can update the site without paying a developer each time", fix: "Use a site with simple editing, so notices go up on time." },
];

export const checklistSources = [
  { title: "Access to information: guidance for community and town councils (Welsh Government)", url: "https://www.gov.wales/access-information-guidance-community-and-town-councils-html" },
  { title: "Local Government and Elections (Wales) Act 2021, section 52", url: "https://www.legislation.gov.uk/asc/2021/1/section/52" },
  { title: "Local Government and Elections (Wales) Act 2021, section 67", url: "https://www.legislation.gov.uk/asc/2021/1/section/67" },
  { title: "Public Sector Bodies (Websites and Mobile Applications) Accessibility Regulations 2018", url: "https://www.legislation.gov.uk/uksi/2018/952/contents/made" },
];
