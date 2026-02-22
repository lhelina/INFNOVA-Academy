import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function CourseDetail() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://infnova-course-api.vercel.app/api/courses/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCourse(data);
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return (
      <div className="p-20 text-center animate-pulse">
        Loading Course Details...
      </div>
    );
  if (!course) return <div className="p-20 text-center">Course not found.</div>;

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <Link
          to="/"
          className="text-gray-500 hover:text-brand flex items-center gap-2 text-sm font-medium"
        >
          ← Back to Courses
        </Link>
      </div>

      <section className="bg-brand py-16 px-6 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1">
            <p className="uppercase text-[11px] font-medium tracking-[0.3em] opacity-70 mb-4">
              {course.category}
            </p>
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              {course.title}
            </h1>
            <p className="text-lg opacity-90 max-w-2xl mb-8">
              {course.description}
            </p>

            <div className="flex flex-wrap gap-6 text-sm font-semibold">
              <span className="flex items-center gap-2">
                👤 Instructor: {course.instructor}
              </span>
              <span className="flex items-center gap-2">
                🕒 {course.duration}
              </span>
              <span className="flex items-center gap-2">
                👥 {course.enrolled.toLocaleString()} enrolled
              </span>
              <span className="flex items-center gap-2">
                ⭐ {course.rating} rating
              </span>
            </div>
            <div className="mt-8">
              <span className="bg-blue-100 text-blue-800 px-6 py-2 rounded-full text-sm font-semibold inline-block">
                {course.level} Level
              </span>
            </div>
          </div>
          <div className="w-full md:w-1/3 aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={course.thumbnail}
              className="w-full h-full object-cover"
              alt={course.title}
            />
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-10 mt-12">
        <div className="lg:col-span-2 space-y-8">
          <section className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              📖 What You'll Learn
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {course.skills?.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-3 text-gray-700"
                >
                  <span className="text-green-500">✓</span> {skill}
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold mb-4">Course Description</h2>
            <p className="text-gray-600 leading-relaxed">
              {course.description}
            </p>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold mb-6">Your Instructor</h2>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-brand rounded-full flex items-center justify-center text-white text-xl font-bold">
                {course.instructor.charAt(0)}
              </div>
              <div>
                <h4 className="font-bold text-lg">{course.instructor}</h4>
                <p className="text-gray-500 text-sm">
                  Expert {course.category} professional with years of industry
                  experience.
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-xl sticky top-24">
            <h3 className="text-2xl font-black mb-2">Enroll Today</h3>
            <p className="text-gray-500 text-sm mb-6">
              Join {course.enrolled} students already enrolled
            </p>
            <button className="w-full bg-brand text-white py-4 rounded-xl font-bold mb-4 hover:bg-orange-600 shadow-lg shadow-brand/20 transition-all">
              Enroll Now
            </button>
            <button className="w-full border border-brand text-brand py-4 rounded-xl font-medium hover:bg-orange-50 transition-all">
              Add to Wishlist
            </button>
            <div className="mt-8 space-y-4">
              <p className="text-sm font-bold text-gray-900">
                This course includes:
              </p>
              <ul className="text-sm text-gray-500 space-y-3">
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span> {course.duration} of
                  content
                </li>
                <li className="flex items-center gap-3">
                  {" "}
                  <span className="text-green-500">✓</span> Lifetime access
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span> Certificate of
                  completion
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span> Access on mobile and
                  desktop
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
