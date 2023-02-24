import React from 'react';
import CourseCard from './CourseCard';

const Courses = () => {
    const demo = [
        // {
        //     id: 1,
        //     course_name: 'HTML',
        //     instructor: 'naim',
        //     course_details: 'dgfkghdfkjsghdfkjshgkljdfhgdfkjshgkjdfhgkljdfshgkljsahgkjashag'
        // },
        // {
        //     id: 2,
        //     course_name: 'CSS',
        //     instructor: 'ratul',
        //     course_details: 'dgfkghdfkjsghdfkjshgkljdfhgdfkjshgkjdfhgkljdfshgkljsahgkjashag'

        // },
        // {
        //     id: 3,
        //     course_name: 'JS',
        //     instructor: 'ratul',
        //     course_details: 'dgfkghdfkjsghdfkjshgkljdfhgdfkjshgkjdfhgkljdfshgkljsahgkjashag'
        // }
        {
            id: 1,
            title: "django",
            description: "Python is known for its simple and elegant syntax, which makes it easy to learn and read. It also has a large and active community, with many libraries and frameworks available for various use cases. Python's popularity has led to the development of many tools and resources for learning and using the language, including online tutorials, books, and courses.",
            course_fee: "5000.00",
            course_length: "5 day",
            video_thumbnail_url: "https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png",
            video_playlist_url: "https://www.youtube.com/watch?v=4ZP2PacYMA8",
            instructor: "MR TBD"
        },
        {
            id: 2,
            title: "python",
            description: "day one day two abcd tree",
            course_fee: "5000.00",
            course_length: "5 day",
            video_thumbnail_url: "https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png",
            video_playlist_url: "https://www.youtube.com/watch?v=4ZP2PacYMA8",
            instructor: "mr TCL"
        },
        {
            id: 3,
            title: "java",
            description: "day two two tree four five ",
            course_fee: "5000.00",
            course_length: "5 day",
            video_thumbnail_url: "https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png",
            video_playlist_url: "https://www.youtube.com/watch?v=4ZP2PacYMA8",
            instructor: "mr HJK"
        }

    ]
    return (
        <div className='nim-h-screen w-full grid grid-cols-1  gap-5 ' style={{ height: '100vh' } }>
            {
                demo.map(course => <CourseCard
                    key={course.id}
                    course={course}
                ></CourseCard>)
            }
        </div>
    );
};

export default Courses;