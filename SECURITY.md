# Portfolio security and privacy review

Reviewed October 17, 2026. Changes remain local until committed and pushed.

## Findings and fixes

- No critical source-code vulnerabilities or credential patterns were identified. The scan covered working files and 70 unique blobs in 38 reachable Git commits, including 19 members of a historical Word archive. Pattern matching is not proof that every possible secret is absent; remote-only and unreachable objects were not inspected. No history was rewritten.
- No unsafe HTML insertion, dynamic code execution, untrusted input handling, remote JavaScript, external embeds, forms, databases, authentication, or runtime APIs were found. The small contact-dialog script uses event listeners and native dialog controls.
- There are no package manifests, lockfiles, application dependencies, or custom GitHub Actions workflows to audit. No package manager or build system was added.
- Fonts are now served locally. Inter and JetBrains Mono retain their bundled SIL Open Font Licenses and copyright notices in `assets/fonts/`. The two WOFF2 files total approximately 80 KB.
- External links opening new tabs use `rel="noopener noreferrer"`. Pages also declare a no-referrer policy. Resource URLs are relative to the site; no HTTP resources or mixed content remain in the source.
- No analytics, pixels, cookies, browser storage, visitor tracking, or automatic third-party requests are implemented. Contact uses email links. No cookie banner, contact form, or new visitor-data service was introduced.
- Phone numbers were removed from the contact dialogs and public resume. The public PDF has no document metadata, telephone annotation, or JavaScript actions. The supplied original PDF and older resume working notes remain local, ignored by Git and excluded from GitHub Pages output.
- Current images contain no EXIF/GPS tags. The new favicon is an original vector monogram; the previous character artwork was removed from current files because no usage permission was documented.
- `.gitignore` excludes common local credential files. Ignore rules do not protect secrets already tracked in Git, so future commits must still be reviewed.

## Mobile and functional checks

All three pages were checked in Chromium at 320, 360, 390, 768, and 1440 CSS pixels. No horizontal overflow or broken images were found, and local fonts loaded. Dialog open/close controls and the Escape key worked. Automatic network-request inspection found no third-party requests. Local links, cross-page anchors, scripts, and font assets were checked. Touch targets and narrow-screen navigation have responsive rules. The existing page design is preserved.

## GitHub Pages checks

The GitHub Pages API reports publication from `main` at `/`, custom domain `bhuang.dev`, and `https_enforced: true`. HTTPS returned successfully, and HTTP redirected to HTTPS. The apex A records matched GitHub Pages' four published addresses. The repository remains a static HTML/CSS/JavaScript site with no custom deployment workflow.

The `_github-pages-challenge-bryanmsh.bhuang.dev` TXT lookup returned no record. This does not establish the account's verification state, but domain ownership verification could not be confirmed and should be completed or checked manually. A `CNAME` file alone is not ownership verification.

## Remaining actions

1. **Priority: verify domain ownership.** In personal GitHub Settings → Pages, add `bhuang.dev`, publish GitHub's exact TXT challenge at the DNS provider, and click Verify. Keep the TXT record afterward. Avoid wildcard DNS, keep the registration renewed, and remove GitHub Pages DNS records before decommissioning the site. [GitHub domain verification](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages).
2. **Asset rights review.** Confirm permission to publish supplied photos, team/competition images, and project screenshots. Font licenses are included. Previous character icons and the deleted source artwork remain in existing Git history; confirm rights for those historical copies or arrange a deliberate history cleanup if needed. Their removal from current files does not remove historical copies.
3. **Public personal information.** Email, professional profile links, education, and city are intentionally public. Older commits still contain a phone number and normal Git author metadata. Removing current references does not erase prior publication, clones, or caches. History cleanup, if desired, is a separate coordinated operation.
4. **Account security.** Enable 2FA or passkeys on GitHub and the domain registrar, secure recovery methods, and grant collaborators and tokens only necessary access. Enable repository secret scanning and push protection where available. Review access periodically. If any workflows are added later, use minimal token permissions and pin external actions to reviewed commit hashes.
5. **Hosting privacy.** The site implements no visitor-data processing of its own; GitHub's hosting and the visitor's email service have their own processing policies. No new consent-dependent feature was introduced. Reassess privacy disclosures before adding analytics, forms, embeds, or other services.

HTTPS enforcement is already enabled; keep it enabled under repository Settings → Pages. [GitHub HTTPS guidance](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https).

No critical implementation issue remains identified. Domain verification and historical asset rights are the main outstanding checks; account settings and continued commit review are routine security recommendations. This review does not independently establish ownership of supplied assets or guarantee absence of all possible vulnerabilities.
