import React from "react";
import { useParams } from "react-router-dom";

// Use the same newsData or better move it to a shared file
const newsData = [
    {
      id: "news1",
      title: "Centre defends electoral bonds, says 'more contribution to ruling party is norm'",
      imgSrc: "news1.jpg",
      content: `
  • The government's electoral bonds scheme has faced legal challenges, and the Solicitor General presented the government's perspective before a 5-judge Constitution bench.
  • Solicitor General Tushar Mehta, appearing before the Supreme Court on Wednesday to defend the government's electoral bonds scheme, stated that a greater share of political contributions going to the ruling party is the norm.
  • He expressed concerns about revoking the scheme, warning it could undo progress. He said the ADR figures were voluntarily disclosed by political parties and not everything may have been declared.
  • Mehta reiterated, "More contributions going to the ruling party is the norm," addressing the petitioner’s claim that the scheme benefits ruling parties.
  • In response to the CJI’s question on why this is the norm, Mehta said donors give based on policies that benefit them. “They know they are not doing charity; it’s business-driven.”
  • On concerns that parties could circulate undeclared money, Mehta argued that this was not possible under the bonds scheme.
  • He insisted the scheme was confidential, not opaque, and warned that removing confidentiality would return the country to its 2018 status.
  • Mehta concluded by challenging petitioners to define the benefit of reverting to the previous system.
      `
    },
    {
      id: "news2",
      title: "'Why no health advisories to citizens?' Bombay High Court on dangerous AQI levels",
      imgSrc: "n3.jpg",
      content: `
  • The Bombay High Court asked the Maharashtra Advocate General to urgently address Mumbai’s deteriorating AQI.
  • The court (CJ DK Upadhyay & Justice Arif Doctor) ordered suo motu registration of a PIL and scheduled the Advocate General's appearance for Nov 6.
  • Advocate Darius Khambata was appointed amicus curiae.
  • The court cited media reports over the past weeks showing AQI ranged from moderate to severe, affecting all age groups.
  • Despite some efforts by the BMC, AQI levels remained unhealthy. Mumbai even ranked 7th globally in air pollution.
  • The bench noted no advisories or public awareness campaigns had been issued and stressed the urgent need for state action.
      `
    },
    {
      id: "news3",
      title: "Wife demanding to live separately from husband not always cruelty: Calcutta High Court",
      imgSrc: "news3.jpg",
      content: `
  • The Calcutta High Court ruled that a wife's demand to live separately doesn’t always amount to cruelty justifying divorce.
  • “Such demand may have reasonable grounds and doesn’t always merit severing marital ties,” said the court.
  • The husband alleged constant quarrels, control over finances, and desertion. The wife said she moved to study and denied all allegations.
  • She also accused the husband of an affair but still wanted to cohabit.
  • The court said normal marital conflicts don’t constitute cruelty unless proven to a high degree.
      `
    },
    {
      id: "news4",
      title: "Firecracker restrictions: NGT calls for strict compliance; says celebrations can't be at the cost of health",
      imgSrc: "news4.jpg",
      content: `
  • The NGT bench in Bhopal emphasized that celebrations must not infringe others’ right to health, especially for seniors and children.
  • The Supreme Court said there's no total ban, but firecrackers with Barium salts are banned.
  • Officials will be held personally liable for violations. The court said banned firecrackers are still being sold and used.
  • All authorities are bound to implement the directions fully and strictly.
      `
    },
    {
      id: "news5",
      title: "Bombay HC questions lack of health advisories for dangerous AQI levels",
      imgSrc: "news5.jpg",
      content: `
  • The Bombay High Court has urged the Maharashtra Advocate General to give urgent attention to the problem of worsening Air Quality Index (AQI) in Mumbai.
  • The panel, comprising Chief Justice DK Upadhyay and Justice Arif Doctor, instructed the High Court Registry to begin the process of registering a suo motu public interest litigation (PIL).
  • The court has scheduled the representation of the state government by the Advocate General for November 6.
  • The panel conveyed its intent to independently acknowledge the deteriorating air quality in Mumbai and its vicinity, based on information from various newspaper reports.
  • Advocate Darius Khambata has been designated as amicus curiae.
  • The court recognized that it had been examining multiple media reports indicating that AQI in Mumbai had fluctuated between moderate and severe levels for 15 to 20 days.
  • While the BMC has taken steps to address air pollution, the court noted these actions haven’t led to significant improvement in AQI.
  • The court stressed that there had been no essential health advisories or awareness efforts to help citizens protect themselves, despite Mumbai ranking as the 7th most polluted city globally.
      `
    },
    {
      id: "news6",
      title: "Can transgender person who underwent surgery complain under Domestic Violence Act?",
      imgSrc: "news6.jpg",
      content: `
  • The Supreme Court will examine if a transgender woman (post-surgery) qualifies as an “aggrieved person” under the Domestic Violence Act.
  • A man filed a special leave petition challenging the Bombay High Court's ruling that transgender individuals, post-sex reassignment surgery, are eligible under the Act.
  • The Bombay High Court had granted transgender persons the right to seek interim maintenance in domestic violence cases.
  • A bench of Justices Vikram Nath and Rajesh Bindal has granted leave and expedited the case, scheduling it for hearing in 2025.
  • The husband argues that the respondent was a transgender individual before marriage and lacks a legal certificate identifying her as a woman.
  • He contends that since the marriage was conducted under transgender customs, the respondent cannot be legally recognized as a woman under the Domestic Violence Act.
  • The petitioner further argues that the Act pertains only to women in domestic relationships and that the respondent's claim does not fall under its purview.
      `
    }
  ];
  
  // others


const RecentUpdatesDetails = () => {
  const { id } = useParams();
  const newsItem = newsData.find((item) => item.id === id);

  if (!newsItem) return <p>News article not found.</p>;

  return (
    <div className="news-details-container">
      <h1>{newsItem.title}</h1>
      <img src={`/${newsItem.imgSrc}`} alt={newsItem.title} className="news-detail-image" />
      <p className="news-content">{newsItem.content}</p>
    </div>
  );
};

export default RecentUpdatesDetails;
