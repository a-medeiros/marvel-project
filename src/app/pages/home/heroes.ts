export interface Heroes {
  id: string;
  name: string;
  realName?: string;
  details: string;
  img: string;
}

export const heroes: Heroes[] = [
  {
    id: '1',
    name: "Iron Man",
    realName: 'Tony Stark',
    details: 'Genius. Billionaire. Philanthropist.',
    img: 'https://i.pinimg.com/originals/cb/ac/14/cbac14122815b408f30f0a00bf69490a.jpg'
  },
  {
    id: '2',
    name: "Spider-Man",
    realName: 'Peter Park',
    details: 'Bitten by a radioactive spider, Peter Parker’s arachnid abilities give him amazing powers he uses to help others',
    img: 'https://i.pinimg.com/originals/c0/8d/e4/c08de43d8614f11d502ad9fc14bdb70d.jpg'
  },
  {
    id: '3',
    name: "Thor",
    realName: 'Thor Odinson',
    details: 'The son of Odin uses his mighty abilities as the God of Thunder to protect his home Asgard and planet Earth alike.',
    img: 'https://d9nvuahg4xykp.cloudfront.net/-3707385309016252472/7301595684107671378.jpg'
  },
  {
    id: '4',
    name: "Captain America",
    realName: 'Steven Rogers',
    details: 'The leader of the Avengers.',
    img: 'https://i.pinimg.com/originals/61/76/56/6176568d13f652123cd31c5385e1c2c4.jpg'
  },
  {
    id: '5',
    name: "Daredevil",
    realName: 'Matthew Murdock',
    details: 'Blinded as a young boy, Matt Murdock fights injustice by day as a lawyer and by night as the Super Hero Daredevil in Hells Kitchen, New York City.',
    img: 'https://wallpaperaccess.com/full/2445401.jpg'
  },
  {
    id: '5',
    name: "Daredevil",
    realName: 'Matthew Murdock',
    details: 'Blinded as a young boy, Matt Murdock fights injustice by day as a lawyer and by night as the Super Hero Daredevil in Hells Kitchen, New York City.',
    img: 'https://wallpaperaccess.com/full/2445401.jpg'
  },
]
