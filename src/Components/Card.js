import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default function Card(props) {

    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    function clickHandler() {
        if (likedCourses.includes(course.id)) {
            // pahale se like hai
            setLikedCourses((prev) => prev.filter((cid) => (cid !== course.id)));
            toast.warning("Like removed");
        }
        else {
            // pahale se like nahi hai
            if (likedCourses.length === 0) {
                setLikedCourses([course.id]);
            } else {
                // non empty pahale se 
                setLikedCourses((prev) => [...prev, course.id]);
            }
            toast.success("Liked Successfully");
        }
    }

    return (
        <div className='card'>
            <div className='cardImage'>
                <img src={course.image.url} alt="Error Loading Image" />
                <div>
                    <button className='reactIcon' onClick={clickHandler}>
                        {
                            likedCourses.includes(course.id) ? <FcLike fontSize="1.75rem" /> : (<FcLikePlaceholder fontSize="1.75rem" />)
                        }
                    </button>
                </div>
            </div>
            <div className='cardDetails'>
                <p className='cardTitle'>{course.title}</p>
                <p className='cardDesc'>
                    {
                        course.description.length > 100 ?
                        course.description.substring(0, 100) + "...":
                        course.description
                    }
                </p>
            </div>
        </div>
    );
}