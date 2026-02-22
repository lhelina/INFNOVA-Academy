import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CourseCard from "./components/CourseCard";
import Footer from "./components/Footer";
import CourseDetail from "./pages/CourseDetail";

function HomePage({
  courses,
  search,
  setSearch,
  filteredCourses,
  loading,
  error,
}) {
  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <div className="w-12 h-12 border-4 border-brand border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-gray-500 font-medium animate-pulse">
          Loading Academy Courses...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
        <span className="text-5xl mb-4">⚠️</span>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Oops! Something went wrong
        </h2>
        <p className="text-gray-500 max-w-md mb-6">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="bg-brand text-white px-6 py-2 rounded-lg font-bold shadow-lg shadow-brand/20 hover:bg-orange-600 transition-all"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <>
      <header className="bg-brand pt-24 pb-32 px-6">
        <div className="max-w-6xl mx-auto text-white">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Explore Our Courses
          </h1>
          <p className="max-w-3xl text-lg md:text-xl font-normal leading-relaxed opacity-95">
            Master new skills with expert-led courses designed for the modern
            learner. Start your learning journey today with INFNOVA Academy.
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 -mt-10 pb-20">
        <div className="bg-white p-4 rounded-xl shadow-xl flex flex-col md:flex-row gap-4 mb-10 border border-gray-100">
          <div className="relative flex-1">
            <span className="absolute left-4 top-3 text-gray-400">🔍</span>
            <input
              type="text"
              placeholder="Search courses, instructors, categories..."
              className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-lg outline-none border border-gray-100 focus:border-brand/30 transition-all"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <p className="mb-6 text-gray-500 font-medium">
          Showing{" "}
          <span className="text-black font-bold">{filteredCourses.length}</span>{" "}
          of {courses.length} courses
        </p>

        {filteredCourses.length === 0 ? (
          <div className="py-20 text-center bg-white rounded-3xl border border-dashed border-gray-200">
            <p className="text-gray-400 text-lg">
              No courses found matching "{search}"
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        )}
      </main>
    </>
  );
}

export default function App() {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch("https://infnova-course-api.vercel.app/api/courses")
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            "We couldn't reach the server. Please check your connection.",
          );
        }
        return res.json();
      })
      .then((data) => {
        setCourses(data);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const filteredCourses = courses.filter(
    (c) =>
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.category.toLowerCase().includes(search.toLowerCase()) ||
      c.instructor.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-[#F8F9FB]">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              courses={courses}
              search={search}
              setSearch={setSearch}
              filteredCourses={filteredCourses}
              loading={loading}
              error={error}
            />
          }
        />
        <Route path="/course/:id" element={<CourseDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}
