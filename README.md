# 🎥 MovieDB

![MovieDB Banner](https://via.placeholder.com/1200x300?text=MovieDB+-+Your+Movie+Database)

## 🌟 Overview

MovieDB is a modern, responsive web application that helps you discover and explore movies. Built with React, Vite, and styled with Tailwind CSS, it offers a seamless experience for browsing through an extensive collection of films.

## ✨ Key Features

- 🔍 **Smart Search**: Instantly find movies as you type
- 🎭 **Genre Filtering**: Browse movies by your favorite genres
- ⭐ **Rating System**: See movie ratings with a sleek star display
- 🔒 **Age Verification**: Smart content filtering based on age
- 📱 **Responsive Design**: Perfect viewing on any device
- 🌙 **Dark Theme**: Easy on the eyes with a modern dark interface
- 📄 **Detailed Views**: Expandable cards with comprehensive movie info
- 📊 **Pagination**: Smooth navigation through movie lists

## 🛠️ Built With

- ⚛️ **React** - UI Framework
- 🎨 **Tailwind CSS** - Styling
- ⚡ **Vite** - Build Tool
- 🎬 **TMDB API** - Movie Database

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- TMDB API Key

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/moviedb.git
   cd moviedb
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   # Create a .env file and add your TMDB API key
   echo "VITE_TMDB_API_KEY=your_api_key_here" > .env
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

## 📦 Project Structure

```
moviedb/
├── src/
│   ├── components/       # React components
│   │   ├── MovieCard/
│   │   ├── Search/
│   │   └── Pagination/
│   ├── api/             # API integration
│   ├── hooks/           # Custom hooks
│   └── utils/           # Helper functions
├── public/              # Static assets
└── vite.config.js       # Vite configuration
```

## 🎯 Core Features

### Age Verification

- Initial popup for age verification
- Content filtering based on user age
- Persistent preferences

### Movie Cards

- High-quality poster display
- Rating with star visualization
- Expandable detailed view
- Genre tags

### Search & Filter

- Real-time search results
- Genre-based filtering
- Adult content toggle
- Pagination support

## 🎨 UI Components

### MovieCard

```jsx
<MovieCard
  title="Movie Title"
  rating={4.5}
  genres={["Action", "Drama"]}
  isAdult={false}
  poster="/path/to/poster.jpg"
/>
```

### Search

```jsx
<Search
  onSearch={handleSearch}
  placeholder="Search movies..."
  debounceTime={300}
/>
```

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints:
  - 📱 Mobile: < 640px
  - 💻 Tablet: 640px - 1024px
  - 🖥️ Desktop: > 1024px

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit your changes
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. Push to the branch
   ```bash
   git push origin feature/AmazingFeature
   ```
5. Open a Pull Request

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

## 👤 Contact

Durjoy Dutta C. - [@durjoydutta](https://twitter.com/durjoydutta)

Project Link: [https://github.com/durjoydutta/moviedb](https://github.com/durjoydutta/moviedb)

## 🙏 Acknowledgments

- [TMDB API](https://www.themoviedb.org/documentation/api)
- [React Documentation](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)

---

<p align="center">Made with ❤️ by <a href="https://github.com/durjoydutta">DDC</a></p>
