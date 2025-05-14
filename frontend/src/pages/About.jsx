import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div className="px-4 mx-auto max-w-7xl">
      {/* Заголовок */}
      <div className="pt-8 text-2xl text-center border-t">
        <Title text1={"ABOUT"} />
      </div>

      {/* Основной контент с изображением */}
      <div className="flex flex-col gap-10 my-10 md:flex-row md:items-center">
        {/* Изображение - теперь с фиксированной высотой и object-cover */}
        <div className="md:w-1/2">
          <img
            className="w-full h-auto max-h-[500px] object-cover rounded-lg"
            src={assets.about_img}
            alt="About our company"
          />
        </div>

        {/* Текстовый контент */}
        <div className="flex flex-col gap-6 text-gray-600 md:w-1/2">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis et
            sapiente sed, iusto magni labore vel molestiae cupiditate voluptate
            consectetur quos, enim corrupti iste delectus.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet,
            aliquam maiores. Labore fugit soluta eveniet aut totam deleniti
            vero, itaque ipsam tempora expedita, animi ducimus debitis delectus
            a deserunt hic ea maiores, provident ullam.
          </p>

          {/* Миссия с отступом */}
          <div className="mt-4">
            <b className="text-gray-500">Our Mission</b>
            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
              quasi! Hic commodi porro sunt nam quibusdam nesciunt natus
              repellat sequi.
            </p>
          </div>
        </div>
      </div>

      {/* Секция "Why Us" */}
      <div className="py-4 text-xl">
        <Title text1={"WHY US"} />
      </div>

      {/* Карточки преимуществ */}
      <div className="grid grid-cols-1 gap-0 mb-20 text-sm border-t border-l md:grid-cols-3">
        {[
          {
            title: "Quality assurance",
            text: "We are good shop owners",
          },
          {
            title: "Convenience",
            text: "We Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
          },
          {
            title: "Exceptional customer service",
            text: "Are, Lorem - ipsum.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 p-6 border-b border-r"
          >
            <b>{item.title}</b>
            <p className="text-gray-600">{item.text}</p>
          </div>
        ))}
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;
