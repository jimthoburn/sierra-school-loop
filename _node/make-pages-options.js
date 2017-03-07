
'use strict';

exports.BASE_URL = 'http://shs-ausd-ca.schoolloop.com';

exports.HEAD_ELEMENT_HTML = `
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400i,700,700i|Roboto+Slab:100,300,400,700" />
<link rel="stylesheet" href="/css/shared.css" />
`;

exports.LOGO_HTML = `
<h2>
    <a href="/">
        <img src="/images/sierra.png" width="150" alt="" />
        Sierra High School
    </a>
</h2>
<p>Home of the Mighty Spartans</p>
`;

exports.FOOTER_HTML = `
<div class="contact">
  <div>
    <h2>Sierra High School</h2>
    <p>1134 South Barranca Avenue<br />Glendora, CA 91740</p>
    <p>(626) 852-8300</p>
  </div>
  <p><strong>Paul Hernandez, Principal</strong><br /><a href="mailto:phernandez@azusa.org">phernandez@azusa.org</a></p>
  <p><strong>Carmen Oronia-Jara, School Secretary</strong><br /><a href="mailto:carmenj@azusausd.k12.ca.us">carmenj@azusausd.k12.ca.us</a></p>
</div>

<div class="legal">
  <h2><a href="http://azusa.org"><img src="/images/azusa-district.png" width="100" height="100" alt="Azusa Unified School District" /></a></h2>
  <p>The District prohibits, at any district school or school activity, unlawful discrimination, harassment, intimidation, and bullying of any student based on the student’s actual race, color, ancestry, national origin, ethnic group, identication, age, religion, marital or parental status, physical or mental disability, sex, sexual orientation, gender, gender identity, or gender expression; the perception of one or more of such characteristics; or association with a person or group with one or more these actual or perceived characteristics.</p>
</div>
`;

exports.SITE_MAP_URL = 'http://shs-ausd-ca.schoolloop.com/portal/site_map?d=x';

exports.SECTIONS_DATA = [{
  title: 'Main Pages',
  pages: [
    {
      url: '/',
      title: 'Home'
    },
    {
      url: '/cms/month?d=x&group_id=1301752510678&month_id=0',
      title: 'Calendar'
    }
  ]
}];
