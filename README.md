# ⚛️ React + WordPress Integration

This is a professional frontend integration of **React** with **WordPress as a Headless CMS**. It dynamically fetches **Projects** and **Blogs** from the WordPress REST API using custom fields from **Advanced Custom Fields (ACF)**.

> This is my master repo for showcasing scalable React + WordPress integrations with real-world components, routing, and clean UI.

---

## 🌐 Live Demo  
[https://react-wordpress-integration.vercel.app](https://react-wordpress-integration.vercel.app) 

---

## 🚀 Features

- ✅ Dynamic Projects page (`/projects`)
- ✅ Project Details page (`/projects/:id`)
- ✅ Blogs page (`/blogs`) *(placeholder)*
- ✅ Blog Details page (`/blogs/:id`) *(placeholder)*
- ✅ Home and About pages
- ✅ Clean routing using React Router
- ✅ Styled layout using plain CSS and inline styles
- ✅ REST API integration with WordPress
- ✅ Scalable and extensible structure

---

## 🧱 Tech Stack

- **Frontend:** React, React Router
- **Backend CMS:** WordPress with ACF
- **API:** WP REST API (`/wp-json/wp/v2`)
- **Deployment:** Vercel

---

## 📂 Folder Structure

```
src/
├── components/
│   └── ProjectCard.js
├── pages/
│   ├── HomePage.js
│   ├── AboutPage.js
│   ├── ProjectsPage.js
│   ├── ProjectDetailsPage.js
│   ├── BlogsPage.js
│   └── BlogDetail.js
├── App.js
└── index.js
```

---

## 🛠️ Local Setup

```bash
git clone https://github.com/yourusername/react-wordpress-integration.git
cd react-wordpress-integration
npm install
npm start
```

Make sure the WordPress REST API is available at:
```
https://cms.digitalwebtrends.in/wp-json/wp/v2/projects
https://cms.digitalwebtrends.in/wp-json/wp/v2/posts
```

---

## 👨‍💻 About Me

I’m **Abhishek**, a React + WordPress developer focused on headless CMS and scalable frontend systems. This repo showcases real-world integration between modern JavaScript and traditional CMS.

---


> This repository will be continuously expanded with more headless WordPress features like Testimonials, Case Studies, and Contact Forms.
