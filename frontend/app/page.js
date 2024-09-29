import Image from "next/image";
import React from "react";

const reservationSchedule = {
  21: {
    "17:00": false,
    "17:30": true,   // Reserved
    "18:00": false,
    "18:30": true,   // Reserved
    "19:00": false,
    "19:30": false,
    "20:00": true,   // Reserved
    "20:30": false,
  },
  22: {
    "17:00": true,   // Reserved
    "17:30": false,
    "18:00": false,
    "18:30": true,   // Reserved
    "19:00": false,
    "19:30": false,
    "20:00": false,
    "20:30": true,   // Reserved
  },
  23: {
    "17:00": false,
    "17:30": false,
    "18:00": true,   // Reserved
    "18:30": false,
    "19:00": true,   // Reserved
    "19:30": false,
    "20:00": false,
    "20:30": false,
  },
  25: {
    "17:00": true,   // Reserved
    "17:30": false,
    "18:00": false,
    "18:30": false,
    "19:00": false,
    "19:30": false,
    "20:00": true,   // Reserved
    "20:30": false,
  },
  24: {
    "17:00": false,
    "17:30": false,
    "18:00": false,
    "18:30": true,   // Reserved
    "19:00": false,
    "19:30": true,   // Reserved
    "20:00": false,
    "20:30": false,
  },
  26: {
    "17:00": false,
    "17:30": true,   // Reserved
    "18:00": false,
    "18:30": false,
    "19:00": true,   // Reserved
    "19:30": false,
    "20:00": false,
    "20:30": false,
  },
  27: {
    "17:00": false,
    "17:30": false,
    "18:00": true,   // Reserved
    "18:30": false,
    "19:00": false,
    "19:30": false,
    "20:00": true,   // Reserved
    "20:30": false,
  },
};

const Page = () => {
  return (
    <div className="w-full min-h-screen">
      {/* Header */}
      <header dir="rtl" className="flex justify-between items-center w-full h-20 border-black border-b-2 px-10">
        <span>تتو آرت</span>
        <nav className="flex justify-center items-center gap-5">
          <a href="#about" className="hover:underline">درباره ما</a>
          <a href="#services" className="hover:underline">خدمات</a>
          <a href="#gallery" className="hover:underline">گالری</a>
          <a href="#contact" className="hover:underline">تماس با ما</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="w-full pt-20 pb-10">
        <div className="w-[20rem] h-[28rem] relative mx-auto">
          <Image
            src="/images/hero.jpg"
            alt="Tattoo art hero image"
            fill
            placeholder='empty'
            priority
            sizes="100%"
            className="rounded-t-full object-cover"
          />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" dir="rtl" className="w-full flex flex-wrap justify-between py-20 px-10">
        <div className="w-full md:w-1/4 p-4">
          <h3 className="font-bold mb-2">عنوان ۱</h3>
          <p>توضیحات خدمات ۱.</p>
        </div>
        <div className="w-full md:w-1/4 p-4">
          <h3 className="font-bold mb-2">عنوان ۲</h3>
          <p>توضیحات خدمات ۲.</p>
        </div>
        <div className="w-full md:w-1/4 p-4">
          <h3 className="font-bold mb-2">عنوان ۳</h3>
          <p>توضیحات خدمات ۳.</p>
        </div>
        <div className="w-full md:w-1/4 p-4">
          <h3 className="font-bold mb-2">عنوان ۴</h3>
          <p>توضیحات خدمات ۴.</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full flex flex-col md:flex-row">
        <div className="relative w-full md:w-6/12 h-[50vh] md:h-[32vw]">
          <Image
            src="/images/about-us.jpg"
            alt="About Tattoo Art"
            fill
            placeholder='empty'
            priority
            sizes="100%"
            className="object-cover"
          />
        </div>
        <div dir="rtl" className="p-10 md:w-6/12 bg-secondary">
          <h2 className="text-2xl font-bold mb-4 ">درباره ما</h2>
          <p>
            ما در تتو آرت با تیمی حرفه‌ای از هنرمندان تتو فعالیت می‌کنیم تا ایده‌های هنری شما را بر روی پوست به واقعیت تبدیل کنیم.
            ما از بهترین تجهیزات و مواد استفاده می‌کنیم تا به شما تجربه‌ای مطمئن و بهداشتی ارائه دهیم.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" dir="rtl" className="w-full flex justify-center items-center py-10">
        <div className="max-w-xl text-right">
          <h2 className="text-2xl font-bold mb-4">محصولات ما</h2>
          <p>
            ما محصولات متنوعی از جمله پمادهای مراقبتی بعد از تتو، تی‌شرت‌های با طرح‌های اختصاصی و ابزارهای تتو ارائه می‌دهیم.
          </p>
        </div>
      </section>

      {/* Customer Feedback Section */}
      <section dir="rtl" className="w-full flex justify-center items-center py-10">
        <div className="max-w-xl text-right">
          <h2 className="text-2xl font-bold mb-4">نظرات مشتریان</h2>
          <blockquote>
            "من از خدمات تتو آرت بسیار راضی هستم! هنرمندان بسیار حرفه‌ای بودند و تمام روند تتو کاملاً بهداشتی و راحت بود."
            <br />
            <cite>- علی از تهران</cite>
          </blockquote>
          <blockquote className="mt-4">
            "تتوی من واقعاً عالی شد! طرحی که در ذهن داشتم را بهتر از چیزی که فکر می‌کردم اجرا کردند."
            <br />
            <cite>- سارا از شیراز</cite>
          </blockquote>
        </div>
      </section>

      {/* Reservation Schedule */}
      <section dir="rtl" className="w-full flex flex-col justify-center items-center py-10">
        <h2 className="text-2xl font-bold mb-4">برنامه رزرو</h2>
        <div className="w-full flex flex-col md:flex-row justify-center gap-5">
          {Object.entries(reservationSchedule).map(([day, slots]) => (
            <div key={day} className="mb-4">
              <h3 className="font-bold">{day}</h3>
              <ul className="flex flex-col gap-3 items-center">
                {Object.entries(slots).map(([time, isReserved]) => (
                  <li key={time} className={`rounded-md px-3 ${isReserved ? 'opacity-20' : ''}`}>
                    {time}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" dir="rtl" className="w-full flex justify-center items-center py-10">
        <div className="max-w-xl text-right">
          <h2 className="text-2xl font-bold mb-4">تماس با ما</h2>
          <p>برای رزرو وقت یا مشاوره می‌توانید با ما تماس بگیرید:</p>
          <p>تلفن: ۰۲۱-۱۲۳۴۵۶۷۸</p>
          <p>ایمیل: info@tattooart.com</p>
        </div>
      </section>

      {/* Footer */}
      <div className="relative w-full h-32  ">
        <div className=" z-0 absolute w-full h-[53%] bg-secondary bottom-0"></div>
        <div className="w-10/12 mx-auto  flex justify-between">
          <div className="relative z-1 h-32 aspect-square ">
            <Image
              src="/images/star.png"
              alt="About Tattoo Art"
              fill
              placeholder='empty'
              priority
              sizes="100%"
              className="object-cover"
            />
          </div>
          <div className="z-1 relative w-60 h-72 rounded-t-full bg-primary hidden md:block -translate-y-10"> </div>
        </div>

      </div>
      <footer className="bg-secondary w-full h-80 flex justify-center items-center gap-32">
        <div className="flex flex-col">
          <span>item</span>
          <span>item</span>
          <span>item</span>
          <span>item</span>
          <span>item</span>
        </div>
        <div className="flex flex-col">
          <span>item</span>
          <span>item</span>
          <span>item</span>
          <span>item</span>
          <span>item</span>
        </div>
      </footer>
    </div>
  );
};

export default Page;
