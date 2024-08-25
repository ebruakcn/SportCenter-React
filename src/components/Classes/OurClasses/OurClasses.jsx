import React, { useState } from 'react';
import './OurClasses.css';

const classDetails = {
  yoga: {
    title: "Why are your Yoga?",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus voluptatum impedit odit perferendis dolorum placeat, exercitationem in officia autem maiores ab nostrum laboriosam sapiente nulla totam neque eum veniam.",
    schedule: [
      "Saturday-Sunday: 8:00am - 10:00am",
      "Monday-Tuesday: 10:00am - 12:00pm",
      "Wednesday-Friday: 3:00pm - 6:00pm"
    ],
    image: "/Dökümanlar/Resimler/yoga.jpg"
  },
  group: {
    title: "Why choose Group Classes?",
    description: "Group classes provide a sense of community and motivation. You can enjoy a variety of workouts and stay accountable with friends.Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus voluptatum impedit odit perferendis dolorum placeat, exercitationem in officia autem maiores ab nostrum laboriosam sapiente nulla totam neque eum veniam.",
    schedule: [
      "Saturday: 9:00am - 11:00am",
      "Monday-Wednesday: 5:00pm - 7:00pm",
      "Friday: 6:00pm - 8:00pm"
    ],
    image: "/Dökümanlar/Resimler/group.webp"
  },
  solo: {
    title: "Why choose Solo Practice?",
    description: "Solo practice allows you to focus on your personal goals and progress at your own pace. It's a great way to improve specific skills.",
    schedule: [
      "Sunday: 7:00am - 9:00am",
      "Tuesday-Thursday: 10:00am - 12:00pm",
      "Saturday: 2:00pm - 4:00pm"
    ],
    image: "/Dökümanlar/Resimler/solo.jpg"
  },
  stretching: {
    title: "Benefits of Stretching Classes",
    description: "Stretching classes help improve flexibility, reduce muscle tension, and prevent injuries. They are suitable for all fitness levels.",
    schedule: [
      "Monday-Friday: 8:00am - 9:00am",
      "Wednesday: 3:00pm - 4:00pm",
      "Saturday: 11:00am - 12:00pm"
    ],
    image: "/Dökümanlar/Resimler/stret.webp"
  }
};

function OurClasses() {
  const [selectedClass, setSelectedClass] = useState(null);

  const showDetails = (classType) => {
    setSelectedClass(classDetails[classType]);
  };

  return (
    <>
      <section className="classes" id="classes">
        <div className="background-box"></div>
        <h2 className="section-title">OUR CLASSES</h2>
        <p>Lorem ipsum is not simply random text. It has roots in a piece of classical at Hampden-Sydney College.</p>

        <div className="class-buttons">
          <button className="class-btn" onClick={() => showDetails('yoga')}>Yoga</button>
          <button className="class-btn" onClick={() => showDetails('group')}>Group</button>
          <button className="class-btn" onClick={() => showDetails('solo')}>Solo</button>
          <button className="class-btn" onClick={() => showDetails('stretching')}>Stretching</button>
        </div>

        <div className="class-details">
          {selectedClass && (
            <>
              <div className="class-description">
                <h3>{selectedClass.title}</h3>
                <p>{selectedClass.description}</p>
                <h4>When comes {selectedClass.title.split(' ')[2]} Your Time.</h4>
                <ul>
                  {selectedClass.schedule.map((time, index) => (
                    <li key={index}>{time}</li>
                  ))}
                </ul>
              </div>
              <div className="class-image">
                <img src={selectedClass.image} alt={`${selectedClass.title} Image`} />
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default OurClasses;
