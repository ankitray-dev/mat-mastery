"use client"
import React from "react";
import {Card, CardFooter, Image, Button} from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import Link from "next/link";

const info = [
    {
        name:"Ankit Ray",
        post:"Black Belt",
        about:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis eligendi iusto et, culpa autem aut maxime blanditiis modi laboriosam, id eos enim in. Tempora officia amet nam eligendi et asperiores.",
        contact:"/",
        img:"/hero-image.jpg"
    },
    {
        name:"Ankit Ray",
        post:"Black Belt",
        about:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis eligendi iusto et, culpa autem aut maxime blanditiis modi laboriosam, id eos enim in. Tempora officia amet nam eligendi et asperiores.",
        contact:"/",
        img:"/hero-image.jpg"
    },
    {
        name:"Ankit Ray",
        post:"Black Belt",
        about:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis eligendi iusto et, culpa autem aut maxime blanditiis modi laboriosam, id eos enim in. Tempora officia amet nam eligendi et asperiores.",
        contact:"/",
        img:"/hero-image.jpg"
    },
    {
        name:"Ankit Ray",
        post:"Black Belt",
        about:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis eligendi iusto et, culpa autem aut maxime blanditiis modi laboriosam, id eos enim in. Tempora officia amet nam eligendi et asperiores.",
        contact:"/",
        img:"/hero-image.jpg"
    },
    {
        name:"Ankit Ray",
        post:"Black Belt",
        about:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis eligendi iusto et, culpa autem aut maxime blanditiis modi laboriosam, id eos enim in. Tempora officia amet nam eligendi et asperiores.",
        contact:"/",
        img:"/hero-image.jpg"
    },
    {
        name:"Ankit Ray",
        post:"Black Belt",
        about:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis eligendi iusto et, culpa autem aut maxime blanditiis modi laboriosam, id eos enim in. Tempora officia amet nam eligendi et asperiores.",
        contact:"/",
        img:"/hero-image.jpg"
    },
    {
        name:"Ankit Ray",
        post:"Black Belt",
        about:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis eligendi iusto et, culpa autem aut maxime blanditiis modi laboriosam, id eos enim in. Tempora officia amet nam eligendi et asperiores.",
        contact:"/",
        img:"/hero-image.jpg"
    },
    {
        name:"Ankit Ray",
        post:"Black Belt",
        about:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis eligendi iusto et, culpa autem aut maxime blanditiis modi laboriosam, id eos enim in. Tempora officia amet nam eligendi et asperiores.",
        contact:"/",
        img:"/hero-image.jpg"
    },

]


const InstructorSection = () => {
    
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
    <div>
        <div className="text-center">
            <h2 className="text-base text-blue-500 font-bold tracking-wide uppercase">our instructors</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn With the Best</p>
        </div>
    </div>
    <div className="mt-10">
        <div className="grid grid-cols-4 gap-8 justify-center px-24">
            {info.map((item, index) => (
            <Card
                isFooterBlurred
                isHoverable
                radius="lg"
                className="border-none"
                key={index}
                >
                <Image
                    alt="Instructor Images"
                    className="object-cover"
                    height={360}
                    src={item.img}
                    width={360}
                />
                <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                        <p className="font-bold text-base text-white/80">{item.name}</p>
                        <>
                            <Button onPress={onOpen} className="text-tiny text-white bg-black/20" variant="flat" color="primary" radius="lg" size="sm">
                                About
                            </Button>
                            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                                <ModalContent>
                                {(onClose) => (
                                    <>
                                    <ModalHeader className="flex flex-col gap-1">{item.name}<p className="text-sm">{item.post}</p></ModalHeader>
                                    <ModalBody>
                                        <p>{item.about}</p>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="danger" variant="light" onPress={onClose}>
                                        Close
                                        </Button>
                                        <Button color="primary">
                                            <Link href={item.contact}>Contact</Link>
                                        </Button>
                                    </ModalFooter>
                                    </>
                                )}
                                </ModalContent>
                            </Modal>
                        </>
                </CardFooter>
            </Card>))}
        </div>
    </div>
    </>
  )
}

export default InstructorSection
