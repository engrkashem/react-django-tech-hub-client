import { useParams } from 'react-router-dom';

const CourseDetail = () => {
    const { courseId } = useParams();
    return (
        <div className='min-h-screen'>
            <h1 className='text-6xl'>Course details for {courseId}</h1>
        </div>
    );
};


export default CourseDetail;