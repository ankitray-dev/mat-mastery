"use client"
import React from "react";
import {Card, CardHeader, CardBody, Image, Button} from "@nextui-org/react";
import Link from "next/link";

const list = [
    {
        title:"Karate Self-Defense Seminar: Practical Techniques",
        description:" Gain self-defense skills in a weekend seminar.",
        duration:"2 days (Weekend Seminar)",
        img:"/course-img-4.jpg",
    },
    {
        title:"Karate Kata Workshop: Mastering Traditional Forms",
        description:"Perfect traditional karate forms in a 4-week intensive workshop.",
        duration:"4 weeks",
        img:"/course-img-2.jpg",
    },
    {
        title:"Judo Randori Clinic: Practical Sparring Strategies",
        description:"Enhance sparring skills with tactical training.",
        duration:"6 weeks",
        img:"/course-img-3.jpg",
    },
    {
        title:"Judo for Kids: Fun & Fitness for Young Judokas",
        description:"Introduce kids to judo through fun activities.",
        duration:"Ongoing (Classes held weekly)",
        img:"/course-img-1.jpg",
    },
    {
        title:"Karate Conditioning Bootcamp: Strength & Flexibility",
        description:"Improve strength and flexibility in a 6-week bootcamp.",
        duration:"6 weeks",
        img:"/course-img-5.jpg",
    },
    {
        title:"Advanced Judo: Mastery of Throws and Combinations",
        description:"Learn complex judo techniques.",
        duration:"12 weeks",
        img:"/course-img-6.jpg",
    },
]

const CourseSection = () => {
  return (
    <div className="py-12">
        <div>
            <div className="text-center">
                <h2 className="text-base text-blue-500 font-bold tracking-wide uppercase">FEATURED COURSES</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn From Differnt Courses</p>
            </div>
        </div>
        <div className="mt-10">
            <div className="grid grid-cols-3 gap-8 justify-center px-24">
                {list.map((item, index) => (
                    <Card key={index} isHoverable className="py-4">
                        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                            <h4 className="font-bold text-large py-2">{item.title}</h4>
                            <p className="text-tiny font-bold py-2">{item.description}</p>
                            <small className="text-default-500">{item.duration}</small>
                        </CardHeader>
                        <CardBody className="overflow-visible py-4">
                            <Image
                            alt="Card background"
                            className="object-cover rounded-xl"
                            src={item.img}
                            width={420}
                            />
                        </CardBody>
                    </Card>
                ))}
            </div>
        </div>
        <div>
            <div className="mt-20 text-center">
                <Button size="lg" radius="full" className="bg-gradient-to-tr from-blue-800 to-blue-400 text-neutral-200 shadow-lg">
                    <Link href={"/courses"}>
                        View All Courses
                    </Link>
                </Button>
            </div>
        </div>
    </div>
  )
}

export default CourseSection
