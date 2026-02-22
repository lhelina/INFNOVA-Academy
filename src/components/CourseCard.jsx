import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const levelStyles = {
    Beginner: "bg-green-100 text-green-700",
    Intermediate: "bg-blue-100 text-blue-700",
    Advanced: "bg-purple-100 text-purple-700",
  };

  return (
    <Link to={`/course/${course.id}`} className="block h-full">
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group cursor-pointer h-full flex flex-col">
        <div className="relative h-48 overflow-hidden">
          <img
            src={course.thumbnail}
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <span
            className={`absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-bold capitalize tracking-wider ${
              levelStyles[course.level] || "bg-gray-100"
            }`}
          >
            {course.level}
          </span>
        </div>

        <div className="p-6 flex-1 flex flex-col">
          <span className="text-brand text-xs font-bold tracking-widest uppercase">
            {course.category}
          </span>

          <h3 className="mt-2 text-gray-900 font-bold text-lg leading-tight h-12 line-clamp-2">
            {course.title}
          </h3>

          <p className="mt-2 text-[14px] text-slate-600 font-medium">
            Instructor:{" "}
            <span className="text-slate-500 font-normal">
              {course.instructor}
            </span>
          </p>

          <div className="mt-auto">
            <div className="my-4 border-t border-gray-100"></div>

            <div className="flex items-center justify-between text-gray-500 text-[13px] font-medium">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <span>🕒</span> {course.duration}
                </div>
                <div className="flex items-center gap-1">
                  <span>👥</span> {course.enrolled.toLocaleString()}
                </div>
              </div>

              <div className="flex items-center gap-1">
                <span className="text-yellow-500">⭐</span> {course.rating}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
