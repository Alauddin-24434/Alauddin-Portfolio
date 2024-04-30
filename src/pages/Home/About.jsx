import React from 'react';

// About component
const About = () => {
    const imageUrl = "https://via.placeholder.com/300"; // URL of the image
    const title = "Sample Image Title"; // Title of the image
    const description = "This is a sample description for the image card."; // Description of the image

    return (
        <div className=" bg-gray-100 p-4">
              <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <div className="container   flex flex-row">
              
            
                {/* Image Card */}
                <div className=" rounded  shadow-lg  ">
                    <img className="w-full h-96 flex justify-center items-center" src={imageUrl} alt={title} />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{title}</div>
                        <p className="text-gray-700 text-base">{description}</p>
                    </div>
                </div>
                <p className="text-lg text-gray-700 mb-8 flex-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac ipsum nec nulla tempor fermentum. Quisque fermentum lobortis nisi, et condimentum magna consequat ac. Nullam lobortis metus ut magna placerat, nec tristique urna aliquet. Maecenas lacinia mi a purus eleifend, non dapibus turpis venenatis. Sed vulputate leo quis urna ullamcorper, et lacinia urna sollicitudin. Nulla id est nec ex luctus blandit.
                </p>
            </div>
        </div>
    );
};

export default About;
