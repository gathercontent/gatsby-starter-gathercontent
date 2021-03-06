import * as React from "react"

const Note = ({ content }) => (
  <div className="bg-gray-100 border p-5 my-10 rounded-md">
    <h3 className="text-xl font-medium mb-2">Note</h3>
    <div
      dangerouslySetInnerHTML={{ __html: content }}
      className="prose lg:prose-xl"
    />
  </div>
);

const Content = ({ content }) => (
  <>
    <div
      dangerouslySetInnerHTML={{ __html: content }}
      className="prose lg:prose-xl"
    />
    <style>{`
      .content :global(p) {
        margin-bottom: 1rem;
        font-size: 1.125rem;
        color: #29333d;
      }
    `}</style>
  </>
);

const CourseData = ({ content }) => (
  <div className="my-8 border rounded-md shadow-xl text-center grid grid-cols-5 justify-around">
    <div className="p-4 border-r py-8">
      <p className="uppercase text-base-1 text-xs">Credits</p>
      <p className="text-2xl">{content.courseData.credits}</p>
    </div>
    <div className="p-4 border-r py-8">
      <p className="uppercase text-base-1 text-xs">Hours /week</p>
      <p className="text-2xl">{content.courseData.hours?.replace(' hours', '')}</p>
    </div>
    <div className="p-4 border-r py-8">
      <p className="uppercase text-base-1 text-xs">Weeks</p>
      <p className="text-2xl">{content.courseData.weeks?.replace(' weeks', '')}</p>
    </div>
    <div className="p-4 border-r py-8">
      <p className="uppercase text-base-1 text-xs">Seats</p>
      <p className="text-2xl">{content.courseData.totalSeats?.replace(' seats', '')}</p>
    </div>
    <div className="p-4  py-8">
      <p className="uppercase text-base-1 text-xs">Course code</p>
      <p className="text-2xl">{content.courseData.courseCode}</p>
    </div>
  </div>
);

const CourseContent = ({ content }) => content.courseDescription ? (
  <>
    <CourseData content={content} />
    <h2 className="text-4xl mt-10 mb-4">Prerequisites</h2>
    <Content content={content.courseDescription.prerequisites} />
    <h2 className="text-4xl mt-10 mb-4">Core requisites</h2>
    <Content content={content.courseDescription.coreRequisites} />
    <h2 className="text-4xl mt-10 mb-4">Course summary</h2>
    <Content content={content.courseDescription.courseSummary} />
    <Note content={content.courseDescription.note} />
    <h2 className="text-4xl mt-10 mb-4">Taught by</h2>
    <Content content={content.courseDescription.taughtBy} />
  </>
) : null;

export default CourseContent;
