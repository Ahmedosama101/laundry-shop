"use client";
import React, { useState } from "react";

function FAQ() {
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  const questionsCol1 = [
    "What services do you offer?",
    "What are your operating hours?",
    "Where are you located?",
    "How can I contact you?",
    "Do you offer same-day service?",
    "Do you provide pick-up and delivery services?",
  ];

  const answersCol1 = [
    "We offer a range of laundry services including washing, drying, folding, ironing, dry cleaning, and stain removal.",
    "We are open from 9 AM to 11 PM, Saturday to Thursday. On friday we are open from 1 PM to 11 PM  and public holidays.",
    "Our shop is located at Lusail. You can find us next to Lusail Towers.",
    "You can reach us at +974 01234567 or email us at laundry@gmail.com . We are also available on facebook, instagram, and X.",
    "Yes, we offer same-day service for laundry dropped off before 10 AM. An additional fee may apply.",
    "Yes, we provide pick-up and delivery services within a 5-mile radius for an additional fee.",
  ];

  const questionsCol2 = [
    "How do I schedule a pick-up or delivery?",
    "What is your turnaround time for laundry services?",
    "Do you clean delicate fabrics?",
    "How do you handle stains?",
    "Can you wash items with special care instructions?",
    "What if I lose my ticket?",
  ];

  const answersCol2 = [
    "You can schedule a pick-up or delivery by calling us at +974 01234567 or booking online through our website.",
    "Our standard turnaround time is 24-48 hours. Dry cleaning services may take 2-3 days.",
    "Yes, we handle delicate fabrics with care and use appropriate cleaning methods for each fabric type.",
    "We pre-treat stains with specialized solutions before washing. However, we cannot guarantee complete removal of all stains.",
    "Yes, please inform us of any special care instructions, and we will follow them accordingly.",
    "If you lose your ticket, please provide a valid ID and a detailed description of your items. We will do our best to locate your laundry.",
  ];

  const totalQuestionsCol1 = questionsCol1.length;

  return (
    <div id="FAQ" className="md:py-32 bg-[#ECF1F8]">
      <section>
        <p className="text-gray-700 text-5xl text-center">
          Frequently Asked Questions
        </p>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
            <div className="flex-col rounded-lg ">
              <div className="flow-root">
                <div className="-my-8 divide-y divide-gray-100">
                  {questionsCol1.map((questionCol1, index) => (
                    <details
                      key={index}
                      className="group py-5 transition-all duration-300 ease-in-out [&_summary::-webkit-details-marker]:hidden"
                      open={openQuestionIndex === index}
                      onClick={() => toggleQuestion(index)}
                    >
                      <summary className="flex cursor-pointer items-center justify-between text-gray-900">
                        <h2 className="text-lg pl-5 font-medium">
                          {questionCol1}
                        </h2>
                        <span className="relative size-5 shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </span>
                      </summary>

                      <p className="mt-4 pl-5 leading-relaxed text-gray-700">
                        {answersCol1[index]}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex-col rounded-lg ">
              <div className="flow-root">
                <div className="-my-8 divide-y divide-gray-100">
                  {questionsCol2.map((questionCol2, index) => (
                    <details
                      key={index + totalQuestionsCol1}
                      className="group py-5 transition-all duration-300 ease-in-out [&_summary::-webkit-details-marker]:hidden"
                      open={openQuestionIndex === index + totalQuestionsCol1}
                      onClick={() => toggleQuestion(index + totalQuestionsCol1)}
                    >
                      <summary className="flex cursor-pointer items-center justify-between text-gray-900">
                        <h2 className="text-lg pl-5 font-medium">
                          {questionCol2}
                        </h2>
                        <span className="relative size-5 shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </span>
                      </summary>

                      <p className="mt-4 pl-5 leading-relaxed text-gray-700">
                        {answersCol2[index]}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FAQ;
