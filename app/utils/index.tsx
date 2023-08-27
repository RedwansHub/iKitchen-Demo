import { FaRegCircleXmark } from 'react-icons/fa6'
import { AiFillCheckCircle } from 'react-icons/ai'

export const menuSlide = {
    initial: {x: "calc(100% + 100px)"},
    enter: {x: "0", transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}},
    exit: {x: "calc(100% + 100px)", transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}}
}

export const slide = {
    initial: {x: 80},
    enter: (i: number) => ({x: 0, transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i}}),
    exit: (i: number) => ({x: 80, transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i}})
}

export const scale = {
    open: {scale: 1, transition: {duration: 0.3}},
    closed: {scale: 0, transition: {duration: 0.4}}
}

interface NavItem {
  title: string;
  href: string;
}

export const navItems: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Programs",
    href: "/programs",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export const silverData = [
  {
    id: '1',
    name: 'silver',
    price: '$5.6',
  },
  {
    name: 'Weekly',
    price: '$4.6',
  },
  {
    name: 'Yearly',
    price: '$3.6',
  },
]
export const goldData = [
  {
    name: 'Daily',
    price: '$8',
  },
  {
    name: 'Weekly',
    price: '$6',
  },
  {
    name: 'Yearly',
    price: '$4',
  },
]
export const platinumData = [
  {
    name: 'Daily',
    price: '$12.2',
  },
  {
    name: 'Weekly',
    price: '$8.8',
  },
  {
    name: 'Yearly',
    price: '$6.6',
  },
]
export const subsData = [
  {
    title:'Pricing',
    data: [
      {
        name:"Daily",
      },
      {
        name:"Weekly",
      },
      {
        name:"Yearly",
      },
    ]
  },
  {
    title:"What's Included",
    data: [
      {
        name:"Fast Delivery",
      },
      {
        name:"Packaging",
      },
      {
        name:"Routine Guide",
      },
    ]
  },
]
export const sideData = [
  {
    id: 1,
    data : [
        {
            name: 'Silver',
            desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
            price: '$5.6',
            features: [
              {
                icon: <AiFillCheckCircle />,
                text: 'Fast Delivery'
              },
              {
                icon: <FaRegCircleXmark />,
                text: 'Routine Guide'
              },
            ]
        },
        {
            name: 'Gold',
            desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
            price: '$8',
            features: [
              {
                icon: <AiFillCheckCircle />,
                text: 'Fast Delivery'
              },
              {
                icon: <FaRegCircleXmark />,
                text: 'Routine Guide'
              },
            ]
        },
        {
            name: 'Platinum',
            desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
            price: '$12.2',
            features: [
              {
                icon: <AiFillCheckCircle />,
                text: 'Fast Delivery'
              },
              {
                icon: <AiFillCheckCircle />,
                text: 'Routine Guide'
              },
            ]
        },
    ] 
  },
  {
    id: 2,
    data : [
        {
            name: 'Silver',
            desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
            price: '$4.6',
            features: [
              {
                icon: <AiFillCheckCircle />,
                text: 'Fast Delivery'
              },
              {
                icon: <FaRegCircleXmark />,
                text: 'Routine Guide'
              },
            ]
        },
        {
            name: 'Gold',
            desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
            price: '$6',
            features: [
              {
                icon: <AiFillCheckCircle />,
                text: 'Fast Delivery'
              },
              {
                icon: <FaRegCircleXmark />,
                text: 'Routine Guide'
              },
            ]
        },
        {
            name: 'Platinum',
            desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
            price: '$8.8',
            features: [
              {
                icon: <AiFillCheckCircle />,
                text: 'Fast Delivery'
              },
              {
                icon: <AiFillCheckCircle />,
                text: 'Routine Guide'
              },
            ]
        },
    ] 
  },
  {
    id: 3,
    data : [
        {
            name: 'Silver',
            desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
            price: '$3.6',
            features: [
              {
                icon: <AiFillCheckCircle />,
                text: 'Fast Delivery'
              },
              {
                icon: <FaRegCircleXmark />,
                text: 'Routine Guide'
              },
            ]
        },
        {
            name: 'Gold',
            desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
            price: '$4',
            features: [
              {
                icon: <AiFillCheckCircle />,
                text: 'Fast Delivery'
              },
              {
                icon: <AiFillCheckCircle />,
                text: 'Routine Guide'
              },
            ]
        },
        {
            name: 'Platinum',
            desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
            price: '$6.6',
            features: [
              {
                icon: <AiFillCheckCircle />,
                text: 'Fast Delivery'
              },
              {
                icon: <AiFillCheckCircle />,
                text: 'Routine Guide'
              },
            ]
        },
    ] 
  },
]