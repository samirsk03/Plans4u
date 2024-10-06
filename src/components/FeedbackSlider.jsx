import { useEffect, useRef } from 'react';
import FeedbackCard from './FeedbackCard';

const FeedbackSlider = () => {
  const scrollRef = useRef(null);
  const feedbacks = [
    {
      feedback: "Plans4U made my business registration process so easy and hassle-free. Highly recommended!",
      name: "John Doe",
      designation: "Entrepreneur",
    },
    {
      feedback: "Very professional team! The licensing services were fast and efficient.",
      name: "Jane Smith",
      designation: "Business Owner",
    },
    {
      feedback: "Their GST registration service saved me a lot of time. Excellent support!",
      name: "Michael Brown",
      designation: "Freelancer",
    },
    {
      feedback: "I was really impressed with their customer service and attention to detail.",
      name: "Lisa Johnson",
      designation: "Restaurant Owner",
    },
    {
      feedback: "The Plans4U team was very supportive throughout the process of getting my ISO certification.",
      name: "Robert Williams",
      designation: "Project Manager",
    },
    {
      feedback: "They provide a solid foundation for any project, especially with their legal expertise.",
      name: "Emma Wilson",
      designation: "Consultant",
    },
    {
      feedback: "Their FSSAI registration services were prompt and easy to navigate.",
      name: "Sophia Davis",
      designation: "Food Business Owner",
    },
    {
      feedback: "Amazing team! Helped me a lot in registering my startup and getting all the necessary licenses.",
      name: "James Moore",
      designation: "Startup Founder",
    },
    {
      feedback: "Plans4U’s tax consultancy services were efficient and I felt in good hands.",
      name: "Olivia Martinez",
      designation: "Freelance Designer",
    },
    {
      feedback: "The team’s expertise helped me navigate the complexities of company registration.",
      name: "William Anderson",
      designation: "CEO at TechWorks",
    },
    {
      feedback: "A professional experience! Their customer service and follow-up are impressive.",
      name: "Mia Thompson",
      designation: "Fashion Brand Owner",
    },
    {
      feedback: "Highly satisfied with their services for trademark registration. Will definitely recommend.",
      name: "Liam Clark",
      designation: "Software Developer",
    },
  ];
  

  useEffect(() => {
    const scrollElement = scrollRef.current;
    let scrollInterval;

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        if (scrollElement) {
          scrollElement.scrollBy({ left: 2, behavior: 'smooth' });
          if (scrollElement.scrollLeft >= scrollElement.scrollWidth - scrollElement.clientWidth) {
            scrollElement.scrollTo({ left: 0, behavior: 'smooth' });
          }
        }
      }, 20); // Adjust the speed by changing this value
    };

    startScrolling();

    return () => clearInterval(scrollInterval); // Cleanup interval on component unmount
  }, []);

  return (
    <>
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#6EC1E4]">
      Feedbacks
    </h2>
    <div className="flex overflow-x-auto gap-4 m-8 scroll-smooth" ref={scrollRef}>
      {feedbacks.map((item) => (
        <FeedbackCard key={item.name} {...item} />
      ))}
    </div>
    </>

  );
};

export default FeedbackSlider;
