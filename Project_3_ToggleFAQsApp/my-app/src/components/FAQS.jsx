import { useState } from "react";
import { faqsData } from "./data";
import Faq from "./Faq";
import style from "./faqs.module.css";

const FAQS = () => {
  const [faqs] = useState(faqsData);
  return (
    <main className={style.container}>
      <h2 className={style.headingText}>FAQs</h2>
      <section>
        {faqs.map((faq) => {
          return <Faq key={faq.id} {...faq} />;
        })}
      </section>
    </main>
  );
};

export default FAQS;
