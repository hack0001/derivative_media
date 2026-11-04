<?xml version="1.0" encoding="UTF-8"?>
<!-- Makes /sitemap.xml readable in a browser. Search engines ignore this file. -->
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
  exclude-result-prefixes="s xhtml">
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>

  <!-- One titled table per section; empty sections are skipped -->
  <xsl:template name="group">
    <xsl:param name="heading"/>
    <xsl:param name="urls"/>
    <xsl:if test="count($urls) &gt; 0">
      <h2><xsl:value-of select="$heading"/></h2>
      <table><tbody>
        <xsl:for-each select="$urls">
          <tr>
            <td>
              <a href="{s:loc}"><xsl:value-of select="s:loc"/></a>
              <xsl:if test="xhtml:link"><span class="lang">EN · CY</span></xsl:if>
            </td>
            <td class="meta"><xsl:value-of select="s:lastmod"/></td>
          </tr>
        </xsl:for-each>
      </tbody></table>
    </xsl:if>
  </xsl:template>

  <xsl:template match="/">
    <html lang="en-GB">
      <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="robots" content="noindex"/>
        <title>XML sitemap · Derivative Media</title>
        <style>
          :root{--bg:#111418;--surface:#181c21;--line:#2a3038;--fg:#e9ecef;--muted:#8b939d;--accent:#f0533f;color-scheme:dark}
          @media (prefers-color-scheme: light){:root{--bg:#eef0f2;--surface:#fff;--line:#d3d8de;--fg:#14181d;--muted:#5b636d;--accent:#c4321f;color-scheme:light}}
          *{box-sizing:border-box}
          body{margin:0;background:var(--bg);color:var(--fg);font:16px/1.55 ui-sans-serif,system-ui,-apple-system,"Segoe UI",sans-serif}
          .wrap{max-width:1000px;margin:0 auto;padding:48px max(16px,env(safe-area-inset-left,0px)) 64px}
          .brand{font-weight:700;letter-spacing:-.01em;margin:0 0 28px;font-size:18px}
          .brand i{font-style:normal;color:var(--accent)}
          h1{font-size:clamp(32px,5vw,48px);letter-spacing:-.04em;line-height:1;margin:0 0 14px}
          .lead{color:var(--muted);max-width:62ch;margin:0 0 8px}
          .lead a{color:var(--accent)}
          .count{font:13px ui-monospace,Menlo,Consolas,monospace;color:var(--muted);margin:0 0 32px}
          h2{font:500 13px ui-monospace,Menlo,Consolas,monospace;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);margin:36px 0 10px}
          table{width:100%;border-collapse:collapse;background:var(--surface);border:1px solid var(--line);border-radius:12px;overflow:hidden}
          td{padding:12px 16px;border-top:1px solid var(--line);vertical-align:top}
          tr:first-child td{border-top:0}
          td a{color:var(--fg);text-decoration:none;word-break:break-all}
          td a:hover{color:var(--accent)}
          .meta{font:12.5px ui-monospace,Menlo,Consolas,monospace;color:var(--muted);white-space:nowrap;text-align:right}
          .lang{display:inline-block;margin-left:8px;font:11px ui-monospace,Menlo,monospace;border:1px solid var(--line);border-radius:999px;padding:1px 7px;color:var(--muted)}
          @media (max-width:600px){.meta{display:none}}
        </style>
      </head>
      <body>
        <div class="wrap">
          <p class="brand">derivative<i>.</i>media</p>
          <h1>XML sitemap</h1>
          <p class="lead">This is the sitemap search engines read. Looking for a page? The <a href="/sitemap">sitemap page</a> is easier to browse.</p>
          <p class="count"><xsl:value-of select="count(s:urlset/s:url)"/> pages</p>

          <xsl:call-template name="group">
            <xsl:with-param name="heading">Main pages</xsl:with-param>
            <xsl:with-param name="urls" select="s:urlset/s:url[not(starts-with(substring-after(substring-after(s:loc,'//'),'/'),'cy') or starts-with(substring-after(substring-after(s:loc,'//'),'/'),'websites') or starts-with(substring-after(substring-after(s:loc,'//'),'/'),'local-seo') or starts-with(substring-after(substring-after(s:loc,'//'),'/'),'for/') or starts-with(substring-after(substring-after(s:loc,'//'),'/'),'work/') or starts-with(substring-after(substring-after(s:loc,'//'),'/'),'areas/') or substring-after(substring-after(s:loc,'//'),'/')='sitemap')]"/>
          </xsl:call-template>
          <xsl:call-template name="group">
            <xsl:with-param name="heading">Websites</xsl:with-param>
            <xsl:with-param name="urls" select="s:urlset/s:url[starts-with(substring-after(substring-after(s:loc,'//'),'/'),'websites')]"/>
          </xsl:call-template>
          <xsl:call-template name="group">
            <xsl:with-param name="heading">Getting found on Google and AI search</xsl:with-param>
            <xsl:with-param name="urls" select="s:urlset/s:url[starts-with(substring-after(substring-after(s:loc,'//'),'/'),'local-seo')]"/>
          </xsl:call-template>
          <xsl:call-template name="group">
            <xsl:with-param name="heading">Community councils</xsl:with-param>
            <xsl:with-param name="urls" select="s:urlset/s:url[starts-with(substring-after(substring-after(s:loc,'//'),'/'),'for/')]"/>
          </xsl:call-template>
          <xsl:call-template name="group">
            <xsl:with-param name="heading">Work</xsl:with-param>
            <xsl:with-param name="urls" select="s:urlset/s:url[starts-with(substring-after(substring-after(s:loc,'//'),'/'),'work/')]"/>
          </xsl:call-template>
          <xsl:call-template name="group">
            <xsl:with-param name="heading">Areas</xsl:with-param>
            <xsl:with-param name="urls" select="s:urlset/s:url[starts-with(substring-after(substring-after(s:loc,'//'),'/'),'areas/')]"/>
          </xsl:call-template>
          <xsl:call-template name="group">
            <xsl:with-param name="heading">Welsh pages · Tudalennau Cymraeg</xsl:with-param>
            <xsl:with-param name="urls" select="s:urlset/s:url[starts-with(substring-after(substring-after(s:loc,'//'),'/'),'cy')]"/>
          </xsl:call-template>
          <xsl:call-template name="group">
            <xsl:with-param name="heading">Help</xsl:with-param>
            <xsl:with-param name="urls" select="s:urlset/s:url[substring-after(substring-after(s:loc,'//'),'/')='sitemap']"/>
          </xsl:call-template>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
