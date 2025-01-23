const DynamicTitle = ({ title, textColor = 'text-white' }) => {
    return (
        <div>
            <h3 className={`text-4xl font-bold mb-6 text-center ${textColor}`}>
                {title}
            </h3>
        </div>
    );
};

export default DynamicTitle;
