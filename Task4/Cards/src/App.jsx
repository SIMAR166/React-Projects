import React from 'react'
import Card from './components/Card';
import "./App.scss"
const App = () => {

const users = [
  {
    id: 1,
    name: "Noah Thompson",
    role: "Product Designer",
    bio: "Product Designer who focuses on simplicity & usability.",
    avatar: "https://i.pravatar.cc/150?img=1",
    coverImage: "https://picsum.photos/400/200?random=1",
    stats: { likes: 729, posts: 828, views: 342.9 },
    social: {
      instagram: "https://www.instagram.com/",
      twitter: "https://x.com/",
      threads: "https://www.threads.net/"
    },
    isAddButtonVisible: true
  },

  {
    id: 2,
    name: "Ava Sharma",
    role: "UI/UX Designer",
    bio: "Designing clean interfaces with user-first thinking.",
    avatar: "https://i.pravatar.cc/150?img=5",
    coverImage: "https://picsum.photos/400/200?random=2",
    stats: { likes: 542, posts: 620, views: 210.4 },
    social: {
      instagram: "https://www.instagram.com/",
      twitter: "https://x.com/",
      threads: "https://www.threads.net/"
    },
    isAddButtonVisible: true
  },

  {
    id: 3,
    name: "Liam Carter",
    role: "Frontend Developer",
    bio: "Turning designs into responsive web experiences.",
    avatar: "https://i.pravatar.cc/150?img=8",
    coverImage: "https://picsum.photos/400/200?random=3",
    stats: { likes: 883, posts: 940, views: 412 },
    social: {
      instagram: "https://www.instagram.com/",
      twitter: "https://x.com/",
      threads: "https://www.threads.net/"
    },
    isAddButtonVisible: true
  },

  {
    id: 4,
    name: "Sophia Lee",
    role: "Visual Designer",
    bio: "Crafting visually stunning and meaningful designs.",
    avatar: "https://i.pravatar.cc/150?img=9",
    coverImage: "https://picsum.photos/400/200?random=4",
    stats: { likes: 664, posts: 710, views: 298 },
    social: {
      instagram: "https://www.instagram.com/",
      twitter: "https://x.com/",
      threads: "https://www.threads.net/"
    },
    isAddButtonVisible: true
  },

  {
    id: 5,
    name: "Ethan Brown",
    role: "Backend Developer",
    bio: "Building scalable and efficient server-side systems.",
    avatar: "https://i.pravatar.cc/150?img=12",
    coverImage: "https://picsum.photos/400/200?random=5",
    stats: { likes: 478, posts: 530, views: 189.2 },
    social: {
      instagram: "https://www.instagram.com/",
      twitter: "https://x.com/",
      threads: "https://www.threads.net/"
    },
    isAddButtonVisible: true
  },

  {
    id: 6,
    name: "Isabella Garcia",
    role: "Product Manager",
    bio: "Bridging business goals with user needs.",
    avatar: "https://i.pravatar.cc/150?img=15",
    coverImage: "https://picsum.photos/400/200?random=6",
    stats: { likes: 591, posts: 680, views: 255 },
    social: {
      instagram: "https://www.instagram.com/",
      twitter: "https://x.com/",
      threads: "https://www.threads.net/"
    },
    isAddButtonVisible: true
  },

  {
    id: 7,
    name: "Noah Williams",
    role: "Full Stack Developer",
    bio: "Building complete web apps from front to back.",
    avatar: "https://i.pravatar.cc/150?img=20",
    coverImage: "https://picsum.photos/400/200?random=7",
    stats: { likes: 732, posts: 820, views: 330.5 },
    social: {
      instagram: "https://www.instagram.com/",
      twitter: "https://x.com/",
      threads: "https://www.threads.net/"
    },
    isAddButtonVisible: true
  },

  {
    id: 8,
    name: "Mia Johnson",
    role: "Content Creator",
    bio: "Sharing design tips and creative inspiration daily.",
    avatar: "https://i.pravatar.cc/150?img=25",
    coverImage: "https://picsum.photos/400/200?random=8",
    stats: { likes: 910, posts: 1050, views: 500 },
    social: {
      instagram: "https://www.instagram.com/",
      twitter: "https://x.com/",
      threads: "https://www.threads.net/"
    },
    isAddButtonVisible: true
  },

  {
    id: 9,
    name: "James Wilson",
    role: "Mobile App Developer",
    bio: "Creating smooth and performant mobile apps.",
    avatar: "https://i.pravatar.cc/150?img=30",
    coverImage: "https://picsum.photos/400/200?random=9",
    stats: { likes: 620, posts: 740, views: 289 },
    social: {
      instagram: "https://www.instagram.com/",
      twitter: "https://x.com/",
      threads: "https://www.threads.net/"
    },
    isAddButtonVisible: true
  },

];
  return (
  <div className='container'>


  {users.map((user) => (
      <Card  key={user.id} {...user}/>
      ))}
     </div>
  )
}

export default App
