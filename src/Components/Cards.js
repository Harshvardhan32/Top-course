import { useState } from 'react';
import Card from './Card';

export default function Cards(props) {
    let courses = props.courses;
    let category = props.category;

    const [likedCourses, setLikedCourses] = useState([]);

    // returns you a list of all courses recieved from api response
    const getCourses = () => {
        if (category === "All") {
            let allCourse = [];
            Object.values(courses).forEach(array => {
                array.forEach(courseData => {
                    allCourse.push(courseData);
                });
            });
            return allCourse;
        }
        else {
            // mai sirf specific category ka array data pass karunga
            return courses[category];
        }
    };

    return (
        <div className='cards'>
            {   
            courses.length !== 0 ?
                getCourses().map((course) => {
                    return <Card key={course.id}
                        course={course} likedCourses={likedCourses}
                        setLikedCourses={setLikedCourses} />;
                }) :
                <p className='text-4xl'>No Data Found!</p>
            }
        </div>
    );
}
