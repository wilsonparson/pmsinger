var articles =
{
  "articles":  [
      {
          "article": {
              "authors": [
                  "Singer PM",
                  "Noppert G",
                  "Jenkins C"
              ],
              "title": "Gaps in Federal and State Screening of Tuberculosis in the United States"
          },
          "journal": {
              "title": "American Journal of Public Health",
              "volume": 107,
              "issue": 11,
              "pages": {
                "start": 1750,
                "end": 1750
              }
          },
          "publication_year": 2017,
          "url": "http://ajph.aphapublications.org/doi/full/10.2105/AJPH.2017.304076"
      },
      {
          "article": {
              "authors": [
                  "Singer PM",
                  "Tipirneni R",
                  "Nelson D"
              ],
              "title": "Consumer-Directed Health Care for Medicaid Patients: Past and Future Reforms"
          },
          "journal": {
              "title": "American Journal of Public Health",
              "volume": 107,
              "issue": 10,
              "pages": {
                "start": 1592,
                "end": 1594
              }
          },
          "publication_year": 2017,
          "url": "http://ajph.aphapublications.org/doi/full/10.2105/AJPH.2017.304014"
      },
      {
          "article": {
              "authors": [
                  "Willison C",
                  "Singer PM"
              ],
              "title": "Repealing the Affordable Care Act Essential Health Benefits: Threats and Obstacles"
          },
          "journal": {
              "title": "American Journal of Public Health",
              "volume": 107,
              "issue": 8,
              "pages": {
                  "start": 1225,
                  "end": 1226
              }
          },
          "publication_year": 2017,
          "url": "http://ajph.aphapublications.org/doi/full/10.2105/AJPH.2017.303888"
      },
      {
          "article": {
              "authors": [
                  "Greer SL",
                  "Singer PM"
              ],
              "title": "Addressing Zika in the United States: Polarization, Fragmentation, and Public Health"
          },
          "journal": {
              "title": "American Journal of Public Health",
              "volume": 107,
              "issue": 6,
              "pages": {
                  "start": 861,
                  "end": 862
              }
          },
          "publication_year": 2017,
          "url": "http://ajph.aphapublications.org/doi/full/10.2105/AJPH.2017.303772"
      },
      {
          "article": {
              "authors": [
                  "Singer PM"
              ],
              "title": "States of Reform: Polarization, Long-term services and supports, and Medicaid Waivers"
          },
          "journal": {
              "title": "State and Local Government Review",
              "volume": 48,
              "issue": 4,
              "pages": {
                  "start": 246,
                  "end": 258
              }
          },
          "publication_year": 2016,
          "url": "http://journals.sagepub.com/doi/abs/10.1177/0160323X17699526"
      },
      {
          "article": {
              "authors": [
                  "Singer PM"
              ],
              "title": "The Future of Health Reform: Section 1332 Waivers and State-Led Reform"
          },
          "journal": {
              "title": "The New England Journal of Medicine",
              "volume": 376,
              "pages": {
                  "start": 108,
                  "end": 111
              }
          },
          "publication_year": 2017,
          "url": "http://www.nejm.org/doi/full/10.1056/NEJMp1612830"
      },
      {
          "article": {
              "authors": [
                  "Oberlander J",
                  "Jones DK",
                  "Singer PM"
              ],
              "title": "In the ACA's Shadow: The Fate of the Children's Health Insurance Program"
          },
          "journal": {
              "title": "Health Affairs",
              "volume": 35,
              "issue": 10,
              "pages": {
                  "start": 1835,
                  "end": 1841
              }
          },
          "publication_year": 2016,
          "url": "http://www.healthaffairs.org/doi/10.1377/hlthaff.2016.0226"
      },
      {
          "article": {
              "authors": [
                  "Grogan CG",
                  "Singer PM",
                  "Jones DK"
              ],
              "title": "Rhetoric and Reform in Waiver States"
          },
          "journal": {
              "title": "Journal of Health Politics, Policy and Law",
              "volume": 42,
              "issue": 2,
              "pages": {
                  "start": 247,
                  "end": 248
              }
          },
          "publication_year": 2017,
          "url": "http://jhppl.dukejournals.org/content/42/2/247.long"
      },
      {
          "article": {
              "authors": [
                  "Greer SL",
                  "Singer PM"
              ],
              "title": "The United States Confronts Ebola: Suasion, Executive Action, and Fragmentation"
          },
          "journal": {
              "title": "Health Economics, Policy and Law",
              "volume": 12,
              "issue": 1,
              "pages": {
                  "start": 81,
                  "end": 104
              }
          },
          "publication_year": 2017,
          "url": "https://www.cambridge.org/core/journals/health-economics-policy-and-law/article/united-states-confronts-ebola-suasion-executive-action-and-fragmentation/4DE17D9B0D0F709C203E7746464A06FE"
      },
      {
          "article": {
              "authors": [
                  "Rozier MD",
                  "Singer PM"
              ],
              "title": "Money, Politics, and Morality in the Framing of Medicaid Expansion"
          },
          "journal": {
              "title": "American Journal of Public Health",
              "volume": 106,
              "issue": 2,
              "pages": {
                  "start": 203,
                  "end": 204
              }
          },
          "publication_year": 2016,
          "url": "http://ajph.aphapublications.org/doi/full/10.2105/AJPH.2015.302948"
      },
      {
          "article": {
              "authors": [
                  "Jones DK",
                  "Singer PM",
                  "Ayanian JZ"
              ],
              "title": "The Changing Landscape of Medicaid: Practical and Political Considerations for Expansion"
          },
          "journal": {
              "title": "JAMA",
              "volume": 311,
              "issue": 19,
              "pages": {
                  "start": 1965,
                  "end": 1966
              }
          },
          "publication_year": 2014,
          "url": "https://jamanetwork.com/journals/jama/fullarticle/1860323"
      }
  ]
};

/**Used for excluding commas when there are only two authors**/
Handlebars.registerHelper('unlessOnlyTwo', function(arrayLength, options) {
  if(arrayLength != 2) {
    return options.fn(this); // returns truthy
  }
  return options.inverse(this); //returns falsey
});

Handlebars.registerHelper('ifSingerPM', function(author, options) {
  if(author == 'Singer PM') {
    return options.fn(this);
  }
  return options.inverse(this);
});

Handlebars.registerHelper('ifArticleIsOnePage', function(startPage, endPage, options){
  if(startPage == endPage) {
    return options.fn(this);
  }
  return options.inverse(this);
});

var articlesTemplateScript = $("#articles").html();
var compiledTemplate = Handlebars.compile(articlesTemplateScript);
$("#rendered-articles").html(compiledTemplate(articles));
